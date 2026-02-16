# 역동적 랜딩페이지 구현 계획

> **For Claude:** 이 계획을 단계별로 구현하세요. 각 작업을 순차적으로 완료하세요.

**Goal:** GSAP 기반 Awwwards 스타일 역동적 랜딩페이지 구축

**Architecture:** Next.js 16 App Router + GSAP ScrollTrigger를 활용한 스크롤 기반 애니메이션 시스템. Server Components로 SEO 최적화, Client Components로 인터랙션 구현.

**Tech Stack:** Next.js 16.1.6, React 19, GSAP 3.12.5, Tailwind CSS 4, TypeScript 5

---

## 🏗️ Phase 1: 기반 구축 (GSAP 설정 & 콘텐츠 구조)

### Task 1: GSAP 글로벌 설정 및 훅 구현

**Files:**
- Create: `src/lib/gsap-config.ts`
- Create: `src/hooks/useGSAP.ts`

**Step 1: GSAP 글로벌 설정 파일 생성**

`src/lib/gsap-config.ts`:
```typescript
'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// GSAP 플러그인 등록
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// 글로벌 기본값
gsap.defaults({
  ease: 'power3.out',
  duration: 1,
})

// ScrollTrigger 기본값
ScrollTrigger.defaults({
  markers: process.env.NODE_ENV === 'development',
})

// GSAP 설정 초기화 훅
export function useGSAPConfig() {
  useEffect(() => {
    // 페이지 로드 후 ScrollTrigger refresh
    ScrollTrigger.refresh()

    return () => {
      // Cleanup: 모든 ScrollTrigger 인스턴스 제거
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
}

// prefers-reduced-motion 감지
export function usePrefersReducedMotion() {
  if (typeof window === 'undefined') return false
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
```

**Step 2: useGSAP 커스텀 훅 생성**

`src/hooks/useGSAP.ts`:
```typescript
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

type UseGSAPCallback = (context: gsap.Context) => void | (() => void)

export function useGSAP(
  callback: UseGSAPCallback,
  dependencies: any[] = []
) {
  const contextRef = useRef<gsap.Context>()

  useEffect(() => {
    // GSAP Context 생성 (자동 cleanup)
    contextRef.current = gsap.context(() => {
      callback(contextRef.current!)
    })

    return () => {
      // Context cleanup
      contextRef.current?.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return contextRef
}
```

**Step 3: 타입 검증**

Run: `npx tsc --noEmit`  
Expected: No errors

**Step 4: Commit**

```bash
git add src/lib/gsap-config.ts src/hooks/useGSAP.ts
git commit -m "feat: add GSAP configuration and custom hooks"
```

---

### Task 2: 콘텐츠 데이터 구조 정의

**Files:**
- Create: `src/lib/content.ts`

**Step 1: 콘텐츠 타입 및 데이터 생성**

`src/lib/content.ts`:
```typescript
export interface HeroContent {
  title: string
  subtitle: string
  cta: {
    primary: { text: string; href: string }
    secondary: { text: string; href: string }
  }
}

export interface Feature {
  id: number
  title: string
  icon: string
  description: string
  color: string
}

export interface ShowcaseItem {
  id: number
  title: string
  image: string
  tags: string[]
  description: string
}

export const heroContent: HeroContent = {
  title: 'Build the Future',
  subtitle: 'Revolutionary solutions for modern challenges with cutting-edge technology',
  cta: {
    primary: { text: 'Get Started', href: '#demo' },
    secondary: { text: 'Learn More', href: '#features' },
  },
}

export const features: Feature[] = [
  {
    id: 1,
    title: 'Lightning Fast',
    icon: '⚡',
    description: 'Optimized for speed and performance with modern web technologies',
    color: '#FFD700',
  },
  {
    id: 2,
    title: 'Secure',
    icon: '🔒',
    description: 'Enterprise-grade security protecting your data and privacy',
    color: '#4169E1',
  },
  {
    id: 3,
    title: 'Scalable',
    icon: '📈',
    description: 'Grows with your business from startup to enterprise',
    color: '#32CD32',
  },
  {
    id: 4,
    title: 'User-Friendly',
    icon: '✨',
    description: 'Intuitive interface designed for seamless user experience',
    color: '#FF69B4',
  },
]

export const showcaseItems: ShowcaseItem[] = [
  {
    id: 1,
    title: 'Project Alpha',
    image: '/images/showcase-1.jpg',
    tags: ['Design', 'Development'],
    description: 'A revolutionary approach to modern web applications',
  },
  {
    id: 2,
    title: 'Project Beta',
    image: '/images/showcase-2.jpg',
    tags: ['Innovation', 'Technology'],
    description: 'Pushing boundaries with cutting-edge solutions',
  },
  {
    id: 3,
    title: 'Project Gamma',
    image: '/images/showcase-3.jpg',
    tags: ['UI/UX', 'Interactive'],
    description: 'Crafting exceptional digital experiences',
  },
]
```

**Step 2: 타입 검증**

Run: `npx tsc --noEmit`  
Expected: No errors

**Step 3: Commit**

```bash
git add src/lib/content.ts
git commit -m "feat: add content data structure and types"
```

---

## 🎨 Phase 2: 애니메이션 컴포넌트 구축

### Task 3: SplitText 애니메이션 컴포넌트

**Files:**
- Create: `src/components/animations/SplitText.tsx`

**Step 1: SplitText 컴포넌트 구현**

`src/components/animations/SplitText.tsx`:
```typescript
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@/hooks/useGSAP'
import { usePrefersReducedMotion } from '@/lib/gsap-config'

interface SplitTextProps {
  text: string
  className?: string
  staggerDelay?: number
  duration?: number
}

export function SplitText({
  text,
  className = '',
  staggerDelay = 0.05,
  duration = 0.8,
}: SplitTextProps) {
  const containerRef = useRef<HTMLHeadingElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(() => {
    if (!containerRef.current || prefersReducedMotion) return

    const chars = containerRef.current.querySelectorAll('.char')

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 50,
        rotateX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration,
        stagger: staggerDelay,
        ease: 'power3.out',
      }
    )
  }, [prefersReducedMotion, staggerDelay, duration])

  // 텍스트를 글자 단위로 분할
  const chars = text.split('').map((char, i) => (
    <span
      key={i}
      className="char inline-block"
      style={prefersReducedMotion ? {} : { opacity: 0 }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))

  return (
    <h1 ref={containerRef} className={className}>
      {chars}
    </h1>
  )
}
```

**Step 2: 타입 검증**

Run: `npx tsc --noEmit`  
Expected: No errors

**Step 3: Commit**

```bash
git add src/components/animations/SplitText.tsx
git commit -m "feat: add SplitText animation component"
```

---

### Task 4: MagneticButton 컴포넌트

**Files:**
- Create: `src/components/animations/MagneticButton.tsx`

**Step 1: MagneticButton 컴포넌트 구현**

`src/components/animations/MagneticButton.tsx`:
```typescript
'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { usePrefersReducedMotion } from '@/lib/gsap-config'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
  href?: string
  onClick?: () => void
}

export function MagneticButton({
  children,
  className = '',
  strength = 0.5,
  href,
  onClick,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current || prefersReducedMotion) return

    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength

    gsap.to(buttonRef.current, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    if (!buttonRef.current || prefersReducedMotion) return

    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    })
    setIsHovering(false)
  }

  const commonProps = {
    ref: buttonRef as any,
    className,
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: handleMouseLeave,
    onClick,
  }

  if (href) {
    return (
      <a {...commonProps} href={href}>
        {children}
      </a>
    )
  }

  return <button {...commonProps}>{children}</button>
}
```

**Step 2: 타입 검증**

Run: `npx tsc --noEmit`  
Expected: No errors

**Step 3: Commit**

```bash
git add src/components/animations/MagneticButton.tsx
git commit -m "feat: add MagneticButton component"
```

---

### Task 5: RevealOnScroll 컴포넌트

**Files:**
- Create: `src/components/animations/RevealOnScroll.tsx`

**Step 1: RevealOnScroll 컴포넌트 구현**

`src/components/animations/RevealOnScroll.tsx`:
```typescript
'use client'

import { useRef, ReactNode } from 'react'
import { useGSAP } from '@/hooks/useGSAP'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from '@/lib/gsap-config'

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
  delay?: number
}

export function RevealOnScroll({
  children,
  className = '',
  direction = 'up',
  distance = 100,
  delay = 0,
}: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(() => {
    if (!elementRef.current || prefersReducedMotion) {
      // Reduced motion: 즉시 표시
      if (elementRef.current) {
        gsap.set(elementRef.current, { opacity: 1, x: 0, y: 0 })
      }
      return
    }

    const directionMap = {
      up: { y: distance, x: 0 },
      down: { y: -distance, x: 0 },
      left: { x: distance, y: 0 },
      right: { x: -distance, y: 0 },
    }

    const startPosition = directionMap[direction]

    gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
        ...startPosition,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [direction, distance, delay, prefersReducedMotion])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
```

**Step 2: 타입 검증**

Run: `npx tsc --noEmit`  
Expected: No errors

**Step 3: Commit**

```bash
git add src/components/animations/RevealOnScroll.tsx
git commit -m "feat: add RevealOnScroll component"
```

---

## 🏗️ Phase 3: 섹션 컴포넌트 구현

### Task 6: Hero 섹션

**Files:**
- Create: `src/components/sections/Hero.tsx`

**Step 1: Hero 컴포넌트 구현**

`src/components/sections/Hero.tsx`:
```typescript
'use client'

import { useRef } from 'react'
import { useGSAP } from '@/hooks/useGSAP'
import gsap from 'gsap'
import { SplitText } from '@/components/animations/SplitText'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { heroContent } from '@/lib/content'
import { usePrefersReducedMotion } from '@/lib/gsap-config'

export function Hero() {
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(() => {
    if (prefersReducedMotion) return

    // Subtitle 애니메이션
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: 'power3.out' }
      )
    }

    // Scroll indicator 애니메이션
    if (scrollIndicatorRef.current) {
      gsap.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 1.5,
          ease: 'power3.out',
        }
      )

      // Bounce 애니메이션
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 2,
      })
    }
  }, [prefersReducedMotion])

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-primary/10" />

      {/* Content */}
      <div className="max-w-5xl text-center">
        <SplitText
          text={heroContent.title}
          className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
        />

        <p
          ref={subtitleRef}
          className="mt-6 text-xl text-muted-foreground sm:text-2xl"
          style={prefersReducedMotion ? {} : { opacity: 0 }}
        >
          {heroContent.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <MagneticButton
            href={heroContent.cta.primary.href}
            className="rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {heroContent.cta.primary.text}
          </MagneticButton>

          <MagneticButton
            href={heroContent.cta.secondary.href}
            className="rounded-lg border-2 border-input bg-background px-8 py-4 text-lg font-semibold transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {heroContent.cta.secondary.text}
          </MagneticButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 flex flex-col items-center gap-2"
        style={prefersReducedMotion ? {} : { opacity: 0 }}
      >
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
        <svg
          className="h-6 w-6 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
```

**Step 2: 타입 검증**

Run: `npx tsc --noEmit`  
Expected: No errors

**Step 3: Commit**

```bash
git add src/components/sections/Hero.tsx
git commit -m "feat: add Hero section with animations"
```

---

### Task 7: Features 섹션 (수평 스크롤)

**Files:**
- Create: `src/components/sections/Features.tsx`

**Step 1: Features 컴포넌트 구현**

`src/components/sections/Features.tsx`:
```typescript
'use client'

import { useRef } from 'react'
import { useGSAP } from '@/hooks/useGSAP'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { features } from '@/lib/content'
import { usePrefersReducedMotion } from '@/lib/gsap-config'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(() => {
    if (!containerRef.current || !scrollContainerRef.current || prefersReducedMotion) {
      return
    }

    const container = containerRef.current
    const scrollContainer = scrollContainerRef.current

    // 수평 스크롤 애니메이션
    const scrollWidth = scrollContainer.scrollWidth - window.innerWidth

    gsap.to(scrollContainer, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${scrollWidth}`,
        invalidateOnRefresh: true,
      },
    })
  }, [prefersReducedMotion])

  // 모바일: 세로 스택
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return (
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
          <div className="grid gap-8">
            {features.map((feature) => (
              <RevealOnScroll key={feature.id} direction="up">
                <FeatureCard feature={feature} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // 데스크톱: 수평 스크롤
  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="absolute flex h-full items-center gap-8 px-6"
      >
        <div className="flex-shrink-0 w-screen flex items-center justify-center">
          <h2 className="text-5xl font-bold">Features</h2>
        </div>

        {features.map((feature) => (
          <div key={feature.id} className="flex-shrink-0 w-[400px]">
            <FeatureCard feature={feature} />
          </div>
        ))}

        <div className="flex-shrink-0 w-screen" />
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8 shadow-lg transition-transform hover:scale-105">
      <div
        className="mb-4 text-6xl"
        style={{ filter: `drop-shadow(0 0 20px ${feature.color})` }}
      >
        {feature.icon}
      </div>
      <h3 className="mb-3 text-2xl font-bold">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  )
}
```

**Step 2: 타입 검증**

Run: `npx tsc --noEmit`  
Expected: No errors

**Step 3: Commit**

```bash
git add src/components/sections/Features.tsx
git commit -m "feat: add Features section with horizontal scroll"
```

---

### Task 8: Showcase 섹션

**Files:**
- Create: `src/components/sections/Showcase.tsx`

**Step 1: Showcase 컴포넌트 구현**

`src/components/sections/Showcase.tsx`:
```typescript
'use client'

import { showcaseItems } from '@/lib/content'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

export function Showcase() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-5xl font-bold text-center mb-16">Showcase</h2>
        </RevealOnScroll>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {showcaseItems.map((item, index) => (
            <RevealOnScroll
              key={item.id}
              direction="up"
              delay={index * 0.1}
            >
              <ShowcaseCard item={item} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

function ShowcaseCard({ item }: { item: typeof showcaseItems[0] }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all hover:shadow-2xl">
      {/* 이미지 플레이스홀더 */}
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 transition-transform group-hover:scale-110">
        <div className="flex h-full items-center justify-center text-4xl font-bold text-muted-foreground/20">
          {item.title}
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-bold">{item.title}</h3>
        <p className="mb-4 text-muted-foreground">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
```

**Step 2: 타입 검증**

Run: `npx tsc --noEmit`  
Expected: No errors

**Step 3: Commit**

```bash
git add src/components/sections/Showcase.tsx
git commit -m "feat: add Showcase section"
```

---

### Task 9: CTA 섹션

**Files:**
- Create: `src/components/sections/CTA.tsx`

**Step 1: CTA 컴포넌트 구현**

`src/components/sections/CTA.tsx`:
```typescript
'use client'

import { MagneticButton } from '@/components/animations/MagneticButton'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

export function CTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-primary/10 to-background animate-gradient-shift" />

      <div className="max-w-4xl mx-auto text-center">
        <RevealOnScroll direction="up">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={0.2}>
          <p className="text-xl text-muted-foreground mb-10">
            Join thousands of users already transforming their workflow with our platform.
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={0.4}>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <MagneticButton
              href="#get-started"
              className="rounded-lg bg-primary px-10 py-5 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start Free Trial
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="rounded-lg border-2 border-input bg-background px-10 py-5 text-lg font-semibold transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Contact Sales
            </MagneticButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
```

**Step 2: Tailwind 애니메이션 추가**

`src/app/globals.css`에 추가:
```css
@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-shift {
  background-size: 200% 200%;
  animation: gradient-shift 15s ease infinite;
}
```

**Step 3: 타입 검증**

Run: `npx tsc --noEmit`  
Expected: No errors

**Step 4: Commit**

```bash
git add src/components/sections/CTA.tsx src/app/globals.css
git commit -m "feat: add CTA section with animated gradient"
```

---

## 🎯 Phase 4: 메인 페이지 통합

### Task 10: 메인 페이지 업데이트

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: 모든 섹션 통합**

`src/app/page.tsx`:
```typescript
import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { Showcase } from '@/components/sections/Showcase'
import { CTA } from '@/components/sections/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Showcase />
      <CTA />
    </main>
  )
}
```

**Step 2: Layout에 GSAP 설정 추가**

`src/app/layout.tsx`에서 RootLayout 업데이트:
```typescript
import type { Metadata } from 'next'
import './globals.css'
import { Geist } from 'next/font/geist'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '역동적 랜딩페이지',
  description: 'GSAP 기반 Awwwards 스타일 랜딩페이지',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={geist.className}>{children}</body>
    </html>
  )
}
```

**Step 3: 빌드 테스트**

Run: `npm run build`  
Expected: Build succeeds without errors

**Step 4: 개발 서버 실행**

Run: `npm run dev`  
Expected: Server starts on http://localhost:3000

**Step 5: Commit**

```bash
git add src/app/page.tsx src/app/layout.tsx
git commit -m "feat: integrate all sections into main page"
```

---

## 🧪 Phase 5: 최적화 & 폴리싱

### Task 11: 성능 최적화

**Files:**
- Modify: `src/components/sections/Features.tsx`
- Create: `next.config.ts` (이미 존재하면 수정)

**Step 1: 동적 import로 코드 스플리팅**

`src/app/page.tsx` 업데이트:
```typescript
import dynamic from 'next/dynamic'
import { Hero } from '@/components/sections/Hero'

const Features = dynamic(() => import('@/components/sections/Features').then(mod => ({ default: mod.Features })))
const Showcase = dynamic(() => import('@/components/sections/Showcase').then(mod => ({ default: mod.Showcase })))
const CTA = dynamic(() => import('@/components/sections/CTA').then(mod => ({ default: mod.CTA })))

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Showcase />
      <CTA />
    </main>
  )
}
```

**Step 2: Next.js 설정 최적화**

`next.config.ts`:
```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['gsap'],
  },
}

export default nextConfig
```

**Step 3: 빌드 크기 확인**

Run: `npm run build`  
Expected: Bundle size analysis in output

**Step 4: Commit**

```bash
git add src/app/page.tsx next.config.ts
git commit -m "perf: add code splitting and optimize bundle"
```

---

### Task 12: 접근성 개선

**Files:**
- Modify: `src/components/sections/Hero.tsx`
- Modify: `src/components/animations/RevealOnScroll.tsx`

**Step 1: ARIA labels 추가**

`src/components/sections/Hero.tsx` 업데이트:
```typescript
// Scroll Indicator에 aria-label 추가
<div
  ref={scrollIndicatorRef}
  className="absolute bottom-10 flex flex-col items-center gap-2"
  style={prefersReducedMotion ? {} : { opacity: 0 }}
  aria-label="Scroll down to explore more content"
  role="button"
  tabIndex={0}
>
  {/* ... */}
</div>
```

**Step 2: 키보드 네비게이션**

`src/components/animations/MagneticButton.tsx`에서 키보드 이벤트 추가:
```typescript
const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    onClick?.()
  }
}

// commonProps에 추가
const commonProps = {
  // ... 기존 props
  onKeyDown: handleKeyDown,
  tabIndex: 0,
}
```

**Step 3: Lighthouse 테스트**

Run: `npm run build && npm start`  
Then: Chrome DevTools > Lighthouse > Run audit  
Expected: Accessibility score 90+

**Step 4: Commit**

```bash
git add src/components/sections/Hero.tsx src/components/animations/MagneticButton.tsx
git commit -m "a11y: improve accessibility with ARIA labels and keyboard support"
```

---

## ✅ 최종 검증

### Task 13: 최종 테스트 및 검증

**Step 1: 타입 검사**

Run: `npx tsc --noEmit`  
Expected: No errors

**Step 2: Lint 검사**

Run: `npm run lint`  
Expected: No errors or warnings

**Step 3: 프로덕션 빌드**

Run: `npm run build`  
Expected: Build succeeds

**Step 4: 프로덕션 서버 실행**

Run: `npm start`  
Expected: Server runs without errors

**Step 5: 브라우저 테스트 체크리스트**

- [ ] Hero 섹션: SplitText 애니메이션 작동
- [ ] Hero 섹션: MagneticButton 마우스 반응
- [ ] Features 섹션: 수평 스크롤 작동 (데스크톱)
- [ ] Features 섹션: 세로 스택 표시 (모바일)
- [ ] Showcase 섹션: 카드 reveal 애니메이션
- [ ] CTA 섹션: 배경 그라데이션 애니메이션
- [ ] 전체: prefers-reduced-motion 작동 확인

**Step 6: 최종 Commit**

```bash
git add .
git commit -m "chore: final verification and testing complete"
```

---

## 🎉 완료

모든 작업이 완료되었습니다!

**다음 단계 (선택사항):**
1. 실제 이미지 추가 (`/public/images/`)
2. Lenis smooth scroll 추가 (더 부드러운 스크롤)
3. 추가 섹션 (Testimonials, Pricing 등)
4. SEO 메타데이터 최적화
5. Analytics 통합

**참고 문서:**
- 설계 문서: `docs/plans/2026-02-16-dynamic-landing-page-design.md`
- GSAP 공식 문서: https://greensock.com/docs/
- Next.js 문서: https://nextjs.org/docs

# 역동적 랜딩페이지 설계 문서

**작성일**: 2026-02-16  
**프로젝트**: form-product  
**접근법**: Awwwards 스타일 프리미엄 랜딩페이지

---

## 📋 개요

Next.js 16 + GSAP + Tailwind CSS 4를 활용한 고급 애니메이션 기반 랜딩페이지 구축. 스크롤 인터랙션과 시각적 임팩트에 중점을 둔 Awwwards 수준의 사용자 경험 제공.

---

## 🎯 목표

- **시각적 임팩트**: 첫 방문 시 강렬한 인상 제공
- **역동성**: GSAP 기반 부드럽고 세련된 애니메이션
- **성능**: Lighthouse 90+ 점수 유지
- **반응형**: 모든 디바이스에서 최적화된 경험

---

## 🏗️ 아키텍처 구조

### 디렉토리 구조

```
src/
├── app/
│   ├── page.tsx              # 메인 랜딩페이지 (RSC)
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── sections/
│   │   ├── Hero.tsx          # Hero 섹션 (Client)
│   │   ├── Features.tsx      # 수평 스크롤 Features
│   │   ├── Showcase.tsx      # 3D 카드 갤러리
│   │   └── CTA.tsx           # Call-to-Action
│   ├── animations/
│   │   ├── SplitText.tsx     # 텍스트 분할 애니메이션
│   │   ├── MagneticButton.tsx # 마그네틱 버튼
│   │   ├── ParallaxImage.tsx  # 패럴랙스 이미지
│   │   └── RevealOnScroll.tsx # 스크롤 reveal
│   └── ui/                   # shadcn/ui 컴포넌트
├── hooks/
│   ├── useGSAP.ts            # GSAP 훅
│   ├── useScrollTrigger.ts   # ScrollTrigger 훅
│   └── useSmoothScroll.ts    # Smooth scroll 훅
└── lib/
    ├── gsap-config.ts        # GSAP 글로벌 설정
    ├── content.ts            # 정적 콘텐츠
    └── utils.ts
```

### 설계 원칙

1. **Server Components 우선**: 기본적으로 RSC 사용, 애니메이션 필요 시에만 Client Components
2. **코드 스플리팅**: 섹션별 lazy loading으로 초기 번들 크기 최소화
3. **GSAP Context 재사용**: 메모리 효율성을 위한 컨텍스트 관리
4. **Progressive Enhancement**: 기본 콘텐츠는 JS 없이도 접근 가능

---

## 🎬 핵심 섹션 & 애니메이션

### 1. Hero Section

**목적**: 첫 인상 형성, 핵심 메시지 전달

**구성 요소**:
- Split Text Animation: 제목이 글자 단위로 stagger fade-in
- Magnetic Button: 마우스 따라 움직이는 CTA 버튼
- Parallax Background: 3-layer 패럴랙스 배경 (0.2x, 0.5x, 1x 속도)
- Scroll Indicator: 부드러운 bounce 애니메이션

**애니메이션 타임라인**:
```
0.0s: Background fade-in
0.3s: Split text animation 시작 (stagger 0.05s)
0.8s: Subtitle fade-in
1.2s: CTA 버튼 scale-in
1.5s: Scroll indicator 등장
```

### 2. Features Section (수평 스크롤)

**목적**: 주요 기능을 인터랙티브하게 탐색

**구성 요소**:
- Horizontal Scroll: 세로 스크롤로 가로 이동 제어
- Pin: 스크롤 중 섹션 고정
- Progress Bar: 스크롤 진행도 표시
- Feature Cards: 각 카드는 뷰포트 진입 시 reveal

**ScrollTrigger 설정**:
```typescript
{
  trigger: features-container,
  pin: true,
  scrub: 1,
  horizontal: true,
  snap: 1 / (cards.length - 1),
  end: "+=3000"
}
```

### 3. Showcase Section

**목적**: 포트폴리오/제품 시각화

**구성 요소**:
- 3D Tilt Cards: 마우스 움직임에 반응하는 카드
- Reveal on Scroll: Y축 이동 + opacity 애니메이션
- Stagger: 0.1초 간격 순차 등장
- Parallax: 배경과 전경 요소 차등 속도

**애니메이션 트리거**:
```typescript
{
  trigger: each-card,
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play none none reverse"
}
```

### 4. CTA Section

**목적**: 전환 유도

**구성 요소**:
- Morphing Gradient: 배경 그라데이션 애니메이션
- Ripple Effect: 버튼 클릭 시 파동 효과
- Final Reveal: 스크롤 진입 시 전체 섹션 fade-in

---

## 📊 데이터 플로우

### 정적 콘텐츠 관리

```typescript
// lib/content.ts
export const heroContent = {
  title: "Build the Future",
  subtitle: "Revolutionary solutions for modern challenges",
  cta: {
    primary: { text: "Get Started", href: "#demo" },
    secondary: { text: "Learn More", href: "#features" }
  }
}

export const features = [
  {
    id: 1,
    title: "Lightning Fast",
    icon: "⚡",
    description: "Optimized for speed and performance",
    color: "#FFD700"
  },
  {
    id: 2,
    title: "Secure",
    icon: "🔒",
    description: "Enterprise-grade security",
    color: "#4169E1"
  },
  // ... more features
]

export const showcaseItems = [
  {
    id: 1,
    title: "Project Alpha",
    image: "/images/showcase-1.jpg",
    tags: ["Design", "Development"]
  },
  // ... more items
]
```

### 데이터 소스

- **콘텐츠**: TypeScript 객체 (타입 안전성)
- **이미지**: `/public/images/` + Next.js Image 컴포넌트
- **아이콘**: lucide-react 라이브러리
- **폰트**: next/font (Geist)

---

## ⚙️ GSAP 설정 & 최적화

### 글로벌 설정

```typescript
// lib/gsap-config.ts
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// 기본값 설정
gsap.defaults({
  ease: 'power3.out',
  duration: 1
})

ScrollTrigger.defaults({
  markers: process.env.NODE_ENV === 'development'
})

// ScrollTrigger refresh (layout shift 방지)
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    ScrollTrigger.refresh()
  })
}
```

### 최적화 전략

1. **useGSAP 훅 사용**: 자동 cleanup으로 메모리 누수 방지
2. **matchMedia**: 디바이스별 애니메이션 분기
3. **will-change CSS**: GPU 가속 활성화
4. **Lazy load**: 뷰포트 밖 애니메이션은 비활성화
5. **Context 재사용**: 컴포넌트 언마운트 시 안전한 정리

```typescript
// 예시: matchMedia 사용
useGSAP(() => {
  const mm = gsap.matchMedia()
  
  mm.add("(min-width: 1024px)", () => {
    // Desktop: 복잡한 애니메이션
    gsap.to(el, { /* ... */ })
  })
  
  mm.add("(max-width: 767px)", () => {
    // Mobile: 단순화된 애니메이션
    gsap.to(el, { /* ... */ })
  })
  
  return () => mm.revert() // cleanup
})
```

---

## 📱 반응형 전략

### Breakpoint별 동작

| Breakpoint | Hero | Features | Showcase | CTA |
|------------|------|----------|----------|-----|
| **Desktop** (>1024px) | 3-layer parallax | 수평 스크롤 | 3D tilt cards | Full animations |
| **Tablet** (768-1024px) | 2-layer parallax | 수평 스크롤 | 2D hover cards | Simplified |
| **Mobile** (<768px) | Fade-in only | 세로 스택 | Simple reveal | Minimal |

### 모바일 최적화

- **터치 인터랙션**: hover → tap 대체
- **애니메이션 단순화**: 복잡한 효과 제거
- **성능 우선**: 60fps 유지
- **스크롤 snap**: 섹션별 자연스러운 이동

```typescript
// 모바일 감지 및 최적화
const isMobile = () => window.innerWidth < 768

if (isMobile()) {
  // 복잡한 애니메이션 비활성화
  ScrollTrigger.disable()
}
```

---

## 🧪 성능 & 접근성

### 성능 목표

- **Lighthouse Score**: 90+ (Performance)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Cumulative Layout Shift**: < 0.1
- **Total Blocking Time**: < 300ms

### 최적화 기법

1. **이미지 최적화**: Next.js Image (WebP, lazy loading)
2. **코드 스플리팅**: 동적 import로 번들 크기 감소
3. **GSAP Context cleanup**: 메모리 누수 방지
4. **CSS containment**: 레이아웃 리플로우 최소화
5. **Preload critical assets**: 중요 리소스 우선 로딩

```tsx
// 예시: 동적 import
const Hero = dynamic(() => import('@/components/sections/Hero'), {
  loading: () => <HeroSkeleton />
})
```

### 접근성

1. **prefers-reduced-motion**: 애니메이션 비활성화 옵션
2. **Semantic HTML**: 적절한 태그 사용 (`<section>`, `<h1>`, `<nav>`)
3. **Keyboard Navigation**: Tab 순서 보장
4. **ARIA Labels**: 동적 요소에 적절한 라벨
5. **Color Contrast**: WCAG AA 준수

```typescript
// prefers-reduced-motion 감지
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

if (prefersReducedMotion) {
  gsap.set(element, { /* 최종 상태로 즉시 설정 */ })
} else {
  gsap.to(element, { /* 애니메이션 실행 */ })
}
```

---

## 🔧 기술 스택 & Dependencies

### 현재 스택 (이미 설치됨)

```json
{
  "next": "16.1.6",
  "react": "19.2.3",
  "gsap": "^3.12.5",
  "@gsap/react": "^2.1.1",
  "tailwindcss": "^4",
  "lucide-react": "^0.469.0",
  "shadcn": "^3.8.4"
}
```

### 추가 권장 Dependencies

```json
{
  "lenis": "^1.0.0"  // Smooth scroll (GSAP ScrollSmoother 무료 대안)
}
```

**Lenis 추가 이유**:
- GSAP ScrollSmoother는 Pro 플러그인 (유료)
- Lenis는 무료 & 성능 우수
- 부드러운 스크롤 경험 제공
- 선택사항 (native scroll도 충분히 가능)

---

## 🚀 구현 우선순위

### Phase 1: 기반 구축 (1-2일)

1. GSAP 설정 및 훅 구현
2. 콘텐츠 데이터 구조 정의
3. 기본 레이아웃 & 스타일링
4. Hero 섹션 구현 (기본 애니메이션)

### Phase 2: 핵심 섹션 (2-3일)

1. Hero 섹션 고급 애니메이션 (split text, magnetic button)
2. Features 섹션 (수평 스크롤)
3. Showcase 섹션 (3D cards, reveal)
4. CTA 섹션

### Phase 3: 폴리싱 (1-2일)

1. 반응형 조정
2. 성능 최적화
3. 접근성 개선
4. 크로스 브라우저 테스트

---

## 🎨 디자인 가이드

### 색상 팔레트 (Tailwind 기반)

- **Primary**: 그라데이션 (from-primary to-primary/50)
- **Background**: bg-background
- **Text**: text-foreground
- **Accent**: text-muted-foreground
- **CTA**: bg-primary, hover:bg-primary/90

### 타이포그래피

- **Hero Title**: text-6xl, font-bold, tracking-tight
- **Subtitle**: text-xl, text-muted-foreground
- **Body**: text-base, leading-relaxed
- **Font Family**: Geist (next/font)

### 애니메이션 타이밍

- **Ease**: power3.out (기본)
- **Duration**: 1s (기본)
- **Stagger**: 0.05s - 0.1s
- **Scrub**: 1 (smooth scroll)

---

## 📝 다음 단계

1. ✅ 설계 문서 작성 완료
2. ⏳ Implementation Plan 작성 (writing-plans 스킬)
3. ⏳ 개발 시작 (Phase 1부터 순차 진행)
4. ⏳ 테스트 & 최적화
5. ⏳ 배포

---

**작성자**: Antigravity AI  
**검토일**: 2026-02-16  
**상태**: 승인 대기 → 구현 계획 단계로 전환

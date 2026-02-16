'use client'

import { MagneticButton } from '@/components/animations/MagneticButton'
import { SplitText } from '@/components/animations/SplitText'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { heroContent } from '@/lib/content'

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_20%,rgba(0,153,255,0.18),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(0,153,255,0.08),transparent_30%)]" />

      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <RevealOnScroll>
            <p className="mb-6 inline-flex border border-border px-4 py-2 text-sm font-semibold tracking-wide text-foreground-muted">
              가입상품 영업 전용 신청폼
            </p>
          </RevealOnScroll>

          <SplitText
            text={heroContent.headline}
            className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          />

          <RevealOnScroll delay={0.2}>
            <p className="mt-8 whitespace-pre-line text-lg leading-relaxed text-foreground-muted sm:text-xl">
              {heroContent.subheadline}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MagneticButton
                href={heroContent.cta.primary.href}
                className="border-2 border-primary bg-primary px-8 py-4 text-center text-base font-semibold text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
              >
                {heroContent.cta.primary.text}
              </MagneticButton>
              <MagneticButton
                href={heroContent.cta.secondary.href}
                className="border-2 border-foreground px-8 py-4 text-center text-base font-semibold transition-all hover:bg-foreground hover:text-background"
              >
                {heroContent.cta.secondary.text}
              </MagneticButton>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll direction="left" delay={0.2}>
          <div className="mx-auto w-full max-w-md border border-border bg-surface p-5 shadow-[0_24px_80px_rgba(0,0,0,0.16)]">
            <div className="mb-4 border border-border bg-background px-4 py-3 text-sm font-medium text-foreground-muted">
              상단 이미지 영역 (플레이스홀더)
            </div>

            <div className="space-y-3 border border-primary/30 bg-gradient-to-b from-primary/15 to-transparent p-4">
              <p className="text-sm font-semibold text-primary">신청폼 미리보기</p>
              <div className="h-9 border border-border bg-background" />
              <div className="h-9 border border-border bg-background" />
              <div className="h-9 border border-border bg-background" />
              <div className="h-11 border border-primary bg-primary/10" />
            </div>

            <div className="mt-4 border border-border bg-background px-4 py-3 text-sm font-medium text-foreground-muted">
              하단 이미지 영역 (플레이스홀더)
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

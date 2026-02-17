'use client'

import { MagneticButton } from '@/components/animations/MagneticButton'
import { SplitText } from '@/components/animations/SplitText'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { heroContent } from '@/lib/content'

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-48 lg:py-56">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px] mix-blend-screen animate-pulse delay-1000" />
        <div className="absolute top-[20%] right-[20%] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px] mix-blend-screen" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        <div className="relative z-10">
          <RevealOnScroll>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              가입상품 영업 전용 접수폼
            </div>
          </RevealOnScroll>

          <SplitText
            text={heroContent.headline}
            className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl drop-shadow-2xl max-w-2xl"
          />

          <RevealOnScroll delay={0.2}>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-lg">
              {heroContent.subheadline}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <MagneticButton
                href={heroContent.cta.primary.href}
                className="group relative overflow-hidden rounded-full bg-foreground px-8 py-4 text-base font-bold text-background transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
              >
                <span className="relative z-10">{heroContent.cta.primary.text}</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-foreground to-primary opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
              </MagneticButton>
              <MagneticButton
                href={heroContent.cta.secondary.href}
                className="group rounded-full border border-border bg-card/50 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-card/80 hover:border-primary/50"
              >
                {heroContent.cta.secondary.text}
              </MagneticButton>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <div className="mt-12 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                1~2일 내 제작
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                5만원부터 시작
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-primary" />
                카드 등록 없음
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <div className="relative lg:h-[600px] flex items-center justify-center">
          <RevealOnScroll direction="left" delay={0.2} className="relative w-full max-w-[400px] sm:max-w-[350px]">
            {/* Glassmorphic Card Stack */}
            <div className="relative aspect-[3/4] w-full rounded-3xl border border-border/50 bg-card/50 p-6 backdrop-blur-2xl shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-border/80">
              {/* Decorative elements inside card */}
              <div className="absolute top-0 right-0 -mr-10 -mt-10 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
              <div className="absolute bottom-0 left-0 -ml-10 -mb-10 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
              
              {/* Card Content Mockup */}
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border/20 bg-background/40">
                <div className="flex items-center justify-between border-b border-border/10 p-4">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/50" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                    <div className="h-3 w-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="h-2 w-20 rounded-full bg-foreground/10" />
                </div>
                <div className="p-6 space-y-6">
                  <div className="h-8 w-2/3 rounded-lg bg-foreground/10 animate-pulse" />
                  <div className="space-y-3">
                    <div className="h-4 w-full rounded bg-foreground/5" />
                    <div className="h-4 w-5/6 rounded bg-foreground/5" />
                    <div className="h-4 w-4/6 rounded bg-foreground/5" />
                  </div>
                  <div className="mt-8 h-12 w-full rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-medium">
                    신청하기
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -right-6 sm:-right-12 top-16 sm:top-20 rounded-2xl border border-border/50 bg-card/80 p-4 backdrop-blur-xl shadow-xl animate-float duration-[5000ms]">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">✓</div>
                <div>
                  <div className="text-xs text-muted-foreground">접수 완료</div>
                  <div className="font-semibold text-foreground">실시간 알림</div>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 sm:-left-8 bottom-24 sm:bottom-32 rounded-2xl border border-border/50 bg-card/80 p-4 backdrop-blur-xl shadow-xl animate-float delay-700 duration-[6000ms]">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">⚡</div>
                <div>
                  <div className="text-xs text-muted-foreground">빠른 처리</div>
                  <div className="font-semibold text-foreground">자동화 연동</div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

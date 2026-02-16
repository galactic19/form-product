'use client'

import { MagneticButton } from '@/components/animations/MagneticButton'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { finalCTAContent } from '@/lib/content'

export function FinalCTASection() {
  return (
    <section id="final-cta" className="relative border-t border-border/50 bg-background px-6 py-32 sm:py-48">
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        <RevealOnScroll>
          <div className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary shadow-[0_0_20px_rgba(0,153,255,0.3)] backdrop-blur-sm mb-8">
            ✨ 지금 바로 시작하세요
          </div>
        </RevealOnScroll>

        <SectionHeader
          title={finalCTAContent.headline}
          subtitle={finalCTAContent.subheadline}
          align="center"
          className="mx-auto max-w-3xl"
        />

        <RevealOnScroll delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <MagneticButton
              href={finalCTAContent.cta.primary.href}
              className="group relative min-w-[240px] overflow-hidden rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:shadow-[0_0_40px_rgba(255,36,119,0.5)]"
            >
              <span className="relative z-10">{finalCTAContent.cta.primary.text}</span>
              <div className="absolute inset-0 -translate-x-full bg-white opacity-20 transition-transform group-hover:translate-x-0" />
            </MagneticButton>
            
            <MagneticButton
              href={finalCTAContent.cta.secondary.href}
              className="min-w-[240px] rounded-full border border-border/50 bg-card/50 px-8 py-4 text-lg font-bold text-foreground backdrop-blur-sm transition-all hover:bg-card/80 hover:border-border"
            >
              {finalCTAContent.cta.secondary.text}
            </MagneticButton>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            {finalCTAContent.trustSignals.map((signal) => (
              <span key={signal} className="flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                {signal}
              </span>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}


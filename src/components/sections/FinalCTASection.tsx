'use client'

import { MagneticButton } from '@/components/animations/MagneticButton'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { finalCTAContent } from '@/lib/content'

export function FinalCTASection() {
  return (
    <section id="final-cta" className="border-t border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl border border-border bg-[linear-gradient(145deg,rgba(0,153,255,0.18),rgba(0,0,0,0))] px-6 py-12 text-center shadow-[var(--glow-strong)] sm:px-10 sm:py-16">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">{finalCTAContent.headline}</h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="mt-5 text-lg text-foreground-muted sm:text-2xl">
            {finalCTAContent.subheadline}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <MagneticButton
              href={finalCTAContent.cta.primary.href}
              className="border-2 border-primary bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-transparent hover:text-primary sm:min-w-56"
            >
              {finalCTAContent.cta.primary.text}
            </MagneticButton>
            <MagneticButton
              href={finalCTAContent.cta.secondary.href}
              className="border-2 border-foreground px-8 py-4 text-base font-semibold transition-all hover:bg-foreground hover:text-background sm:min-w-56"
            >
              {finalCTAContent.cta.secondary.text}
            </MagneticButton>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-foreground-muted">
            {finalCTAContent.trustSignals.map((signal) => (
              <span key={signal} className="border border-border px-3 py-2">
                {signal}
              </span>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

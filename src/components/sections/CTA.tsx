'use client'

import { MagneticButton } from '@/components/animations/MagneticButton'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

export function CTA() {
  return (
    <section className="relative py-48 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <RevealOnScroll direction="up">
          <h2 className="text-8xl font-bold mb-12 tracking-tighter leading-none">
            Ready to Get Started?
          </h2>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={0.2}>
          <p className="text-2xl text-foreground-muted mb-16 max-w-3xl mx-auto leading-relaxed">
            Join thousands of users already transforming their workflow with our
            platform.
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={0.4}>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <MagneticButton
              href="#get-started"
              className="border-2 border-primary bg-primary px-12 py-6 text-lg font-semibold text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
            >
              Start Free Trial
            </MagneticButton>

            <MagneticButton
              href="#contact"
              className="border-2 border-foreground bg-transparent px-12 py-6 text-lg font-semibold transition-all hover:bg-foreground hover:text-background"
            >
              Contact Sales
            </MagneticButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

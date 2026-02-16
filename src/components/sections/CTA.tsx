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
          <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={0.2}>
          <p className="text-xl text-muted-foreground mb-10">
            Join thousands of users already transforming their workflow with our
            platform.
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

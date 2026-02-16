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

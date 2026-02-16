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
  }, [prefersReducedMotion])

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24">
      {/* Content */}
      <div className="max-w-7xl text-center">
        <SplitText
          text={heroContent.title}
          className="text-8xl font-bold tracking-tighter sm:text-[12rem] leading-none"
        />

        <p
          ref={subtitleRef}
          className="mt-12 text-xl text-foreground-muted sm:text-2xl max-w-3xl mx-auto"
          style={prefersReducedMotion ? {} : { opacity: 0 }}
        >
          {heroContent.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <MagneticButton
            href={heroContent.cta.primary.href}
            className="border-2 border-primary bg-primary px-10 py-5 text-lg font-semibold text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
          >
            {heroContent.cta.primary.text}
          </MagneticButton>

          <MagneticButton
            href={heroContent.cta.secondary.href}
            className="border-2 border-foreground bg-transparent px-10 py-5 text-lg font-semibold transition-all hover:bg-foreground hover:text-background"
          >
            {heroContent.cta.secondary.text}
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}

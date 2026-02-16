'use client'

import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SurfaceCard } from '@/components/ui/SurfaceCard'
import { testimonialsContent } from '@/lib/content'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="border-t border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title={testimonialsContent.title} subtitle={testimonialsContent.subtitle} />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonialsContent.testimonials.map((testimonial, index) => (
            <RevealOnScroll key={testimonial.id} direction="up" delay={index * 0.1}>
              <SurfaceCard className="h-full p-6">
                <p className="text-3xl leading-none text-primary">“</p>
                <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-foreground-muted sm:text-base">
                  {testimonial.quote}
                </p>
                <footer className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-foreground-muted">{testimonial.role}</p>
                </footer>
              </SurfaceCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

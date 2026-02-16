'use client'

import { Quote } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SurfaceCard } from '@/components/ui/SurfaceCard'
import { testimonialsContent } from '@/lib/content'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative border-t border-border/50 bg-background px-6 py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      
      <div className="mx-auto max-w-7xl">
        <SectionHeader title={testimonialsContent.title} subtitle={testimonialsContent.subtitle} />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonialsContent.testimonials.map((testimonial, index) => (
            <RevealOnScroll key={testimonial.id} direction="up" delay={index * 0.1}>
              <SurfaceCard className="flex h-full flex-col justify-between border-border/50 bg-card/50 p-8 transition-colors hover:border-border hover:bg-card/80">
                <div>
                  <Quote className="h-8 w-8 text-primary/50 rotate-180 mb-4" />
                  <p className="text-base leading-relaxed text-muted-foreground italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
                
                <footer className="mt-8 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent opacity-80" />
                  <div>
                    <p className="font-bold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </footer>
              </SurfaceCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}


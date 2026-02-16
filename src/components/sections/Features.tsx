'use client'

import { features } from '@/lib/content'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

export function Features() {
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-7xl font-bold mb-24 tracking-tighter">Features</h2>
        </RevealOnScroll>

        <div className="grid gap-20 lg:grid-cols-2">
          {features.map((feature, index) => (
            <RevealOnScroll key={feature.id} direction="up" delay={index * 0.1}>
              <FeatureCard feature={feature} index={index + 1} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  return (
    <div className="flex gap-8 items-start group">
      <div className="text-5xl font-bold text-foreground-subtle group-hover:text-primary transition-colors">
        {String(index).padStart(2, '0')}
      </div>
      <div className="flex-1">
        <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
        <p className="text-xl text-foreground-muted leading-relaxed">{feature.description}</p>
      </div>
    </div>
  )
}

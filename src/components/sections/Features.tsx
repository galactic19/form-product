'use client'

import { features } from '@/lib/content'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

export function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-5xl font-bold text-center mb-16">Features</h2>
        </RevealOnScroll>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <RevealOnScroll key={feature.id} direction="up" delay={index * 0.1}>
              <FeatureCard feature={feature} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8 shadow-lg transition-transform hover:scale-105">
      <div
        className="mb-4 text-6xl"
        style={{ filter: `drop-shadow(0 0 20px ${feature.color})` }}
      >
        {feature.icon}
      </div>
      <h3 className="mb-3 text-2xl font-bold">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  )
}

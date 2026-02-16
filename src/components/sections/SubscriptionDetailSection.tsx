'use client'

import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SurfaceCard } from '@/components/ui/SurfaceCard'
import { subscriptionDetailContent } from '@/lib/content'

export function SubscriptionDetailSection() {
  return (
    <section id="subscription-detail" className="border-t border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="구독 상품 핵심 기능"
          title={subscriptionDetailContent.title}
          subtitle={subscriptionDetailContent.subtitle}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {subscriptionDetailContent.features.map((feature, index) => (
            <RevealOnScroll key={feature.id} direction="up" delay={index * 0.1}>
              <SurfaceCard className="h-full p-7 hover:border-primary/40">
                <div className="flex items-start justify-between gap-3">
                  <div className="text-3xl" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <span className="inline-flex items-center gap-1 border border-primary/50 bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                    <span aria-hidden="true">🔒</span>
                    구독 전용
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-snug">{feature.title}</h3>
                <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-foreground-muted sm:text-base">
                  {feature.description}
                </p>
                <p className="mt-6 border-l-2 border-primary pl-3 text-sm font-semibold text-primary">
                  {feature.benefit}
                </p>
              </SurfaceCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

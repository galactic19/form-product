'use client'

import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { subscriptionDetailContent } from '@/lib/content'

export function SubscriptionDetailSection() {
  return (
    <section id="subscription-detail" className="border-t border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {subscriptionDetailContent.title}
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <p className="mt-4 text-lg text-foreground-muted sm:text-xl">
            {subscriptionDetailContent.subtitle}
          </p>
        </RevealOnScroll>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {subscriptionDetailContent.features.map((feature, index) => (
            <RevealOnScroll key={feature.id} direction="up" delay={index * 0.1}>
              <article className="h-full border border-border bg-surface p-7">
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
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

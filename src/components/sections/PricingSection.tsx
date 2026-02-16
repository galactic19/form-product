'use client'

import { Check, X } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SurfaceCard } from '@/components/ui/SurfaceCard'
import { pricingContent } from '@/lib/content'

function booleanToMark(value: boolean) {
  return value ? <Check className="h-4 w-4 text-primary" /> : <X className="h-4 w-4 text-foreground/20" />
}

export function PricingSection() {
  return (
    <section id="pricing" className="relative border-t border-border/50 bg-background px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title={pricingContent.title} subtitle={pricingContent.subtitle} />

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Template Pricing (Basic) */}
          <RevealOnScroll direction="up">
            <SurfaceCard className="h-full border-border/50 bg-card/50 p-8" interactive={false}>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground">{pricingContent.templatePricing.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{pricingContent.templatePricing.description}</p>
              </div>

              <div className="overflow-hidden rounded-xl border border-border/50 bg-background/40">
                {pricingContent.templatePricing.items.map((item) => (
                  <div
                    key={item.item}
                    className="flex items-center justify-between border-b border-border/50 px-6 py-4 text-sm last:border-b-0 hover:bg-foreground/5 transition-colors"
                  >
                    <span className="text-muted-foreground">{item.item}</span>
                    <span className="font-mono font-semibold text-foreground">{item.price}</span>
                  </div>
                ))}
              </div>
            </SurfaceCard>
          </RevealOnScroll>

          {/* Subscription Pricing (Highlighted) */}
          <RevealOnScroll direction="up" delay={0.1}>
            <SurfaceCard className="relative h-full overflow-hidden border-primary/30 bg-card/50 p-8 shadow-[0_0_50px_-20px_rgba(0,153,255,0.3)]" interactive={false}>
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-50" />
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-foreground">{pricingContent.subscriptionPricing.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {pricingContent.subscriptionPricing.description}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {pricingContent.subscriptionPricing.plans.map((plan) => (
                    <article
                      key={plan.id}
                      className={`relative flex flex-col rounded-xl border p-6 transition-all duration-300 ${
                        plan.isRecommended
                          ? 'border-primary bg-primary/10 shadow-[0_0_30px_rgba(0,153,255,0.2)]'
                          : 'border-border/50 bg-background/40 hover:border-primary/50'
                      }`}
                    >
                      {plan.isRecommended && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-primary bg-background px-3 py-1 text-[10px] font-bold text-primary shadow-lg shadow-primary/20">
                          RECOMMENDED
                        </span>
                      )}
                      <div className="mb-4">
                        <p className={`text-sm font-semibold ${plan.isRecommended ? 'text-primary' : 'text-muted-foreground'}`}>
                          {plan.name}
                        </p>
                        <p className="mt-2 text-3xl font-bold text-foreground tracking-tight">{plan.price}</p>
                      </div>

                      <ul className="mt-auto space-y-3 text-xs text-muted-foreground">
                        <li className="flex items-center justify-between border-b border-border/50 pb-2">
                          <span>폼 개수</span>
                          <span className="font-mono text-foreground">{plan.features.forms}</span>
                        </li>
                        <li className="flex items-center justify-between border-b border-border/50 pb-2">
                          <span>월 응답 수</span>
                          <span className="font-mono text-foreground">{plan.features.responses}</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span>카톡 알림</span>
                            {booleanToMark(plan.features.kakaoNotification)}
                        </li>
                         <li className="flex items-center justify-between">
                            <span>고객 메시지</span>
                            {booleanToMark(plan.features.kakaoCustomerMessage)}
                        </li>
                         <li className="flex items-center justify-between">
                            <span>엑셀 다운</span>
                            {booleanToMark(plan.features.excelDownload)}
                        </li>
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </SurfaceCard>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.2}>
          <div className="mt-12 rounded-lg border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="font-semibold text-primary">{pricingContent.conversionOffer}</p>
            <p className="mt-2 text-sm text-muted-foreground">{pricingContent.bottomNote}</p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}


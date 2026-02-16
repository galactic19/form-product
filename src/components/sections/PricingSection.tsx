'use client'

import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SurfaceCard } from '@/components/ui/SurfaceCard'
import { pricingContent } from '@/lib/content'

function booleanToMark(value: boolean) {
  return value ? '✓' : '✕'
}

export function PricingSection() {
  return (
    <section id="pricing" className="border-t border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title={pricingContent.title} subtitle={pricingContent.subtitle} />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <RevealOnScroll direction="up">
            <SurfaceCard className="h-full p-6" interactive={false}>
              <h3 className="text-2xl font-semibold">{pricingContent.templatePricing.title}</h3>
              <p className="mt-2 text-sm text-foreground-muted">{pricingContent.templatePricing.description}</p>

              <div className="mt-6 overflow-hidden border border-border bg-background">
                {pricingContent.templatePricing.items.map((item) => (
                  <div
                    key={item.item}
                    className="flex items-center justify-between border-b border-border px-4 py-3 text-sm last:border-b-0"
                  >
                    <span>{item.item}</span>
                    <span className="font-semibold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </SurfaceCard>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <SurfaceCard className="h-full p-6" interactive={false}>
              <h3 className="text-2xl font-semibold">{pricingContent.subscriptionPricing.title}</h3>
              <p className="mt-2 text-sm text-foreground-muted">
                {pricingContent.subscriptionPricing.description}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {pricingContent.subscriptionPricing.plans.map((plan) => (
                  <article
                    key={plan.id}
                    className={`flex flex-col border p-4 transition-all duration-300 hover:-translate-y-1 ${
                      plan.isRecommended
                        ? 'relative border-primary bg-primary/10 shadow-[0_16px_40px_rgba(0,153,255,0.18)]'
                        : 'border-border bg-background hover:border-primary/35 hover:shadow-[var(--glow-soft)]'
                    }`}
                  >
                    {plan.isRecommended && (
                      <span className="absolute right-3 top-3 border border-primary bg-primary px-2 py-1 text-[10px] font-bold text-primary-foreground">
                        BEST
                      </span>
                    )}
                    <p className="text-sm font-semibold text-foreground-muted">
                      {plan.name}
                      {plan.isRecommended ? ' (추천)' : ''}
                    </p>
                    <p className="mt-1 text-2xl font-bold text-primary">{plan.price}</p>

                    <ul className="mt-4 flex-grow space-y-1 text-xs text-foreground-muted">
                      <li>폼: {plan.features.forms}</li>
                      <li>월 응답: {plan.features.responses}</li>
                      <li>카톡 알림: {booleanToMark(plan.features.kakaoNotification)}</li>
                      <li>고객 메시지: {booleanToMark(plan.features.kakaoCustomerMessage)}</li>
                      <li>엑셀 다운: {booleanToMark(plan.features.excelDownload)}</li>
                      <li>구글시트: {booleanToMark(plan.features.googleSheetSync)}</li>
                      <li>브랜딩: {booleanToMark(plan.features.branding)}</li>
                      <li>대시보드: {plan.features.adminDashboard}</li>
                      <li>팀원: {plan.features.teamMembers}</li>
                    </ul>
                  </article>
                ))}
              </div>
            </SurfaceCard>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.2}>
          <div className="mt-8 space-y-2 text-sm sm:text-base">
            <p className="font-semibold text-primary">{pricingContent.conversionOffer}</p>
            <p className="text-foreground-muted">{pricingContent.bottomNote}</p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

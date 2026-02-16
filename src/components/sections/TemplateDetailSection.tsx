'use client'

import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SurfaceCard } from '@/components/ui/SurfaceCard'
import { templateDetailContent } from '@/lib/content'

export function TemplateDetailSection() {
  return (
    <section id="template-detail" className="border-t border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title={templateDetailContent.title} subtitle={templateDetailContent.subtitle} />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {templateDetailContent.templates.map((template, index) => (
            <RevealOnScroll key={template.id} direction="up" delay={index * 0.1}>
              <SurfaceCard className="p-5">
                <div className="mb-5 aspect-[4/3] border border-border bg-[linear-gradient(130deg,rgba(0,153,255,0.2),rgba(0,0,0,0))] p-4">
                  <p className="text-sm font-semibold text-primary">모바일 목업 플레이스홀더</p>
                  <div className="mt-3 space-y-2">
                    <div className="h-5 w-3/4 border border-border bg-background/70" />
                    <div className="h-5 w-full border border-border bg-background/70" />
                    <div className="h-5 w-5/6 border border-border bg-background/70" />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden="true">
                    {template.icon}
                  </span>
                  <h3 className="text-xl font-semibold">{template.name}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted sm:text-base">
                  {template.description}
                </p>
              </SurfaceCard>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.2}>
          <div className="mt-12 overflow-hidden border border-border bg-[color:var(--surface-elevated)]">
            {templateDetailContent.pricing.map((item, index) => (
              <div
                key={item.item}
                className={`grid gap-2 border-b border-border px-5 py-4 last:border-b-0 md:grid-cols-[1fr_auto_1.3fr] ${
                  index === 0 ? 'bg-primary/10' : 'bg-background'
                }`}
              >
                <p className="font-semibold">{item.item}</p>
                <p className="font-semibold text-primary">{item.price}</p>
                <p className="text-sm text-foreground-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <p className="mt-6 text-base font-medium text-foreground-muted">
            {templateDetailContent.deliveryInfo}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}

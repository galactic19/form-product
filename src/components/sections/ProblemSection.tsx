'use client'

import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SurfaceCard } from '@/components/ui/SurfaceCard'
import { problemContent } from '@/lib/content'

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="border-t border-border bg-[linear-gradient(180deg,transparent,rgba(0,153,255,0.04))] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="고객 이탈이 가장 많은 구간"
          title={problemContent.title}
          subtitle={problemContent.subtitle}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {problemContent.scenarios.map((scenario, index) => (
            <RevealOnScroll key={scenario.id} direction="up" delay={index * 0.1}>
              <SurfaceCard className="h-full">
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center border border-border bg-background text-2xl" aria-hidden="true">
                    {scenario.icon}
                  </span>
                  <span className="text-xs font-mono text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold">{scenario.title}</h3>
                <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-foreground-muted">
                  {scenario.description}
                </p>
              </SurfaceCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

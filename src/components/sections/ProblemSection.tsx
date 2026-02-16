'use client'

import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { problemContent } from '@/lib/content'

export function ProblemSection() {
  return (
    <section id="problem" className="border-t border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">{problemContent.title}</h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <p className="mt-4 text-lg text-foreground-muted sm:text-xl">{problemContent.subtitle}</p>
        </RevealOnScroll>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {problemContent.scenarios.map((scenario, index) => (
            <RevealOnScroll key={scenario.id} direction="up" delay={index * 0.1}>
              <article className="h-full border border-border bg-surface p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-3xl" aria-hidden="true">
                    {scenario.icon}
                  </span>
                  <span className="text-xs font-mono text-foreground-subtle">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold">{scenario.title}</h3>
                <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-foreground-muted">
                  {scenario.description}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { howItWorksContent } from '@/lib/content'

function FlowCard({
  title,
  steps,
}: {
  title: string
  steps: { step: number; title: string; description: string }[]
}) {
  return (
    <article className="border border-border bg-[color:var(--surface-elevated)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[var(--glow-soft)]">
      <h3 className="text-2xl font-semibold">{title}</h3>

      <ol className="mt-6 space-y-4">
        {steps.map((item) => (
          <li key={item.step} className="flex gap-4 border-l-2 border-primary pl-4">
            <span className="mt-1 inline-flex h-6 min-w-6 items-center justify-center border border-primary/35 bg-primary/10 px-2 text-[11px] font-mono text-primary">
              {item.step}
            </span>
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-foreground-muted">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </article>
  )
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-t border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {howItWorksContent.title}
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <p className="mt-4 text-lg text-foreground-muted sm:text-xl">{howItWorksContent.subtitle}</p>
        </RevealOnScroll>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <RevealOnScroll direction="up">
            <FlowCard
              title={howItWorksContent.templateFlow.title}
              steps={howItWorksContent.templateFlow.steps}
            />
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.1}>
            <FlowCard
              title={howItWorksContent.subscriptionFlow.title}
              steps={howItWorksContent.subscriptionFlow.steps}
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

'use client'

import { MagneticButton } from '@/components/animations/MagneticButton'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { solutionChoiceContent } from '@/lib/content'

export function SolutionChoiceSection() {
  return (
    <section id="solution-choice" className="border-t border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {solutionChoiceContent.title}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="mt-4 text-lg text-foreground-muted sm:text-xl">
            {solutionChoiceContent.subtitle}
          </p>
        </RevealOnScroll>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {solutionChoiceContent.options.map((option, index) => (
            <RevealOnScroll key={option.id} direction="up" delay={index * 0.1}>
              <article
                className={`relative flex h-full flex-col border bg-[color:var(--surface-elevated)] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--glow-soft)] ${
                  option.type === 'subscription'
                    ? 'border-primary/50 shadow-[var(--glow-soft)]'
                    : 'border-border hover:border-primary/40'
                }`}
              >
                <span className="absolute right-4 top-4 border border-primary/40 bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                  {option.type === 'template' ? '빠른 시작' : '관리 강화'}
                </span>
                <p className="text-3xl" aria-hidden="true">
                  {option.icon}
                </p>
                <h3 className="mt-4 text-3xl font-bold">{option.title}</h3>
                <p className="mt-2 text-base text-foreground-muted">{option.subtitle}</p>

                <ul className="mt-6 space-y-3 text-sm sm:text-base">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-[2px] text-primary">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-8 text-2xl font-bold text-primary">{option.priceText}</p>

                <div className="mt-6">
                  <MagneticButton
                    href={option.cta.href}
                    className="inline-flex w-full justify-center border-2 border-foreground px-6 py-3 text-sm font-semibold transition-all hover:bg-foreground hover:text-background"
                  >
                    {option.cta.text}
                  </MagneticButton>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.2}>
          <p className="mt-8 border-l-4 border-primary pl-4 text-sm leading-relaxed text-foreground-muted sm:text-base">
            {solutionChoiceContent.helpText}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}

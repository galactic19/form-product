'use client'

import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { faqContent } from '@/lib/content'

export function FAQSection() {
  return (
    <section id="faq" className="border-t border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">{faqContent.title}</h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <p className="mt-4 text-lg text-foreground-muted sm:text-xl">{faqContent.subtitle}</p>
        </RevealOnScroll>

        <div className="mt-10 space-y-4">
          {faqContent.faqs.map((faq, index) => (
            <RevealOnScroll key={faq.id} direction="up" delay={index * 0.05}>
              <details className="group border border-border bg-[color:var(--surface-elevated)] px-5 py-4 transition-all duration-300 open:border-primary/35 open:shadow-[var(--glow-soft)]">
                <summary className="cursor-pointer list-none pr-8 text-base font-semibold sm:text-lg">
                  {faq.question}
                  <span className="float-right inline-flex h-6 w-6 items-center justify-center border border-primary/35 bg-primary/10 text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-foreground-muted sm:text-base">
                  {faq.answer}
                </p>
              </details>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

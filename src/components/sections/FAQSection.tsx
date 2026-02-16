'use client'

import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { faqContent } from '@/lib/content'

export function FAQSection() {
  return (
    <section id="faq" className="border-t border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeader title={faqContent.title} subtitle={faqContent.subtitle} />

        <div className="mt-10 space-y-4">
          {faqContent.faqs.map((faq, index) => (
            <RevealOnScroll key={faq.id} direction="up" delay={index * 0.05}>
              <details className="group border border-border bg-[color:var(--surface-elevated)] px-5 py-4 transition-all duration-300 open:border-primary/35 open:shadow-[var(--glow-soft)]">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold sm:text-lg">
                  <span>{faq.question}</span>
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center border border-primary/35 bg-primary/10 transition-transform group-open:rotate-45">
                    <svg 
                      className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-primary" 
                      viewBox="0 0 16 16" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M8 2V14M2 8H14" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                      />
                    </svg>
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

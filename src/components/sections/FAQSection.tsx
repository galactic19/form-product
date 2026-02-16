'use client'

import { useState } from 'react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { faqContent } from '@/lib/content'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="border-t border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeader title={faqContent.title} subtitle={faqContent.subtitle} />

        <div className="mt-10 space-y-4">
          {faqContent.faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <RevealOnScroll key={faq.id} direction="up" delay={index * 0.05}>
                <div
                  className={`group border bg-[color:var(--surface-elevated)] px-5 py-4 transition-all duration-300 ${
                    isOpen
                      ? 'border-primary/35 shadow-[var(--glow-soft)]'
                      : 'border-border'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full cursor-pointer items-center justify-between text-left"
                  >
                    <span
                      className={`text-base font-semibold transition-colors duration-300 sm:text-lg ${
                        isOpen ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`relative ml-4 flex h-8 w-8 shrink-0 items-center justify-center border border-primary/35 bg-primary/10 transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
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
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-foreground-muted sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}


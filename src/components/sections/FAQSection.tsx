'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { faqContent } from '@/lib/content'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="border-t border-border/50 bg-background px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeader title={faqContent.title} subtitle={faqContent.subtitle} />

        <div className="mt-16 space-y-4">
          {faqContent.faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <RevealOnScroll key={faq.id} direction="up" delay={index * 0.05}>
                <div
                  className={`group overflow-hidden border transition-all duration-300 ${
                    isOpen
                      ? 'border-primary/50 bg-card/50 shadow-[0_0_20px_-10px_rgba(0,153,255,0.2)] rounded-2xl'
                      : 'border-border/50 bg-transparent hover:border-border rounded-xl'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left outline-none"
                  >
                    <span
                      className={`text-lg font-medium transition-colors duration-300 ${
                        isOpen ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`relative ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/50 bg-card/50 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-primary/20 text-primary border-primary/20' : 'text-muted-foreground'
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 pt-0 text-base leading-relaxed text-muted-foreground">
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



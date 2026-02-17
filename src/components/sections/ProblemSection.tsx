'use client'

import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SurfaceCard } from '@/components/ui/SurfaceCard'
import { problemContent } from '@/lib/content'
import { Banknote, FileQuestion, MessageSquareWarning } from 'lucide-react'

const iconMap = {
  1: MessageSquareWarning,
  2: FileQuestion,
  3: Banknote,
}

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative border-t border-border/50 bg-background/40 px-6 py-24 sm:py-32 backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          badge="고객 이탈이 가장 많은 구간"
          title={problemContent.title}
          subtitle={problemContent.subtitle}
          align="center"
          className="mb-16"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {problemContent.scenarios.map((scenario, index) => {
            const Icon = iconMap[scenario.id as keyof typeof iconMap] || MessageSquareWarning
            
            return (
              <RevealOnScroll key={scenario.id} direction="up" delay={index * 0.1}>
                <SurfaceCard className="group h-full border-border/50 bg-card/40 transition-all duration-300 hover:border-primary/20 hover:bg-card/60 hover:shadow-[0_0_30px_-10px_rgba(0,229,255,0.1)]">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-foreground/10 to-transparent border border-border/50 text-primary shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:text-primary-light" aria-hidden="true">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-xs font-mono text-foreground/30 bg-foreground/5 px-2 py-1 rounded">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary-light transition-colors">{scenario.title}</h3>
                  <p className="whitespace-pre-line text-base leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    {scenario.description}
                  </p>
                </SurfaceCard>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}

'use client'

import { ArrowRight } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SurfaceCard } from '@/components/ui/SurfaceCard'
import { howItWorksContent } from '@/lib/content'

function FlowCard({
  title,
  steps,
  variant = 'primary',
}: {
  title: string
  steps: { step: number; title: string; description: string }[]
  variant?: 'primary' | 'accent'
}) {
  const colorClass = variant === 'primary' ? 'text-primary' : 'text-accent'
  const borderClass = variant === 'primary' ? 'border-primary/20' : 'border-accent/20'
  const bgClass = variant === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
  const glowClass = variant === 'primary' ? 'group-hover:shadow-[0_0_30px_-5px_rgba(0,153,255,0.3)]' : 'group-hover:shadow-[0_0_30px_-5px_rgba(147,51,234,0.3)]'

  return (
    <SurfaceCard className={`group relative h-full overflow-hidden border-border/50 bg-card/50 p-10 sm:p-12 transition-all duration-500 ${glowClass}`}>
      <div className={`absolute top-0 left-0 h-1 w-full my-10 ${variant === 'primary' ? 'bg-primary' : 'bg-accent'}`} />
      
      <h3 className="text-2xl font-bold text-foreground mb-10">{title}</h3>

      <div className="relative">
        <div className="absolute left-[11px] top-2 h-full w-px bg-foreground/10" />
        <ol className="space-y-10">
          {steps.map((item) => (
            <li key={item.step} className="relative flex items-start gap-8">
              <span className={`relative z-10 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${borderClass} ${bgClass} text-[11px] font-bold ${colorClass} ring-4 ring-card shadow-sm`}>
                {item.step}
              </span>
              <div className="flex-1">
                <p className={`font-semibold text-lg text-foreground group-hover:${colorClass} transition-colors`}>{item.title}</p>
                <p className="mt-2 text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SurfaceCard>
  )
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-t border-border/50 bg-background px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title={howItWorksContent.title} subtitle={howItWorksContent.subtitle} />

        <div className="mt-20 flex flex-col items-center gap-12 lg:flex-row lg:items-stretch lg:gap-16">
          <RevealOnScroll direction="right" className="w-full lg:flex-1">
            <FlowCard
              title={howItWorksContent.templateFlow.title}
              steps={howItWorksContent.templateFlow.steps}
              variant="primary"
            />
          </RevealOnScroll>

          <div className="flex shrink-0 items-center justify-center opacity-30">
            <ArrowRight className="h-8 w-8 text-foreground rotate-90 lg:rotate-0" />
          </div>

          <RevealOnScroll direction="left" delay={0.1} className="w-full lg:flex-1">
            <FlowCard
              title={howItWorksContent.subscriptionFlow.title}
              steps={howItWorksContent.subscriptionFlow.steps}
              variant="accent"
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}


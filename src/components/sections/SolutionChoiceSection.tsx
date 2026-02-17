'use client'

import { MagneticButton } from '@/components/animations/MagneticButton'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SurfaceCard } from '@/components/ui/SurfaceCard'
import { solutionChoiceContent } from '@/lib/content'
import { Check, Rocket, Zap } from 'lucide-react'

const iconMap = {
  1: Zap,
  2: Rocket,
}

export function SolutionChoiceSection() {
  return (
    <section id="solution" className="relative px-6 py-24 sm:py-32 overflow-hidden">
      {/* Background glow for this section */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader 
          title={solutionChoiceContent.title} 
          subtitle={solutionChoiceContent.subtitle}
          align="center"
          className="mb-16" 
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {solutionChoiceContent.options.map((option, index) => {
            const Icon = iconMap[option.id as keyof typeof iconMap] || Zap

            return (
              <RevealOnScroll key={option.id} direction="up" delay={index * 0.1}>
                <SurfaceCard
                  className={`relative h-full p-8 transition-all duration-500 group ${
                    option.type === 'subscription'
                      ? 'border-primary/50 shadow-[0_0_50px_-20px_rgba(0,229,255,0.3)] bg-gradient-to-b from-primary/10 to-transparent hover:shadow-[0_0_70px_-20px_rgba(0,229,255,0.5)]'
                      : 'border-border/50 hover:border-border/80 hover:bg-card/50'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-3 rounded-2xl border backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 ${
                        option.type === 'subscription' 
                          ? 'bg-primary/20 border-primary/30 text-primary' 
                          : 'bg-card/50 border-border/50 text-foreground'
                      }`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        option.type === 'subscription' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-foreground border border-border'
                      }`}>
                        {option.type === 'template' ? '빠른 시작' : '관리 강화'}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-foreground mb-2">{option.title}</h3>
                    <p className="text-muted-foreground mb-8">{option.subtitle}</p>

                    <ul className="flex-grow space-y-4 mb-8">
                      {option.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-foreground/80">
                          <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-xs text-primary font-bold">
                            <Check className="h-3 w-3" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-8 border-t border-border/50">
                      <p className="text-3xl font-bold text-foreground mb-6">
                        {option.priceText}
                        <span className="text-sm font-normal text-muted-foreground ml-2">/ start</span>
                      </p>
                      <MagneticButton
                        href={option.cta.href}
                        className={`flex items-center justify-center w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                          option.type === 'subscription'
                            ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(255,36,119,0.3)]'
                            : 'bg-muted text-foreground border border-border/50 hover:bg-foreground hover:text-background hover:border-transparent'
                        }`}
                      >
                        {option.cta.text}
                      </MagneticButton>
                    </div>
                  </div>
                </SurfaceCard>
              </RevealOnScroll>
            )
          })}
        </div>

        <RevealOnScroll delay={0.2}>
          <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 backdrop-blur-sm text-center">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              <span className="text-primary font-bold mr-2">💡 Note:</span>
              {solutionChoiceContent.helpText}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

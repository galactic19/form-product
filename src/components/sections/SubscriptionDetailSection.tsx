'use client'

import { BarChart3, Lock, RefreshCw, Zap } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SurfaceCard } from '@/components/ui/SurfaceCard'
import { subscriptionDetailContent } from '@/lib/content'

const icons = [Zap, BarChart3, RefreshCw]

export function SubscriptionDetailSection() {
  return (
    <section id="subscription-detail" className="relative overflow-hidden border-t border-border/50 bg-background px-4 py-24 sm:px-6 sm:py-32">
       {/* Background Elements */}
       <div className="absolute right-0 top-0 -z-10 h-[600px] w-[600px] bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.03),transparent)]" />
       
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge="구독 상품 핵심 기능"
          title={subscriptionDetailContent.title}
          subtitle={subscriptionDetailContent.subtitle}
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {subscriptionDetailContent.features.map((feature, index) => {
             const Icon = icons[index % icons.length]
             return (
              <RevealOnScroll key={feature.id} direction="up" delay={index * 0.1}>
                <SurfaceCard className="group relative h-full overflow-hidden border-border/50 bg-card/50 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-foreground/20 hover:shadow-2xl">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-foreground/5 blur-3xl transition-all group-hover:bg-foreground/10" />
                  
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-foreground ring-1 ring-border transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1 text-[11px] font-bold tracking-wide text-muted-foreground backdrop-blur-sm">
                      <Lock className="h-3 w-3" />
                      SUBSCRIPTION
                    </span>
                  </div>
                  
                  <h3 className="mt-6 text-2xl font-bold leading-tight text-foreground">{feature.title}</h3>
                  <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                  
                  <div className="mt-8 flex items-center gap-3 border-t border-border/50 pt-6">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" />
                    <p className="text-sm font-medium text-foreground/80">
                      {feature.benefit}
                    </p>
                  </div>
                </SurfaceCard>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}

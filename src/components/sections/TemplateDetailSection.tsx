'use client'

import { Wifi, Droplets, Shield, Package, MousePointer2 } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SurfaceCard } from '@/components/ui/SurfaceCard'
import { templateDetailContent } from '@/lib/content'

const iconMap = [Wifi, Droplets, Shield, Package]

// 고품질 CSS 목업 - 실제 폼 화면처럼
function TemplateMockup({ type }: { type: number }) {
  const configs = [
    { gradient: 'from-blue-500/30 via-blue-600/20 to-blue-900/30', accent: 'bg-blue-500' },
    { gradient: 'from-cyan-500/30 via-cyan-600/20 to-cyan-900/30', accent: 'bg-cyan-500' },
    { gradient: 'from-emerald-500/30 via-emerald-600/20 to-emerald-900/30', accent: 'bg-emerald-500' },
    { gradient: 'from-violet-500/30 via-violet-600/20 to-violet-900/30', accent: 'bg-violet-500' },
  ]
  
  const config = configs[type % configs.length]

  return (
    <div className="relative mx-auto h-full w-[85%] max-w-[220px] overflow-hidden rounded-[1.5rem] border-[6px] border-gray-800 bg-gray-900 shadow-2xl">
      <div className="absolute left-1/2 top-0 z-20 h-5 w-20 -translate-x-1/2 rounded-b-xl bg-gray-800" />
      <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-black pt-6">
        <div className={`h-28 w-full bg-gradient-to-br ${config.gradient} p-3`}>
          <div className="mt-2 h-3 w-16 rounded bg-white/20" />
          <div className="mt-2 h-2 w-24 rounded bg-white/10" />
          <div className="mt-4 h-8 w-full rounded-lg bg-white/10 backdrop-blur-sm" />
        </div>
        <div className="space-y-2 p-3">
          <div className="space-y-1.5">
            <div className="h-1.5 w-8 rounded bg-gray-700" />
            <div className="h-8 w-full rounded-lg border border-gray-700 bg-gray-800/50" />
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-10 rounded bg-gray-700" />
            <div className="h-8 w-full rounded-lg border border-gray-700 bg-gray-800/50" />
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-12 rounded bg-gray-700" />
            <div className="h-16 w-full rounded-lg border border-gray-700 bg-gray-800/50" />
          </div>
          <div className="flex gap-2 pt-1">
            <div className="h-6 flex-1 rounded-md border border-gray-700 bg-gray-800/30" />
            <div className="h-6 flex-1 rounded-md border border-gray-700 bg-gray-800/30" />
          </div>
          <div className={`mt-3 h-9 w-full rounded-lg ${config.accent}`} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 border-t border-gray-800 bg-gray-900/80 backdrop-blur-sm p-2">
          <div className="flex items-center justify-center gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-gray-600" />
            <div className="h-1.5 w-20 rounded bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function TemplateDetailSection() {
  return (
    <section id="template-detail" className="relative overflow-hidden border-t border-border/50 bg-background px-6 py-24 sm:py-32">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeader title={templateDetailContent.title} subtitle={templateDetailContent.subtitle} />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {templateDetailContent.templates.map((template, index) => {
            const Icon = iconMap[index % iconMap.length]
            return (
              <RevealOnScroll key={template.id} direction="up" delay={index * 0.1}>
                <SurfaceCard className="group relative h-full overflow-hidden border-border/50 bg-card/50 p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(0,153,255,0.3)]">
                  <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 shadow-inner">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent)]" />
                    <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
                    <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
                    <div className="relative h-full w-full">
                      <TemplateMockup type={index} />
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20 transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{template.name}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {template.description}
                  </p>
                </SurfaceCard>
              </RevealOnScroll>
            )
          })}
        </div>

        <RevealOnScroll delay={0.2}>
          <div className="mt-16 overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-md">
            <div className="grid gap-px bg-border/50 sm:grid-cols-[1.5fr_1fr_2fr]">
              {templateDetailContent.pricing.map((item, index) => (
                <div key={item.item} className="contents group">
                  <div className={`p-6 bg-background/40 flex items-center ${index === 0 ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                    {item.item}
                  </div>
                  <div className="p-6 bg-background/40 flex items-center font-mono text-primary">
                    {item.price}
                  </div>
                  <div className="p-6 bg-background/40 flex items-center text-sm text-muted-foreground">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
             <MousePointer2 className="h-4 w-4" />
             <p>{templateDetailContent.deliveryInfo}</p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}


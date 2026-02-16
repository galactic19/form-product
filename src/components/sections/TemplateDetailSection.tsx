'use client'

import { Layout, MousePointer2, Smartphone } from 'lucide-react'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SurfaceCard } from '@/components/ui/SurfaceCard'
import { templateDetailContent } from '@/lib/content'

export function TemplateDetailSection() {
  return (
    <section id="template-detail" className="relative overflow-hidden border-t border-border/50 bg-background px-6 py-24 sm:py-32">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeader title={templateDetailContent.title} subtitle={templateDetailContent.subtitle} />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {templateDetailContent.templates.map((template, index) => (
            <RevealOnScroll key={template.id} direction="up" delay={index * 0.1}>
              <SurfaceCard className="group relative h-full overflow-hidden border-border/50 bg-card/50 p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(0,153,255,0.3)]">
                {/* Image Placeholder / Mockup */}
                <div className="relative mb-8 aspect-[4/3] overflow-hidden rounded-lg border border-border/50 bg-gradient-to-br from-foreground/5 to-transparent p-6 shadow-inner">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent)]" />
                  
                  {/* Mockup Frame */}
                  <div className="relative mx-auto h-full w-2/3 rounded-xl border border-border/50 bg-background/40 shadow-2xl backdrop-blur-sm">
                    <div className="absolute left-1/2 top-2 h-1 w-8 -translate-x-1/2 rounded-full bg-foreground/20" />
                    <div className="p-4 space-y-3 mt-4">
                      <div className="h-2 w-1/2 rounded bg-foreground/10" />
                      <div className="h-2 w-full rounded bg-foreground/5" />
                      <div className="h-2 w-3/4 rounded bg-foreground/5" />
                      <div className="mt-4 h-20 w-full rounded bg-foreground/5 border border-border/5 border-dashed" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20 transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    {index === 0 ? <Layout className="h-6 w-6" /> : <Smartphone className="h-6 w-6" />}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{template.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {template.description}
                </p>
              </SurfaceCard>
            </RevealOnScroll>
          ))}
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


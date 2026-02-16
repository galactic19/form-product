'use client'

import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SurfaceCard } from '@/components/ui/SurfaceCard'
import { screenPreviewContent } from '@/lib/content'

function PreviewCard({
  label,
  caption,
  type,
}: {
  label: string
  caption: string
  type: 'before' | 'after'
}) {
  const isAfter = type === 'after'
  
  return (
    <SurfaceCard className={`relative overflow-hidden p-6 transition-all duration-500 ${isAfter ? 'border-primary/50 bg-primary/5 shadow-[0_0_40px_-10px_rgba(0,153,255,0.2)]' : 'border-border/50 bg-card/50 opacity-80 hover:opacity-100'}`}>
      <span className={`inline-flex rounded-md border px-3 py-1 text-xs font-bold tracking-wider ${isAfter ? 'border-primary/30 bg-primary/10 text-primary' : 'border-border/50 bg-foreground/5 text-muted-foreground'}`}>
        {label}
      </span>
      
      <div className="mt-6 flex justify-center">
        {/* Device Frame */}
        <div className={`relative aspect-[9/18] w-full max-w-[280px] rounded-[2.5rem] border-[8px] bg-black shadow-2xl ${isAfter ? 'border-gray-800' : 'border-gray-800'}`}>
           {/* Screen Content */}
           <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-gray-900">
             {/* Notch */}
             <div className="absolute top-0 left-1/2 h-6 w-32 -translate-x-1/2 rounded-b-xl bg-black z-20" />
             
             <div className={`h-full w-full p-4 ${isAfter ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-white'}`}>
                {isAfter ? (
                  // After State (Dark Mode UI)
                  <div className="mt-8 space-y-4">
                     <div className="flex justify-between items-center">
                       <div className="h-8 w-8 rounded-full bg-primary/20" />
                       <div className="h-4 w-4 rounded bg-gray-800" />
                     </div>
                     <div className="h-32 w-full rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10" />
                     <div className="space-y-2">
                        <div className="h-3 w-1/2 rounded bg-gray-800" />
                        <div className="h-3 w-3/4 rounded bg-gray-800" />
                     </div>
                     <div className="mt-8 h-10 w-full rounded-lg bg-primary shadow-[0_0_15px_rgba(0,153,255,0.3)]" />
                  </div>
                ) : (
                  // Before State (Boring UI)
                   <div className="mt-8 space-y-3 opacity-50 grayscale">
                     <div className="h-6 w-full border border-gray-300 bg-gray-100" />
                     <div className="h-4 w-2/3 bg-gray-200" />
                     <div className="h-20 w-full border border-gray-300 bg-white" />
                     <div className="h-8 w-full border border-gray-300 bg-gray-200" />
                  </div>
                )}
             </div>
           </div>
        </div>
      </div>
      
      <p className={`mt-8 text-center text-sm font-medium ${isAfter ? 'text-primary' : 'text-muted-foreground'}`}>{caption}</p>
    </SurfaceCard>
  )
}

export function ScreenPreviewSection() {
  return (
    <section id="screen-preview" className="border-t border-border/50 bg-background px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title={screenPreviewContent.title} subtitle={screenPreviewContent.subtitle} />

        <div className="mt-16 grid gap-8 md:grid-cols-2 items-center">
          <RevealOnScroll direction="right">
            <PreviewCard
              label={screenPreviewContent.before.label}
              caption={screenPreviewContent.before.caption}
              type="before"
            />
          </RevealOnScroll>
          <RevealOnScroll direction="left" delay={0.2}>
            <PreviewCard
              label={screenPreviewContent.after.label}
              caption={screenPreviewContent.after.caption}
              type="after"
            />
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.3}>
          <div className="mt-12 text-center">
            <p className="mx-auto max-w-2xl whitespace-pre-line text-lg font-light leading-relaxed text-muted-foreground">
              {screenPreviewContent.bottomCopy}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}


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
  return (
    <SurfaceCard className="p-5">
      <p className="inline-flex border border-border bg-background px-2 py-1 text-sm font-semibold text-foreground-muted">
        {label}
      </p>
      <div
        className={`mt-4 aspect-[9/16] border p-4 ${
          type === 'before'
            ? 'border-border bg-background'
            : 'border-primary/40 bg-[linear-gradient(130deg,rgba(0,153,255,0.16),rgba(0,0,0,0))]'
        }`}
      >
        <p className="text-xs font-semibold text-foreground-muted">모바일 화면 플레이스홀더</p>
        <div className="mt-3 space-y-2">
          <div className="h-5 w-full border border-border bg-background/70" />
          <div className="h-5 w-4/5 border border-border bg-background/70" />
          <div className="h-20 border border-border bg-background/70" />
          <div className="h-8 w-full border border-border bg-background/70" />
          <div className="h-8 w-full border border-border bg-background/70" />
        </div>
      </div>
      <p className="mt-4 border-l-2 border-primary pl-3 text-sm font-semibold text-primary">{caption}</p>
    </SurfaceCard>
  )
}

export function ScreenPreviewSection() {
  return (
    <section id="screen-preview" className="border-t border-border px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title={screenPreviewContent.title} subtitle={screenPreviewContent.subtitle} />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <RevealOnScroll direction="up">
            <PreviewCard
              label={screenPreviewContent.before.label}
              caption={screenPreviewContent.before.caption}
              type="before"
            />
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.1}>
            <PreviewCard
              label={screenPreviewContent.after.label}
              caption={screenPreviewContent.after.caption}
              type="after"
            />
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.2}>
          <p className="mt-8 whitespace-pre-line text-base leading-relaxed text-foreground-muted sm:text-lg">
            {screenPreviewContent.bottomCopy}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}

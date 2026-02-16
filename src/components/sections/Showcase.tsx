'use client'

import { showcaseItems } from '@/lib/content'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

export function Showcase() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-5xl font-bold text-center mb-16">Showcase</h2>
        </RevealOnScroll>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {showcaseItems.map((item, index) => (
            <RevealOnScroll key={item.id} direction="up" delay={index * 0.1}>
              <ShowcaseCard item={item} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

function ShowcaseCard({ item }: { item: typeof showcaseItems[0] }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all hover:shadow-2xl">
      {/* 이미지 플레이스홀더 */}
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 transition-transform group-hover:scale-110">
        <div className="flex h-full items-center justify-center text-4xl font-bold text-muted-foreground/20">
          {item.title}
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-bold">{item.title}</h3>
        <p className="mb-4 text-muted-foreground">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

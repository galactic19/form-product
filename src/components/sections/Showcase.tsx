'use client'

import { showcaseItems } from '@/lib/content'
import { RevealOnScroll } from '@/components/animations/RevealOnScroll'

export function Showcase() {
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-7xl font-bold mb-24 tracking-tighter">Showcase</h2>
        </RevealOnScroll>

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {showcaseItems.map((item, index) => (
            <RevealOnScroll key={item.id} direction="up" delay={index * 0.1}>
              <ShowcaseCard item={item} index={index + 1} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

function ShowcaseCard({ item, index }: { item: typeof showcaseItems[0]; index: number }) {
  return (
    <div className="group">
      {/* 이미지 영역 */}
      <div className="aspect-[4/3] bg-surface border border-border mb-6 overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-8xl font-bold text-foreground-subtle/20">
            {String(index).padStart(2, '0')}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
          <h3 className="text-3xl font-bold">{item.title}</h3>
        </div>
      </div>

      {/* 설명 */}
      <p className="text-lg text-foreground-muted mb-4">{item.description}</p>

      {/* 태그 */}
      <div className="flex gap-3">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="text-sm font-mono text-foreground-subtle border-b border-foreground-subtle pb-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

'use client'

import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  badge?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  align = 'left',
  className,
}: SectionHeaderProps) {
  const centered = align === 'center'

  return (
    <div className={cn('max-w-4xl', centered && 'mx-auto text-center', className)}>
      {badge && (
        <RevealOnScroll>
          <p className="mb-4 inline-flex border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {badge}
          </p>
        </RevealOnScroll>
      )}

      <RevealOnScroll>
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">{title}</h2>
      </RevealOnScroll>

      {subtitle && (
        <RevealOnScroll delay={0.1}>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">{subtitle}</p>
        </RevealOnScroll>
      )}
    </div>
  )
}

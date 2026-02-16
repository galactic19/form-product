'use client'

import { useRef } from 'react'
import { useGSAP } from '@/hooks/useGSAP'
import gsap from 'gsap'
import { usePrefersReducedMotion } from '@/lib/gsap-config'

interface SplitTextProps {
  text: string
  className?: string
  staggerDelay?: number
  duration?: number
}

export function SplitText({
  text,
  className = '',
  staggerDelay = 0.05,
  duration = 0.8,
}: SplitTextProps) {
  const containerRef = useRef<HTMLHeadingElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(() => {
    if (!containerRef.current || prefersReducedMotion) return

    const chars = containerRef.current.querySelectorAll('.char')

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 50,
        rotateX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration,
        stagger: staggerDelay,
        ease: 'power3.out',
      }
    )
  }, [prefersReducedMotion, staggerDelay, duration])

  // 텍스트를 글자 단위로 분할
  const chars = text.split('').map((char, i) => (
    <span
      key={i}
      className="char inline-block"
      style={prefersReducedMotion ? {} : { opacity: 0 }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))

  return (
    <h1 ref={containerRef} className={className}>
      {chars}
    </h1>
  )
}

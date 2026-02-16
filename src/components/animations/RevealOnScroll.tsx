'use client'

import { useRef, ReactNode } from 'react'
import { useGSAP } from '@/hooks/useGSAP'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from '@/lib/gsap-config'

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
  delay?: number
}

export function RevealOnScroll({
  children,
  className = '',
  direction = 'up',
  distance = 100,
  delay = 0,
}: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(() => {
    if (!elementRef.current || prefersReducedMotion) {
      // Reduced motion: 즉시 표시
      if (elementRef.current) {
        gsap.set(elementRef.current, { opacity: 1, x: 0, y: 0 })
      }
      return
    }

    const directionMap = {
      up: { y: distance, x: 0 },
      down: { y: -distance, x: 0 },
      left: { x: distance, y: 0 },
      right: { x: -distance, y: 0 },
    }

    const startPosition = directionMap[direction]

    gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
        ...startPosition,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [direction, distance, delay, prefersReducedMotion])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

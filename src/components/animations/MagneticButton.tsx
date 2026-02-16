'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { usePrefersReducedMotion } from '@/lib/gsap-config'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
  href?: string
  onClick?: () => void
}

export function MagneticButton({
  children,
  className = '',
  strength = 0.5,
  href,
  onClick,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current || prefersReducedMotion) return

    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength

    gsap.to(buttonRef.current, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    if (!buttonRef.current || prefersReducedMotion) return

    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    })
    setIsHovering(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onClick?.()
    }
  }

  const commonProps = {
    ref: buttonRef as any,
    className,
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: handleMouseLeave,
    onKeyDown: handleKeyDown,
    tabIndex: 0,
    onClick,
  }

  if (href) {
    return (
      <a {...commonProps} href={href}>
        {children}
      </a>
    )
  }

  return <button {...commonProps}>{children}</button>
}

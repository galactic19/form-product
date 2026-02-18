'use client'

import { useEffect, useRef, useState } from 'react'
import rough from 'roughjs'

// Helper to animate SVG paths
const useRoughAnimation = (svgRef: React.RefObject<SVGSVGElement | null>, animate: boolean, duration: number = 1000, delay: number = 0) => {
  useEffect(() => {
    if (!animate || !svgRef.current) return

    const svg = svgRef.current
    const paths = svg.querySelectorAll('path')

    paths.forEach((path) => {
      const length = path.getTotalLength()
      path.style.strokeDasharray = `${length}`
      path.style.strokeDashoffset = `${length}`
      path.style.transition = `stroke-dashoffset ${duration}ms ease-out ${delay}ms`

      // Trigger reflow
      path.getBoundingClientRect()

      path.style.strokeDashoffset = '0'
    })
  }, [animate, svgRef, duration, delay])
}

interface RoughIconProps {
  type: 'circle' | 'rectangle' | 'line' | 'cross' | 'star' | 'check' | 'arrow' | 'highlight'
  size?: number
  width?: number
  height?: number
  color?: string
  fill?: string
  roughness?: number
  bowing?: number
  strokeWidth?: number
  className?: string
  animate?: boolean
  animationDuration?: number
  animationDelay?: number
  hachureGap?: number
  hachureAngle?: number
}

export function RoughIcon({
  type,
  size = 48,
  width: customWidth,
  height: customHeight,
  color = '#000',
  fill,
  roughness = 1.5,
  bowing = 1,
  strokeWidth = 2,
  className = '',
  animate = false,
  animationDuration = 800,
  animationDelay = 0,
  hachureGap = 4,
  hachureAngle = 60
}: RoughIconProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isVisible, setIsVisible] = useState(!animate)

  // Use Intersection Observer to trigger animation when in view
  useEffect(() => {
    if (!animate) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (svgRef.current) {
      observer.observe(svgRef.current)
    }

    return () => observer.disconnect()
  }, [animate])

  useRoughAnimation(svgRef, isVisible, animationDuration, animationDelay)

  useEffect(() => {
    if (!svgRef.current) return

    const svg = svgRef.current
    // Clear previous content but keep styles if needed
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild)
    }

    const rc = rough.svg(svg)

    const padding = 4
    const w = (customWidth || size) - padding * 2
    const h = (customHeight || size) - padding * 2
    const cx = (customWidth || size) / 2
    const cy = (customHeight || size) / 2

    let node: SVGElement | SVGElement[] | null = null

    const options = {
      stroke: color,
      strokeWidth,
      roughness,
      bowing,
      fill: fill || 'none',
      fillStyle: 'hachure' as const,
      hachureAngle,
      hachureGap,
    }

    switch (type) {
      case 'circle':
        node = rc.circle(cx, cy, w * 0.8, options)
        break
      case 'rectangle':
        node = rc.rectangle(padding, padding, w, h, options)
        break
      case 'line':
        node = rc.line(padding, cy, (customWidth || size) - padding, cy, options)
        break
      case 'cross':
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
        const line1 = rc.line(padding, padding, w + padding, h + padding, options)
        const line2 = rc.line(w + padding, padding, padding, h + padding, options)
        g.appendChild(line1)
        g.appendChild(line2)
        node = g
        break
      case 'star':
        const starPath = createStarPath(cx, cy, w * 0.4, w * 0.2, 5)
        node = rc.path(starPath, options)
        break
      case 'check':
        // Custom check path
        const checkPath = `M ${padding + w * 0.1} ${cy} L ${cx - w * 0.1} ${h + padding - h * 0.2} L ${w + padding - w * 0.1} ${padding + h * 0.2}`
        node = rc.path(checkPath, { ...options, strokeWidth: strokeWidth + 1 })
        break
      case 'arrow':
        const arrowG = document.createElementNS('http://www.w3.org/2000/svg', 'g')
        const arrowLine = rc.line(padding, cy, w + padding - 8, cy, options)
        const arrowHead = rc.path(
          `M ${w + padding - 16} ${cy - 8} L ${w + padding} ${cy} L ${w + padding - 16} ${cy + 8}`,
          { ...options, fill: color, fillStyle: 'solid' }
        )
        arrowG.appendChild(arrowLine)
        arrowG.appendChild(arrowHead)
        node = arrowG
        break
      case 'highlight':
        // Marker highlight effect behind text
        node = rc.path(
          `M ${padding} ${h} Q ${w / 2} ${h + 5} ${w} ${h - 2} Q ${w / 2} ${h - 8} ${padding} ${h}`,
          { ...options, strokeWidth: 0, fill: color, fillStyle: 'solid', roughness: 2.5 }
        )
        break
    }

    if (node) {
      if (Array.isArray(node)) {
        node.forEach(n => svg.appendChild(n))
      } else {
        svg.appendChild(node)
      }
    }
  }, [type, size, customWidth, customHeight, color, fill, roughness, bowing, strokeWidth, isVisible]) // Re-render when visibility changes to ensure fresh paths for animation

  return (
    <svg
      ref={svgRef}
      width={customWidth || size}
      height={customHeight || size}
      viewBox={`0 0 ${customWidth || size} ${customHeight || size}`}
      className={className}
      style={{ display: 'block', overflow: 'visible', maxWidth: '100%', height: 'auto' }}
    />
  )
}

function createStarPath(cx: number, cy: number, outerRadius: number, innerRadius: number, points: number): string {
  let path = ''
  for (let i = 0; i < points * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius
    const angle = (Math.PI * i) / points - Math.PI / 2
    const x = cx + radius * Math.cos(angle)
    const y = cy + radius * Math.sin(angle)
    path += (i === 0 ? 'M' : 'L') + ` ${x} ${y}`
  }
  path += ' Z'
  return path
}

// Decorative rough elements
export function RoughUnderline({
  width = 100,
  color = '#ff4d4d',
  className = '',
  animate = false,
  animationDuration,
  animationDelay
}: {
  width?: number,
  color?: string,
  className?: string,
  animate?: boolean,
  animationDuration?: number,
  animationDelay?: number
}) {
  return (
    <RoughIcon
      type="line"
      width={width}
      height={16}
      color={color}
      className={className}
      roughness={2.5}
      bowing={2}
      strokeWidth={3}
      animate={animate}
      animationDuration={animationDuration}
      animationDelay={animationDelay}
    />
  )
}

export function RoughBox({
  width = 200,
  height = 100,
  color = '#000',
  fill,
  className = '',
  animate = false,
  animationDuration,
  animationDelay
}: {
  width?: number,
  height?: number,
  color?: string,
  fill?: string,
  className?: string,
  animate?: boolean,
  animationDuration?: number,
  animationDelay?: number
}) {
  return (
    <RoughIcon
      type="rectangle"
      width={width}
      height={height}
      color={color}
      fill={fill}
      className={className}
      animate={animate}
      animationDuration={animationDuration}
      animationDelay={animationDelay}
    />
  )
}

export function RoughCircleBadge({
  children,
  size = 80,
  color = '#ff4d4d',
  fill = '#ff4d4d',
  animate = false,
  animationDuration = 1500,
  animationDelay
}: {
  children: React.ReactNode
  size?: number
  color?: string
  fill?: string
  animate?: boolean
  animationDuration?: number
  animationDelay?: number
}) {
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <RoughIcon
        type="circle"
        size={size}
        color={color}
        fill={fill}
        className="absolute inset-0"
        animate={animate}
        animationDuration={animationDuration}
        animationDelay={animationDelay}
      />
      <div className="relative z-10 text-white font-bold">
        {children}
      </div>
    </div>
  )
}


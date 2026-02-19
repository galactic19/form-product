'use client'

import { useEffect, useRef } from 'react'

// ─── 파티클 구조 ──────────────────────────────────────────────────────────────

interface Particle {
  x: number
  y: number
  baseVx: number   // 기본 흐름 속도 (아래로 천천히)
  baseVy: number
  vx: number
  vy: number
  r: number        // 반지름
  alpha: number
  baseAlpha: number
  bright: boolean  // 주요 노드 여부 (더 크고 밝음)
}

// ─── 컴포넌트 ─────────────────────────────────────────────────────────────────

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rafId: number
    let mx = -9999
    let my = -9999

    const isMobile = window.innerWidth < 768
    const N         = isMobile ? 55 : 115  // 파티클 수
    const CONNECT_D = 135                   // 연결선 최대 거리
    const MOUSE_R   = 145                   // 마우스 영향 반경
    const particles: Particle[] = []

    // ── 캔버스 크기 동기화 ──────────────────────────────────────────────
    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      canvas.width  = parent.offsetWidth
      canvas.height = parent.offsetHeight
      spawn()
    }

    // ── 파티클 초기 생성 ───────────────────────────────────────────────
    const spawn = () => {
      particles.length = 0
      for (let i = 0; i < N; i++) {
        const isBright = Math.random() < 0.13       // 13% 는 밝은 주요 노드
        const bvy = Math.random() * 0.32 + 0.06      // 아래로 천천히 흐름
        const bvx = (Math.random() - 0.5) * 0.22     // 좌우 미세 흔들림
        const a   = isBright
          ? Math.random() * 0.3 + 0.55
          : Math.random() * 0.35 + 0.15

        particles.push({
          x:         Math.random() * canvas.width,
          y:         Math.random() * canvas.height,
          baseVx:    bvx,
          baseVy:    bvy,
          vx:        bvx,
          vy:        bvy,
          r:         isBright
                       ? Math.random() * 2.2 + 1.6
                       : Math.random() * 1.3 + 0.5,
          alpha:      a,
          baseAlpha:  a,
          bright:     isBright,
        })
      }
    }

    // ── 점 → 선분 최단거리 ────────────────────────────────────────────
    const ptSegDist = (
      px: number, py: number,
      ax: number, ay: number,
      bx: number, by: number,
    ): number => {
      const dx = bx - ax, dy = by - ay
      const lenSq = dx * dx + dy * dy
      if (lenSq === 0) return Math.hypot(px - ax, py - ay)
      const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lenSq))
      return Math.hypot(px - ax - t * dx, py - ay - t * dy)
    }

    // ── 매 프레임 ─────────────────────────────────────────────────────
    const frame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 물리 업데이트
      for (const p of particles) {
        const dx = p.x - mx
        const dy = p.y - my
        const d2 = dx * dx + dy * dy

        // 마우스 반발 (예산이 흩어지는 시각적 은유)
        if (d2 < MOUSE_R * MOUSE_R && d2 > 0) {
          const d   = Math.sqrt(d2)
          const str = ((MOUSE_R - d) / MOUSE_R) ** 2 * 5.5
          p.vx += (dx / d) * str * 0.055
          p.vy += (dy / d) * str * 0.055
        }

        // 기본 속도로 스프링 복귀
        p.vx += (p.baseVx - p.vx) * 0.022
        p.vy += (p.baseVy - p.vy) * 0.022

        // 속도 감쇠
        p.vx *= 0.98
        p.vy *= 0.98

        p.x += p.vx
        p.y += p.vy

        // 경계 처리: 아래로 사라지면 위에서 재진입
        if (p.y > canvas.height + 6) {
          p.y = -6
          p.x = Math.random() * canvas.width
        }
        if (p.y < -6)              p.y = canvas.height + 6
        if (p.x > canvas.width + 6) p.x = -6
        if (p.x < -6)              p.x = canvas.width + 6
      }

      // 연결선 드로잉 — 마우스 근접 시 글로우
      const LINE_MOUSE_R  = 95   // 선 글로우 발동 반경
      const CONNECT_D_SQ  = CONNECT_D * CONNECT_D

      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const pi = particles[i], pj = particles[j]
          const dx = pi.x - pj.x, dy = pi.y - pj.y
          const d2 = dx * dx + dy * dy
          if (d2 >= CONNECT_D_SQ) continue

          const dist      = Math.sqrt(d2)
          const baseAlpha = (1 - dist / CONNECT_D) * 0.28

          // 마우스 → 이 선분의 최단거리
          const segDist = ptSegDist(mx, my, pi.x, pi.y, pj.x, pj.y)
          const prox    = segDist < LINE_MOUSE_R
            ? (1 - segDist / LINE_MOUSE_R) ** 1.3
            : 0

          ctx.beginPath()
          ctx.moveTo(pi.x, pi.y)
          ctx.lineTo(pj.x, pj.y)
          ctx.lineWidth    = 0.5 + prox * 1.8
          ctx.strokeStyle  = `rgba(232,82,42,${Math.min(0.92, baseAlpha + prox * 0.7)})`
          ctx.shadowColor  = 'rgba(232,82,42,0.9)'
          ctx.shadowBlur   = prox * 14
          ctx.stroke()
        }
      }
      // 이후 파티클 드로잉에 shadow 번지지 않도록 리셋
      ctx.shadowBlur = 0

      // 파티클 드로잉
      for (const p of particles) {
        const dx       = p.x - mx
        const dy       = p.y - my
        const d        = Math.sqrt(dx * dx + dy * dy)
        const nearness = d < MOUSE_R ? (1 - d / MOUSE_R) : 0

        // 마우스 근접 시 글로우 헤일로
        if (nearness > 0.25) {
          const haloR = p.r * (p.bright ? 7 : 5.5)
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, haloR)
          g.addColorStop(0, `rgba(232,82,42,${nearness * (p.bright ? 0.55 : 0.38)})`)
          g.addColorStop(1, 'rgba(232,82,42,0)')
          ctx.beginPath()
          ctx.arc(p.x, p.y, haloR, 0, Math.PI * 2)
          ctx.fillStyle = g
          ctx.fill()
        }

        // 코어 도트
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232,82,42,${Math.min(1, p.alpha + nearness * 0.45)})`
        ctx.fill()

        // 밝은 노드: 내부 흰 점 추가 (더 생동감 있게)
        if (p.bright) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r * 0.45, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255,200,170,${p.alpha * 0.7 + nearness * 0.3})`
          ctx.fill()
        }
      }

      rafId = requestAnimationFrame(frame)
    }

    // 마우스 위치 추적 (윈도우 레벨 — canvas pointer-events-none 우회)
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mx = e.clientX - rect.left
      my = e.clientY - rect.top
    }
    const onMouseLeave = () => {
      mx = -9999
      my = -9999
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement ?? canvas)

    resize()
    frame()
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}

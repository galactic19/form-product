'use client'

import { useState } from 'react'

// ─── 테마 레이블 ──────────────────────────────────────────────────────────────

const LABELS = ['미니멀', '네온', '플로팅', '스플릿', '라이트'] as const

// ─── 공용 아이콘 ──────────────────────────────────────────────────────────────

function PhoneIcon({ stroke = 'currentColor' }: { stroke?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M2.5 3A1.5 1.5 0 014 1.5h.6a1.5 1.5 0 011.4.963l.67 1.674a1.5 1.5 0 01-.34 1.658L5.28 6.84a8.12 8.12 0 004.88 4.88l1.045-1.05a1.5 1.5 0 011.658-.34l1.674.67A1.5 1.5 0 0116.5 12.4V13a1.5 1.5 0 01-1.5 1.5C8.044 14.5 1.5 7.956 1.5 1.5"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function KakaoFace({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M11 2C5.925 2 2 5.477 2 9.75c0 2.637 1.538 4.962 3.9 6.35L4.75 19.5l4.065-2.36A11.2 11.2 0 0011 17.5c5.075 0 9-3.477 9-7.75S16.075 2 11 2z"
        fill="#3C1E1E"
      />
      <circle cx="7.8" cy="9.5" r="1.2" fill="#FEE500" />
      <circle cx="14.2" cy="9.5" r="1.2" fill="#FEE500" />
      <path
        d="M7.5 12c.9 1.2 2.1 1.8 3.5 1.8s2.6-.6 3.5-1.8"
        stroke="#FEE500"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  )
}

// ─── 테마 0: 다크 미니멀 ─────────────────────────────────────────────────────

function DarkMinimal() {
  return (
    <div
      className="border-t border-white/[0.06] bg-[#0A0A0A]/95 px-4 pt-3 backdrop-blur-2xl"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="grid grid-cols-[1fr_2fr] gap-2">
        <a
          href="tel:0000000000"
          className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-white/10 py-3 text-white transition-all active:scale-[0.96] active:bg-white/5"
          aria-label="전화 상담"
        >
          <PhoneIcon />
          <span className="text-[10px] font-bold tracking-wide text-white/70">전화상담</span>
        </a>
        <a
          href="https://open.kakao.com"
          className="flex items-center justify-center gap-2.5 rounded-2xl bg-[#FEE500] py-3 shadow-[0_4px_22px_rgba(254,229,0,0.28)] transition-all active:scale-[0.97] active:bg-[#FAD900]"
          aria-label="카카오톡 상담"
        >
          <KakaoFace />
          <span className="text-[14px] font-black tracking-[-0.01em] text-[#3C1E1E]">카카오톡 상담</span>
        </a>
      </div>
    </div>
  )
}

// ─── 테마 1: 네온 글로우 ─────────────────────────────────────────────────────
// 다크 베이스에 오렌지 틴팅된 전화 버튼 + 황금 그라디언트 & 네온 글로우 카카오

function NeonGlow() {
  return (
    <div
      className="border-t border-white/[0.04] bg-[#050508]/98 px-4 pt-3 backdrop-blur-3xl"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="grid grid-cols-[1fr_2fr] gap-2.5">
        <a
          href="tel:0000000000"
          className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-[#E8522A]/30 bg-[#E8522A]/[0.07] py-3 transition-all active:scale-[0.96]"
          aria-label="전화 상담"
        >
          <PhoneIcon stroke="#E8522A" />
          <span className="text-[10px] font-bold tracking-wide text-[#E8522A]/70">전화상담</span>
        </a>
        <a
          href="https://open.kakao.com"
          className="flex items-center justify-center gap-2.5 rounded-2xl py-3 transition-all active:scale-[0.97]"
          style={{
            background: 'linear-gradient(135deg, #FFE600 0%, #FFC200 100%)',
            boxShadow:
              '0 0 32px rgba(255,208,0,0.5), 0 4px 16px rgba(255,208,0,0.25), inset 0 1px 0 rgba(255,255,255,0.25)',
          }}
          aria-label="카카오톡 상담"
        >
          <KakaoFace />
          <span className="text-[14px] font-black text-[#3C1E1E]">카카오톡 상담</span>
        </a>
      </div>
    </div>
  )
}

// ─── 테마 2: 플로팅 필 ───────────────────────────────────────────────────────
// 배경 없이 알약 버튼이 그라디언트 페이드 위에 부유하는 느낌

function FloatingPill() {
  return (
    <div
      className="px-4 pt-2"
      style={{
        paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))',
        background: 'linear-gradient(to top, rgba(6,6,8,0.88) 0%, transparent 100%)',
      }}
    >
      <div className="flex gap-2.5">
        <a
          href="tel:0000000000"
          className="flex shrink-0 flex-col items-center justify-center gap-1 rounded-full border border-white/20 bg-[#111]/70 px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.65)] backdrop-blur-2xl transition-all active:scale-[0.96]"
          aria-label="전화 상담"
        >
          <PhoneIcon />
          <span className="text-[9.5px] font-bold text-white/60">전화</span>
        </a>
        <a
          href="https://open.kakao.com"
          className="flex flex-1 items-center justify-center gap-2.5 rounded-full bg-[#FEE500] py-3.5 transition-all active:scale-[0.97]"
          style={{ boxShadow: '0 8px 40px rgba(254,229,0,0.65), 0 2px 10px rgba(0,0,0,0.15)' }}
          aria-label="카카오톡 상담"
        >
          <KakaoFace />
          <span className="text-[14px] font-black text-[#3C1E1E]">카카오톡 상담</span>
        </a>
      </div>
    </div>
  )
}

// ─── 테마 3: 스플릿 ──────────────────────────────────────────────────────────
// 좌우 두 색상 블록이 화면을 꽉 채우는 대담한 그래픽 레이아웃

function Split() {
  const pb = { paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }
  return (
    <div className="flex border-t border-white/[0.06]">
      <a
        href="tel:0000000000"
        className="flex flex-col items-center justify-center gap-1.5 bg-[#0F0F0F] px-8 pt-4 text-white transition-all active:bg-[#1C1C1C]"
        style={pb}
        aria-label="전화 상담"
      >
        <PhoneIcon />
        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">Call</span>
      </a>
      {/* 세로 구분선 */}
      <div className="w-px bg-white/[0.07]" />
      <a
        href="https://open.kakao.com"
        className="flex flex-1 items-center justify-center gap-3 bg-[#FEE500] pt-4 transition-all active:bg-[#FAD900]"
        style={pb}
        aria-label="카카오톡 상담"
      >
        <KakaoFace size={24} />
        <div>
          <p className="text-[13px] font-black leading-tight text-[#3C1E1E]">카카오톡 상담</p>
          <p className="mt-0.5 text-[10px] font-semibold text-[#3C1E1E]/50">바로 연결됩니다</p>
        </div>
      </a>
    </div>
  )
}

// ─── 테마 4: 라이트 글래스 ───────────────────────────────────────────────────
// 흰 프로스티드 글래스, 프리미엄하고 깔끔한 라이트 무드

function LightGlass() {
  return (
    <div
      className="border-t border-black/[0.06] bg-white/85 px-4 pt-3 backdrop-blur-2xl"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="grid grid-cols-[1fr_2fr] gap-2">
        <a
          href="tel:0000000000"
          className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-black/[0.08] bg-black/[0.04] py-3 transition-all active:scale-[0.96] active:bg-black/[0.09]"
          aria-label="전화 상담"
        >
          <PhoneIcon stroke="#444" />
          <span className="text-[10px] font-bold tracking-wide text-[#666]">전화상담</span>
        </a>
        <a
          href="https://open.kakao.com"
          className="flex items-center justify-center gap-2.5 rounded-2xl bg-[#FEE500] py-3 transition-all active:scale-[0.97] active:bg-[#FAD900]"
          style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.07), 0 2px 8px rgba(254,229,0,0.5)' }}
          aria-label="카카오톡 상담"
        >
          <KakaoFace />
          <span className="text-[14px] font-black text-[#3C1E1E]">카카오톡 상담</span>
        </a>
      </div>
    </div>
  )
}

// ─── 메인 컴포넌트 ────────────────────────────────────────────────────────────

export function MobileActionBar() {
  const [theme, setTheme] = useState(0)
  const [vis, setVis] = useState(true)

  const go = (t: number) => {
    if (t === theme) return
    setVis(false)
    setTimeout(() => {
      setTheme(t)
      setVis(true)
    }, 130)
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      {/* 테마 선택 스트립 */}
      <div className="flex items-center justify-center gap-1 bg-[#0A0A0A]/92 py-[7px] backdrop-blur-xl">
        {LABELS.map((label, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`rounded-full px-3 py-[3px] text-[9.5px] font-bold tracking-wide transition-all duration-200 ${
              theme === i
                ? 'bg-[#E8522A] text-white shadow-[0_2px_8px_rgba(232,82,42,0.4)]'
                : 'text-white/30 active:text-white/60'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 테마 콘텐츠 */}
      <div style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.13s ease' }}>
        {theme === 0 && <DarkMinimal />}
        {theme === 1 && <NeonGlow />}
        {theme === 2 && <FloatingPill />}
        {theme === 3 && <Split />}
        {theme === 4 && <LightGlass />}
      </div>
    </div>
  )
}

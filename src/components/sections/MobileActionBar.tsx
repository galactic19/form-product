'use client'

// ─── 네비게이션 아이템 ────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: '업종', href: '#industries' },
  { label: '템플릿', href: '#템플릿' },
  { label: '제작과정', href: '#제작과정' },
  { label: '상담', href: '#contact' },
] as const

// ─── 아이콘 ──────────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M2.5 3A1.5 1.5 0 014 1.5h.6a1.5 1.5 0 011.4.963l.67 1.674a1.5 1.5 0 01-.34 1.658L5.28 6.84a8.12 8.12 0 004.88 4.88l1.045-1.05a1.5 1.5 0 011.658-.34l1.674.67A1.5 1.5 0 0116.5 12.4V13a1.5 1.5 0 01-1.5 1.5C8.044 14.5 1.5 7.956 1.5 1.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function KakaoFace() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
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

// ─── 메인 컴포넌트 ────────────────────────────────────────────────────────────

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      {/* 네비게이션 스트립 */}
      <div className="flex items-center justify-around border-t border-white/[0.05] bg-[#0A0A0A]/92 py-2 backdrop-blur-xl">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex-1 py-1 text-center text-[10.5px] font-bold tracking-wide text-white/35 transition-colors active:text-white/70"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* 액션 버튼 */}
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
    </div>
  )
}

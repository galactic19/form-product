'use client'

import { useState } from 'react'

// ─── 데이터 ────────────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    name: '김○○ 대표',
    business: '서울 인터넷 대리점',
    rating: 5,
    text: '카카오 폼 쓸 때보다 문의율이 확실히 올랐어요. 업종에 딱 맞는 구조로 제작해 주셔서 고객들이 신뢰감을 갖는 것 같습니다.',
  },
  {
    name: '박○○ 사장님',
    business: '경기도 렌탈 대리점',
    rating: 5,
    text: '당일 납품해주셔서 바로 광고 집행했는데 첫날부터 문의가 왔어요. 이 업종 전문으로 하는 곳이라 구조가 확실히 달라요.',
  },
  {
    name: '이○○ 설계사',
    business: '인천 보험 대리점',
    rating: 5,
    text: '전문 업체에 맡기는 것보다 훨씬 저렴한데 완성도는 오히려 더 좋았어요. 업종을 정확히 아시더라고요. 다음에도 또 맡길 겁니다.',
  },
]

// ─── 공용 별점 ─────────────────────────────────────────────────────────────────

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-1" aria-label={`${n}점`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="h-5.5 w-5.5 fill-[#E8522A]" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

// ─── 테마 0: 다크 그리드 ──────────────────────────────────────────────────────

function DarkCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {TESTIMONIALS.map((t) => (
        <article
          key={t.name}
          className="flex flex-col gap-5 rounded-2xl border border-white/8 bg-white/[0.04] p-8 transition-all duration-300 hover:border-[#E8522A]/30 hover:bg-white/[0.07]"
        >
          <div className="select-none text-[5rem] font-black leading-none text-[#E8522A]/20" aria-hidden="true">
            &ldquo;
          </div>
          <Stars n={t.rating} />
          <p className="flex-1 text-[15px] leading-[1.9] text-white/70">{t.text}</p>
          <div className="border-t border-white/8 pt-5">
            <p className="font-black text-white">{t.name}</p>
            <p className="mt-0.5 text-[12px] text-white/35">{t.business}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

// ─── 테마 1: 라이트 그리드 ────────────────────────────────────────────────────

function LightCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {TESTIMONIALS.map((t) => (
        <article
          key={t.name}
          className="flex flex-col gap-5 rounded-3xl bg-white p-8 shadow-[0_2px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.11)]"
        >
          <div className="select-none text-[5rem] font-black leading-none text-[#E8522A]/15" aria-hidden="true">
            &ldquo;
          </div>
          <Stars n={t.rating} />
          <p className="flex-1 text-[15px] leading-[1.9] text-[#555]">{t.text}</p>
          <div className="border-t border-[#F0F0F0] pt-5">
            <p className="font-black text-[#111]">{t.name}</p>
            <p className="mt-0.5 text-[12px] text-[#999]">{t.business}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

// ─── 테마 2: 볼드 에디토리얼 ──────────────────────────────────────────────────

function BoldCards() {
  return (
    <div className="flex flex-col divide-y divide-white/8">
      {TESTIMONIALS.map((t, i) => (
        <article
          key={t.name}
          className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:gap-16 md:py-14"
        >
          <div className="flex shrink-0 flex-row items-center gap-5 md:w-[130px] md:flex-col md:items-start">
            <span className="select-none text-[clamp(3rem,6vw,5rem)] font-black leading-none text-[#E8522A] tabular-nums">
              {String(i + 1).padStart(2, '0')}
            </span>
            <Stars n={t.rating} />
          </div>
          <p className="flex-1 text-[clamp(1.05rem,2.2vw,1.3rem)] font-medium leading-[1.85] text-white/80">
            &ldquo;{t.text}&rdquo;
          </p>
          <div className="shrink-0 md:w-[180px] md:text-right">
            <p className="text-[1rem] font-black text-white">{t.name}</p>
            <p className="mt-0.5 text-[12px] text-white/35">{t.business}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

// ─── 테마 3: 글래스모피즘 ─────────────────────────────────────────────────────
// 배경 그라디언트 오브는 섹션 레벨에서 렌더링하고, 카드에 backdrop-blur 적용

function GlassCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {TESTIMONIALS.map((t) => (
        <article
          key={t.name}
          className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl transition-all duration-300 hover:border-white/18 hover:bg-white/[0.11]"
        >
          {/* 상단 오렌지 그라디언트 액센트 선 */}
          <div className="h-[2px] w-10 rounded-full bg-gradient-to-r from-[#E8522A] to-[#FF9A5C]" />
          <Stars n={t.rating} />
          <p className="flex-1 text-[15px] leading-[1.9] text-white/78">{t.text}</p>
          <div className="border-t border-white/[0.07] pt-5">
            <p className="font-black text-white">{t.name}</p>
            <p className="mt-0.5 text-[12px] text-white/40">{t.business}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

// ─── 테마 4: 벤토 (비대칭 그리드) ────────────────────────────────────────────
// Featured 카드(2/3) + 사이드 컴팩트 카드 2장(1/3)

function BentoCards() {
  const [main, ...rest] = TESTIMONIALS
  return (
    <div className="grid gap-5 md:grid-cols-3 md:items-stretch">
      {/* 피처드 카드 — 2열 차지 */}
      <article className="flex flex-col justify-between rounded-3xl bg-white p-10 shadow-[0_4px_40px_rgba(0,0,0,0.09)] md:col-span-2">
        <div>
          <div
            className="select-none text-[8rem] font-black leading-[0.8] text-[#E8522A]/10"
            aria-hidden="true"
          >
            &ldquo;
          </div>
          <Stars n={main.rating} />
          <p className="mt-5 text-[clamp(1rem,2vw,1.22rem)] leading-[1.9] text-[#3A3A3A]">
            {main.text}
          </p>
        </div>
        <div className="mt-8 flex items-center gap-4 border-t-2 border-[#E8522A]/12 pt-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF1ED] text-[13px] font-black text-[#E8522A]">
            {main.name[0]}
          </div>
          <div>
            <p className="text-[1.05rem] font-black text-[#111]">{main.name}</p>
            <p className="mt-0.5 text-[12px] text-[#999]">{main.business}</p>
          </div>
        </div>
      </article>

      {/* 사이드 컴팩트 카드 컬럼 */}
      <div className="flex flex-col gap-5">
        {rest.map((t) => (
          <article
            key={t.name}
            className="flex flex-1 flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_2px_20px_rgba(0,0,0,0.07)]"
          >
            <div>
              <Stars n={t.rating} />
              <p className="mt-3 text-[14px] leading-[1.8] text-[#555]">
                &ldquo;{t.text}&rdquo;
              </p>
            </div>
            <div className="mt-4 flex items-center gap-3 border-t border-[#F4F4F4] pt-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF1ED] text-[12px] font-black text-[#E8522A]">
                {t.name[0]}
              </div>
              <div>
                <p className="text-[13px] font-black text-[#111]">{t.name}</p>
                <p className="text-[11px] text-[#999]">{t.business}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

// ─── 메인 섹션 ─────────────────────────────────────────────────────────────────

const THEME_LABELS = ['다크', '라이트', '볼드', '유리', '벤토'] as const

export function TestimonialsSection() {
  const [theme, setTheme] = useState(3)
  const [vis, setVis] = useState(true)

  const go = (t: number) => {
    if (t === theme) return
    setVis(false)
    setTimeout(() => {
      setTheme(t)
      setVis(true)
    }, 160)
  }

  const isDark = theme !== 1 && theme !== 4

  const sectionBg =
    theme === 0 ? 'bg-[#0A0A0A]'
    : theme === 1 ? 'bg-[#F6F5F1]'
    : theme === 2 ? 'bg-[#0D0D10]'
    : theme === 3 ? 'bg-[#08080E]'
    : 'bg-[#F7F5F2]'

  const labelColor = isDark ? 'text-white/30' : 'text-[#BBB]'
  const headingColor = isDark ? 'text-white' : 'text-[#111]'

  return (
    <section
      className={`relative flex min-h-screen flex-col transition-colors duration-500 ${sectionBg}`}
    >
      {/* ── 글래스 테마 배경 오브 (section-level, backdrop-blur 소스) ── */}
      {theme === 3 && (
        <>
          <div
            className="pointer-events-none absolute right-0 top-0 h-[65vh] w-[55vw] opacity-40"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(ellipse at 80% 15%, rgba(232,82,42,0.6) 0%, transparent 58%)',
            }}
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 h-[55vh] w-[48vw] opacity-25"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(ellipse at 20% 85%, rgba(255,160,55,0.65) 0%, transparent 58%)',
            }}
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[45vh] w-[45vw] -translate-x-1/2 -translate-y-1/2 opacity-10"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(ellipse, rgba(110,55,210,0.7) 0%, transparent 62%)',
            }}
          />
        </>
      )}

      {/* ── 헤더: 제목 + 토글 ── */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pt-20 md:px-10 md:pt-28">
        <div className="mb-12 flex flex-col gap-5 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={`mb-3 text-[11px] font-bold uppercase tracking-[0.22em] ${labelColor}`}>
              REVIEWS
            </p>
            <h2
              className={`text-[clamp(2rem,5vw,3.6rem)] font-black leading-[1.1] tracking-[-0.04em] ${headingColor}`}
            >
              실제 사용 후기
            </h2>
          </div>

          {/* 테마 토글 — 5개로 모바일에서 줄바꿈 허용 */}
          <div className="flex flex-wrap gap-2">
            {THEME_LABELS.map((label, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`h-[36px] rounded-full px-4 text-[12px] font-bold tracking-[0.04em] transition-all duration-200 ${
                  theme === i
                    ? 'bg-[#E8522A] text-white shadow-[0_4px_16px_rgba(232,82,42,0.35)]'
                    : isDark
                      ? 'border border-white/15 text-white/40 hover:border-white/30 hover:text-white/70'
                      : 'border border-[#DDD] text-[#999] hover:border-[#E8522A] hover:text-[#E8522A]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── 카드: 남은 공간 채우고 수직 중앙 정렬 ── */}
      <div
        className="relative z-10 flex flex-1 items-center"
        style={{ opacity: vis ? 1 : 0, transition: 'opacity 0.16s ease' }}
      >
        <div className="mx-auto w-full max-w-[1400px] px-5 pb-20 md:px-10 md:pb-28">
          {theme === 0 && <DarkCards />}
          {theme === 1 && <LightCards />}
          {theme === 2 && <BoldCards />}
          {theme === 3 && <GlassCards />}
          {theme === 4 && <BentoCards />}
        </div>
      </div>
    </section>
  )
}

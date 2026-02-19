'use client'

import { motion } from 'framer-motion'

// 실제 템플릿 스크린샷으로 교체 예정
const TEMPLATES = [
  { src: '/screenshots/상세페이지1.png', label: '인터넷', color: '#1E40AF' },
  { src: '/screenshots/상세페이지7.png', label: '휴대폰', color: '#0369A1' },
  { src: '/screenshots/상세페이지6.png', label: '법무법인', color: '#047857' },
  { src: '/screenshots/상세페이지5.png', label: '중고차', color: '#92400E' },
  { src: '/screenshots/상세페이지3.png', label: '휴대폰', color: '#0369A1' },
  { src: '/screenshots/상세페이지8.png', label: '렌탈', color: '#0369A1' },
  { src: '/screenshots/상세페이지2.png', label: 'TV', color: '#7C3AED' },
  { src: '/screenshots/상세페이지4.png', label: '렌탈', color: '#047857' },
  { src: '/screenshots/상세페이지9.png', label: '렌탈', color: '#7C3AED' },
]

// 카드별 기울기 — 자연스럽게 흩어진 느낌
const ROTATIONS = [-3, 1.5, -1, 2.5, -2, 1, -3.5, 2, -1.5, 3, -2.5, 1]

// 마키 루프를 위해 3배 복제
const MARQUEE_ITEMS = [...TEMPLATES, ...TEMPLATES, ...TEMPLATES]

// 카드 너비 + gap
const CARD_W = 160
const CARD_GAP = 28

export function TemplateMarqueeDemo() {
  return (
    <div className="js-reveal mb-16 overflow-hidden rounded-3xl bg-[#111]">

      {/* 텍스트 영역 */}
      <div className="px-8 pb-8 pt-12 md:px-14 md:pt-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white/25">
              GROW
            </p>
            <h3 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black leading-[1.1] tracking-[-0.04em] text-white">
              자는 동안에도
              <br />
              문의가 들어옵니다
            </h3>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <p className="max-w-75 text-[13px] leading-[1.85] text-white/40">
              광고 링크에 이 화면을 달면 24시간 영업이 됩니다.
              업종 고르고 이름 넣는 것만으로 3일 안에 준비됩니다.
            </p>
            <div className="flex flex-wrap gap-2">
              {['24시간 온라인 영업', '3일이면 준비 완료', '광고 바로 집행'].map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold text-white/40"
                >
                  <span className="h-1 w-1 rounded-full bg-[#E8522A]" aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 마키 스트립 */}
      <div
        className="relative overflow-hidden py-10"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
        }}
      >
        {/* 좌우 페이드 마스크 */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-36"
          style={{ background: 'linear-gradient(to right, #111 30%, transparent)' }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-36"
          style={{ background: 'linear-gradient(to left, #111 30%, transparent)' }}
          aria-hidden="true"
        />

        <motion.div
          className="flex items-center"
          style={{ gap: CARD_GAP }}
          animate={{ x: [0, -(CARD_W + CARD_GAP) * TEMPLATES.length] }}
          transition={{ ease: 'linear', duration: 28, repeat: Infinity }}
        >
          {MARQUEE_ITEMS.map((item, i) => {
            const rotate = ROTATIONS[i % ROTATIONS.length]
            return (
              <div
                key={i}
                className="relative shrink-0 overflow-hidden rounded-2xl"
                style={{
                  width: CARD_W,
                  height: CARD_W * (1024 / 825),
                  rotate: `${rotate}deg`,
                  boxShadow: '0 20px 50px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.07)',
                }}
              >
                <img
                  src={item.src}
                  alt={`${item.label} 템플릿`}
                  className="h-full w-full object-cover"
                  style={{ filter: 'brightness(0.72) saturate(0.85)' }}
                  loading="lazy"
                />
                {/* 상단·하단 비네트 오버레이 */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.28) 100%)',
                  }}
                />
              </div>
            )
          })}
        </motion.div>
      </div>

    </div>
  )
}

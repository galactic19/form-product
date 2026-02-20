'use client'

import { useState } from 'react'
import Link from 'next/link'
import { TEMPLATES } from '@/components/templates/TemplateGallery'

// ─── 탭 정의 ──────────────────────────────────────────────────────────────────

const TABS = [
  { id: 'preview', label: '업종별 미리보기' },
  { id: 'stats', label: '실적·신뢰도' },
  { id: 'process', label: '진행 과정' },
  { id: 'cta', label: '심플 CTA' },
] as const

type TabId = (typeof TABS)[number]['id']

// ─── 탭 1: 업종별 미리보기 ───────────────────────────────────────────────────

function PreviewTab() {
  const [selected, setSelected] = useState<(typeof TEMPLATES)[number] | null>(null)

  const featured = TEMPLATES.slice(0, 3)

  return (
    <>
      <div className="grid gap-5 md:grid-cols-3">
        {featured.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelected(t)}
            className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)]"
          >
            {/* iframe 미리보기 */}
            <div className="relative h-[300px] overflow-hidden bg-[#F4F4F4]">
              <iframe
                src={t.href}
                title={`${t.label} 템플릿`}
                loading="lazy"
                style={{
                  width: '200%',
                  height: '200%',
                  transform: 'scale(0.5)',
                  transformOrigin: 'top left',
                  pointerEvents: 'none',
                  border: 'none',
                }}
              />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <span className="rounded-full bg-white px-5 py-2.5 text-[13px] font-black text-[#111] shadow-lg">
                  자세히 보기 →
                </span>
              </div>
            </div>
            {/* 카드 텍스트 */}
            <div className="p-5">
              <p className="font-black tracking-[-0.02em] text-[#111]">{t.label}</p>
              <p className="mt-0.5 text-[12px] leading-[1.6] text-[#888]">{t.desc}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/templates"
          className="inline-flex h-[40px] items-center rounded-full border border-[#111]/20 px-5 text-[12px] font-bold text-[#555] transition-all hover:bg-[#111] hover:text-white"
        >
          6개 업종 전체 보기 →
        </Link>
      </div>

      {/* 미니 모달 */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          style={{ backgroundColor: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(4px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setSelected(null) }}
        >
          <div
            className="relative flex h-full max-h-[720px] w-full max-w-[900px] flex-col overflow-hidden rounded-3xl bg-white shadow-[0_32px_80px_rgba(0,0,0,0.35)]"
            style={{ animation: 'modal-in 0.22s cubic-bezier(0.34,1.56,0.64,1) both' }}
          >
            {/* 헤더 */}
            <div className="flex shrink-0 items-center justify-between border-b border-[#F0F0F0] px-6 py-4">
              <div className="flex items-center gap-3">
                <span
                  className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white"
                  style={{ background: selected.accent }}
                >
                  {selected.en}
                </span>
                <h2 className="text-[17px] font-black tracking-[-0.02em] text-[#111]">{selected.label}</h2>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#999] transition-colors hover:bg-[#F5F5F5] hover:text-[#111]"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* 본문 */}
            <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
              {/* 폰 프레임 */}
              <div className="flex shrink-0 items-center justify-center bg-[#F7F7F7] px-8 py-8 md:w-[380px]">
                <div
                  className="relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
                  style={{ width: 300, height: 560, borderRadius: 36, border: '8px solid #1A1A1A', background: '#1A1A1A' }}
                >
                  <div
                    className="absolute left-1/2 top-0 z-10 -translate-x-1/2"
                    style={{ width: 100, height: 22, background: '#1A1A1A', borderBottomLeftRadius: 14, borderBottomRightRadius: 14 }}
                  />
                  <iframe
                    src={selected.href}
                    title={`${selected.label} 미리보기`}
                    style={{ width: '130%', height: '130%', transform: 'scale(0.769)', transformOrigin: 'top left', border: 'none', borderRadius: 28, background: '#fff' }}
                  />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                    <div className="h-1 w-16 rounded-full bg-white/30" />
                  </div>
                </div>
              </div>

              {/* 정보 패널 */}
              <div className="flex flex-1 flex-col justify-between overflow-y-auto p-8">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#CCC]">TEMPLATE</p>
                  <h3 className="mt-2 text-[28px] font-black leading-[1.1] tracking-[-0.04em] text-[#111]">{selected.label}</h3>
                  <p className="mt-3 text-[14px] leading-[1.8] text-[#777]">{selected.desc}</p>
                  <div className="mt-6 space-y-2">
                    {selected.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] text-white" style={{ background: selected.accent }}>✓</span>
                        <span className="text-[13px] font-medium text-[#444]">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border px-4 py-2" style={{ borderColor: `${selected.accent}40`, background: `${selected.accent}10` }}>
                    <span className="text-[11px] font-black" style={{ color: selected.accent }}>🎁 {selected.badge}</span>
                    <span className="text-[11px] text-[#999]">강조 혜택</span>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-2.5">
                  <Link
                    href="/#contact"
                    className="flex h-[48px] items-center justify-center rounded-xl bg-[#111] text-[14px] font-black text-white transition-opacity hover:opacity-80"
                    onClick={() => setSelected(null)}
                  >
                    이 템플릿으로 제작 문의
                  </Link>
                  <button
                    onClick={() => setSelected(null)}
                    className="flex h-[44px] items-center justify-center rounded-xl text-[13px] font-medium text-[#AAA] transition-colors hover:text-[#555]"
                  >
                    닫기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// ─── 탭 2: 실적·신뢰도 ──────────────────────────────────────────────────────

const STATS = [
  { num: '12,847', unit: '건', label: '누적 랜딩페이지 납품', sub: '2019년부터 꾸준히 공급' },
  { num: '98', unit: '%', label: '고객 만족도', sub: '납품 후 설문 기준' },
  { num: '2.3', unit: '일', label: '평균 납품 기간', sub: '빠르면 당일 납품' },
  { num: '4.1', unit: '배', label: '평균 전환율 향상', sub: '기존 대비 측정값' },
]

function StatsTab() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {STATS.map((s) => (
        <div
          key={s.label}
          className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm"
        >
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#BBB]">PROVEN</p>
          <div>
            <p className="mt-4 text-[clamp(2.2rem,5vw,3rem)] font-black leading-none tracking-[-0.04em] text-[#111]">
              {s.num}
              <span className="ml-0.5 text-[1.4rem] font-black text-[#E8522A]">{s.unit}</span>
            </p>
            <p className="mt-2 text-[14px] font-bold text-[#333]">{s.label}</p>
            <p className="mt-1 text-[12px] text-[#999]">{s.sub}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── 탭 3: 진행 과정 ────────────────────────────────────────────────────────

const STEPS = [
  {
    step: '01',
    title: '업종 선택',
    desc: '인터넷·렌탈·보험 등 업종을 선택하거나, 요구사항을 말씀해 주세요.',
    icon: '🗂️',
  },
  {
    step: '02',
    title: '커스터마이징',
    desc: '로고, 색상, 전화번호, 혜택 문구를 업체에 맞게 수정합니다.',
    icon: '🎨',
  },
  {
    step: '03',
    title: '납품 & 배포',
    desc: '평균 2.3일 내 완성본 전달. 도메인 연결까지 지원합니다.',
    icon: '🚀',
  },
  {
    step: '04',
    title: '광고 집행',
    desc: '네이버·구글·카카오 광고 링크에 연결하면 바로 문의가 시작됩니다.',
    icon: '📣',
  },
]

function ProcessTab() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {STEPS.map((s, i) => (
        <div key={s.step} className="relative rounded-2xl bg-white p-6 shadow-sm">
          {/* 연결선 (마지막 제외) */}
          {i < STEPS.length - 1 && (
            <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M12 5l5 5-5 5" stroke="#DDD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
          <div className="text-[2rem]">{s.icon}</div>
          <p className="mt-3 text-[11px] font-black tracking-[0.14em] text-[#E8522A]">STEP {s.step}</p>
          <p className="mt-1.5 text-[16px] font-black tracking-[-0.02em] text-[#111]">{s.title}</p>
          <p className="mt-2 text-[13px] leading-[1.7] text-[#777]">{s.desc}</p>
        </div>
      ))}
    </div>
  )
}

// ─── 탭 4: 심플 CTA ─────────────────────────────────────────────────────────

function SimpleCTATab() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl bg-white py-16 shadow-sm">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#BBB]">READY TO START</p>
      <h3 className="mt-4 text-[clamp(1.6rem,4vw,2.6rem)] font-black leading-[1.1] tracking-[-0.04em] text-[#111]">
        업종별 템플릿,
        <br />
        지금 바로 확인하세요
      </h3>
      <p className="mx-auto mt-4 max-w-[360px] text-center text-[14px] leading-[1.8] text-[#888]">
        6가지 업종 · 실제 작동하는 랜딩페이지.
        <br />
        광고 링크에 바로 연결할 수 있습니다.
      </p>
      <Link
        href="/templates"
        className="mt-8 inline-flex h-[52px] items-center rounded-full bg-[#111] px-8 text-[14px] font-black text-white transition-all hover:bg-[#E8522A]"
      >
        전체 템플릿 보기 →
      </Link>
    </div>
  )
}

// ─── 메인 ShowcaseTabs ───────────────────────────────────────────────────────

export function ShowcaseTabs() {
  const [active, setActive] = useState<TabId>('preview')

  return (
    <div>
      {/* 탭 버튼 */}
      <div className="mb-6 flex flex-wrap gap-2">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`rounded-full px-4 py-2 text-[13px] font-bold transition-all ${
              active === tab.id
                ? 'bg-[#111] text-white'
                : 'bg-white text-[#777] hover:bg-[#F0F0F0] hover:text-[#111]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 탭 콘텐츠 */}
      {active === 'preview' && <PreviewTab />}
      {active === 'stats' && <StatsTab />}
      {active === 'process' && <ProcessTab />}
      {active === 'cta' && <SimpleCTATab />}
    </div>
  )
}

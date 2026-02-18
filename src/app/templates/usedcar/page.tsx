'use client'

import { useState } from 'react'
import { TemplateLayout } from '@/components/templates/TemplateLayout'

const BENEFITS = [
  {
    icon: '💰',
    title: '최고가 매입 보장',
    desc: '전국 딜러 네트워크로 가장 높은 가격에 매입. 타 견적 대비 평균 15% 더 드립니다.',
  },
  {
    icon: '⚡',
    title: '당일 현금 지급',
    desc: '차량 상태 확인 후 계약 당일 현금 또는 계좌 이체로 즉시 지급합니다.',
  },
  {
    icon: '🤝',
    title: '직거래 수수료 없음',
    desc: '판매 수수료 · 이전 비용 등 모든 비용은 저희가 부담합니다.',
  },
]

const SERVICES = [
  { icon: '🚗', name: '내 차 팔기', desc: '최고가 무료 시세 조회' },
  { icon: '🔍', name: '중고차 구입', desc: '원하는 차량 무료 탐색' },
  { icon: '📋', name: '차량 진단', desc: '무료 상태 진단 서비스' },
  { icon: '💳', name: '할부 구매', desc: '저금리 할부 프로그램' },
]

const FAQ = [
  {
    q: '시세 조회는 정말 무료인가요?',
    a: '네, 완전 무료입니다. 전화 상담 또는 사진 전송만으로 5분 이내에 시세를 알려드립니다.',
  },
  {
    q: '차량 상태가 좋지 않아도 팔 수 있나요?',
    a: '사고차, 침수차, 폐차 직전 차량도 매입합니다. 모든 차량을 가장 높은 가격으로 매입하려고 노력합니다.',
  },
  {
    q: '이전 비용은 따로 내야 하나요?',
    a: '이전 비용 포함 모든 부대비용은 저희가 부담합니다. 추가 비용 없이 차량 가격 전액을 받으시면 됩니다.',
  },
  {
    q: '구입 시 차량 상태 보증이 되나요?',
    a: '판매하는 모든 차량은 전문 기사가 점검하며, 주요 부품에 대한 보증 서비스가 제공됩니다.',
  },
]

export default function UsedCarTemplatePage() {
  const [mode, setMode] = useState<'sell' | 'buy'>('sell')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    year: '',
    budget: '',
    agreePrivacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 900))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <TemplateLayout
        config={{
          heroTitle: '신청이 완료되었습니다!',
          heroGradient: 'linear-gradient(160deg, #431407 0%, #C2410C 100%)',
          primaryColor: '#C2410C',
          companyPhone: '1588-0000',
        }}
      >
        <div className="flex flex-col items-center px-5 py-14 text-center">
          <div className="text-4xl">✅</div>
          <h2 className="mt-4 text-[20px] font-black text-[#111]">신청 완료</h2>
          <p className="mt-2 text-[14px] leading-relaxed text-[#666]">
            30분 이내로 담당자가 연락드립니다.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 rounded-xl bg-[#C2410C] px-6 py-3 text-[14px] font-black text-white"
          >
            다시 신청하기
          </button>
        </div>
      </TemplateLayout>
    )
  }

  return (
    <TemplateLayout
      config={{
        heroBadge: '🚗 내 차 최고가 매입 · 당일 현금 지급',
        heroTitle:
          '내 차 팔고<br/><strong style="color:#FEE500">최고가</strong>로<br/>현금 받으세요',
        heroSub: '무료 시세 조회 → 당일 계약 → 즉시 현금 지급. 수수료 없음',
        heroBullets: [
          '5분 이내 무료 시세 확인',
          '당일 현금 지급',
          '이전 비용 · 수수료 없음',
        ],
        heroGradient: 'linear-gradient(160deg, #431407 0%, #B45309 100%)',
        heroCta: '📞 지금 무료 시세 조회하기',
        primaryColor: '#C2410C',
        companyName: 'OO중고차',
        companyPhone: '1588-0000',
        companyHours: '09:00 ~ 20:00',
        trustStats: [
          { value: '9,400+', label: '누적 매입 대수' },
          { value: '98%', label: '최고가 달성률' },
          { value: '30분↓', label: '시세 안내 소요' },
        ],
        faq: FAQ,
      }}
    >
      {/* ── 모드 탭 (팔기/사기) ──────────────────────────────────── */}
      <section className="border-b border-[#EEE] px-4 pt-6">
        <div className="flex rounded-xl bg-[#F5F5F5] p-1">
          <button
            onClick={() => setMode('sell')}
            className={`flex-1 rounded-lg py-3 text-[14px] font-black transition-colors ${
              mode === 'sell' ? 'bg-white shadow-sm text-[#C2410C]' : 'text-[#888]'
            }`}
          >
            🚗 내 차 팔기
          </button>
          <button
            onClick={() => setMode('buy')}
            className={`flex-1 rounded-lg py-3 text-[14px] font-black transition-colors ${
              mode === 'buy' ? 'bg-white shadow-sm text-[#C2410C]' : 'text-[#888]'
            }`}
          >
            🔍 중고차 사기
          </button>
        </div>
      </section>

      {/* ── 혜택 ─────────────────────────────────────────────────── */}
      <section className="px-4 py-8">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#CCC]">
          WHY US
        </p>
        <h2 className="mb-5 text-[18px] font-black text-[#111]">
          저희를 선택하는 이유
        </h2>
        <div className="space-y-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="flex items-start gap-4 rounded-2xl bg-[#FFF7ED] p-4"
            >
              <span className="shrink-0 text-2xl">{b.icon}</span>
              <div>
                <p className="text-[14px] font-black text-[#111]">{b.title}</p>
                <p className="mt-1 text-[12px] leading-relaxed text-[#666]">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 서비스 ──────────────────────────────────────────────── */}
      <section className="border-t border-[#EEE] bg-[#F8F8F8] px-4 py-8">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#CCC]">
          SERVICES
        </p>
        <h2 className="mb-5 text-[18px] font-black text-[#111]">
          제공 서비스
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {SERVICES.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl border border-[#EEE] bg-white p-4 text-center"
            >
              <span className="text-2xl">{s.icon}</span>
              <p className="mt-2 text-[13px] font-black text-[#111]">
                {s.name}
              </p>
              <p className="mt-0.5 text-[11px] text-[#888]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 신청 폼 ──────────────────────────────────────────────── */}
      <section className="px-4 py-8" id="form">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#CCC]">
          APPLY
        </p>
        <h2 className="mb-1 text-[18px] font-black text-[#111]">
          {mode === 'sell' ? '무료 시세 조회 신청' : '차량 탐색 신청'}
        </h2>
        <p className="mb-5 text-[12px] text-[#888]">
          {mode === 'sell'
            ? '차량 정보를 남겨주시면 5분 이내 시세를 알려드립니다.'
            : '예산과 연락처만 남겨주시면 맞는 차량을 찾아드립니다.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="이름"
            className="h-[52px] w-full rounded-xl border border-[#DDD] px-4 text-[15px] focus:border-[#C2410C] focus:outline-none focus:ring-2 focus:ring-[#C2410C]/20"
          />
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="연락처 (010-0000-0000)"
            className="h-[52px] w-full rounded-xl border border-[#DDD] px-4 text-[15px] focus:border-[#C2410C] focus:outline-none focus:ring-2 focus:ring-[#C2410C]/20"
          />

          {mode === 'sell' ? (
            <>
              <input
                type="text"
                name="carModel"
                value={formData.carModel}
                onChange={handleChange}
                placeholder="차량 모델 (예: 쏘나타, 그랜저)"
                className="h-[52px] w-full rounded-xl border border-[#DDD] px-4 text-[15px] focus:border-[#C2410C] focus:outline-none focus:ring-2 focus:ring-[#C2410C]/20"
              />
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="h-[52px] w-full rounded-xl border border-[#DDD] px-4 text-[15px] text-[#555] focus:border-[#C2410C] focus:outline-none focus:ring-2 focus:ring-[#C2410C]/20"
              >
                <option value="">연식 선택</option>
                {Array.from({ length: 15 }, (_, i) => 2024 - i).map((y) => (
                  <option key={y} value={y}>
                    {y}년
                  </option>
                ))}
              </select>
            </>
          ) : (
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="h-[52px] w-full rounded-xl border border-[#DDD] px-4 text-[15px] text-[#555] focus:border-[#C2410C] focus:outline-none focus:ring-2 focus:ring-[#C2410C]/20"
            >
              <option value="">예산 선택</option>
              <option value="under500">500만원 미만</option>
              <option value="500-1000">500 ~ 1,000만원</option>
              <option value="1000-2000">1,000 ~ 2,000만원</option>
              <option value="2000-3000">2,000 ~ 3,000만원</option>
              <option value="over3000">3,000만원 이상</option>
            </select>
          )}

          <label className="flex items-start gap-2.5 rounded-xl bg-[#F8F8F8] p-3.5">
            <input
              type="checkbox"
              name="agreePrivacy"
              required
              checked={formData.agreePrivacy}
              onChange={handleChange}
              className="mt-0.5 h-4 w-4 rounded accent-[#C2410C]"
            />
            <span className="text-[12px] text-[#666]">
              <strong className="text-[#333]">[필수]</strong> 개인정보 수집 및
              이용에 동의합니다.
            </span>
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex h-[56px] w-full items-center justify-center rounded-xl text-[16px] font-black text-white shadow-lg transition-all active:opacity-80 disabled:opacity-60"
            style={{ background: '#C2410C', boxShadow: '0 6px 24px rgba(194,65,12,0.4)' }}
          >
            {isSubmitting
              ? '신청 중...'
              : mode === 'sell'
                ? '🚗 무료 시세 조회 신청'
                : '🔍 차량 탐색 신청하기'}
          </button>
        </form>
      </section>
    </TemplateLayout>
  )
}

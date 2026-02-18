'use client'

import { useState } from 'react'
import { TemplateLayout } from '@/components/templates/TemplateLayout'

const BENEFITS = [
  {
    icon: '🔍',
    title: '전 보험사 중립 비교',
    desc: '삼성·한화·교보·흥국 등 20개 이상 보험사 상품을 한 번에 비교. 100% 중립적으로 분석합니다.',
  },
  {
    icon: '👨‍💼',
    title: '전문 설계사 무료 상담',
    desc: '10년 이상 경력의 보험 전문가가 내 상황에 딱 맞는 보장을 직접 설계해 드립니다.',
  },
  {
    icon: '📱',
    title: '비대면 상담 가능',
    desc: '전화 또는 카카오로 편하게 상담하세요. 방문 없이도 가입까지 완료할 수 있습니다.',
  },
]

const TYPES = [
  { icon: '❤️', name: '생명보험', desc: '사망·치명적 질병 대비' },
  { icon: '🏥', name: '실손보험', desc: '병원비 실비 보상' },
  { icon: '🦷', name: '건강보험', desc: '암·뇌·심장 3대 질병' },
  { icon: '🧓', name: '연금보험', desc: '노후 소득 보장' },
  { icon: '👶', name: '어린이보험', desc: '자녀 종합 보장' },
  { icon: '🚗', name: '자동차보험', desc: '자동차 사고 보장' },
]

const FAQ = [
  {
    q: '상담받으면 무조건 가입해야 하나요?',
    a: '아닙니다. 상담은 완전히 무료이며 의무 가입은 없습니다. 필요한 경우에만 가입하시면 됩니다.',
  },
  {
    q: '기존 보험이 있어도 상담이 가능한가요?',
    a: '물론입니다. 기존 보험을 분석해 불필요한 보험료를 줄이거나 보장을 강화하는 방향으로 상담드립니다.',
  },
  {
    q: '상담사 수수료가 발생하나요?',
    a: '소비자에게는 별도 수수료가 없습니다. 보험사로부터 받는 수수료로 운영됩니다.',
  },
  {
    q: '비대면으로도 가입까지 할 수 있나요?',
    a: '네, 전화 상담 후 전자서명을 통해 방문 없이 가입까지 완료할 수 있습니다.',
  },
]

export default function InsuranceTemplatePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    insuranceType: '',
    ageGroup: '',
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
          heroTitle: '상담 신청이 완료되었습니다!',
          heroGradient: 'linear-gradient(160deg, #064E3B 0%, #059669 100%)',
          primaryColor: '#059669',
          companyPhone: '1588-0000',
        }}
      >
        <div className="flex flex-col items-center px-5 py-14 text-center">
          <div className="text-4xl">✅</div>
          <h2 className="mt-4 text-[20px] font-black text-[#111]">
            상담 신청 완료
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-[#666]">
            전문 설계사가 24시간 이내 연락드립니다.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 rounded-xl bg-[#059669] px-6 py-3 text-[14px] font-black text-white"
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
        heroBadge: '🔍 내 보험 무료 점검 · 24시간 운영',
        heroTitle:
          '내 보험,<br/>제대로 된 건지<br/><strong style="color:#FEE500">무료로 점검</strong>해드립니다',
        heroSub: '과잉 보험료 낭비 없이, 꼭 필요한 보장만 설계해 드립니다',
        heroBullets: [
          '전 보험사 중립 비교 (20개사 이상)',
          '10년 경력 전문 설계사 1:1 상담',
          '비대면 가입 가능 · 방문 불필요',
        ],
        heroGradient: 'linear-gradient(160deg, #064E3B 0%, #059669 100%)',
        heroCta: '📞 지금 무료 상담 받기',
        primaryColor: '#059669',
        companyName: 'OO보험 설계사무소',
        companyPhone: '010-0000-0000',
        companyHours: '09:00 ~ 21:00',
        trustStats: [
          { value: '5,200+', label: '상담 완료 건수' },
          { value: '4.9점', label: '고객 만족도' },
          { value: '무료', label: '상담 비용' },
        ],
        faq: FAQ,
      }}
    >
      {/* ── 혜택 ─────────────────────────────────────────────────── */}
      <section className="px-4 py-8">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#CCC]">
          WHY US
        </p>
        <h2 className="mb-5 text-[18px] font-black text-[#111]">
          왜 전문 설계사인가요?
        </h2>
        <div className="space-y-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="flex items-start gap-4 rounded-2xl bg-[#F0FDF4] p-4"
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

      {/* ── 보험 종류 ─────────────────────────────────────────────── */}
      <section className="border-t border-[#EEE] bg-[#F8F8F8] px-4 py-8">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#CCC]">
          COVERAGE
        </p>
        <h2 className="mb-5 text-[18px] font-black text-[#111]">
          상담 가능 보험 종류
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {TYPES.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center rounded-2xl border border-[#EEE] bg-white p-3 text-center"
            >
              <span className="text-2xl">{t.icon}</span>
              <p className="mt-2 text-[12px] font-black text-[#111]">
                {t.name}
              </p>
              <p className="mt-0.5 text-[10px] text-[#888]">{t.desc}</p>
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
          무료 상담 신청
        </h2>
        <p className="mb-5 text-[12px] text-[#888]">
          간단한 정보만 남겨주시면 전문 설계사가 연락드립니다.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="이름"
            className="h-[52px] w-full rounded-xl border border-[#DDD] px-4 text-[15px] focus:border-[#059669] focus:outline-none focus:ring-2 focus:ring-[#059669]/20"
          />
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="연락처 (010-0000-0000)"
            className="h-[52px] w-full rounded-xl border border-[#DDD] px-4 text-[15px] focus:border-[#059669] focus:outline-none focus:ring-2 focus:ring-[#059669]/20"
          />

          <div>
            <p className="mb-2 text-[13px] font-bold text-[#555]">
              관심 보험 종류
            </p>
            <div className="grid grid-cols-2 gap-2">
              {['생명보험', '실손보험', '건강보험', '연금보험', '어린이보험', '기타'].map((t) => (
                <label
                  key={t}
                  className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 text-[13px] font-bold transition-colors ${
                    formData.insuranceType === t
                      ? 'border-[#059669] bg-[#F0FDF4] text-[#059669]'
                      : 'border-[#DDD] text-[#555]'
                  }`}
                >
                  <input
                    type="radio"
                    name="insuranceType"
                    value={t}
                    checked={formData.insuranceType === t}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  {t}
                </label>
              ))}
            </div>
          </div>

          <select
            name="ageGroup"
            value={formData.ageGroup}
            onChange={handleChange}
            className="h-[52px] w-full rounded-xl border border-[#DDD] px-4 text-[15px] text-[#555] focus:border-[#059669] focus:outline-none focus:ring-2 focus:ring-[#059669]/20"
          >
            <option value="">연령대 선택 (선택)</option>
            <option value="20s">20대</option>
            <option value="30s">30대</option>
            <option value="40s">40대</option>
            <option value="50s">50대</option>
            <option value="60s">60대 이상</option>
          </select>

          <label className="flex items-start gap-2.5 rounded-xl bg-[#F8F8F8] p-3.5">
            <input
              type="checkbox"
              name="agreePrivacy"
              required
              checked={formData.agreePrivacy}
              onChange={handleChange}
              className="mt-0.5 h-4 w-4 rounded accent-[#059669]"
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
            style={{ background: '#059669', boxShadow: '0 6px 24px rgba(5,150,105,0.4)' }}
          >
            {isSubmitting ? '신청 중...' : '📋 무료 보험 상담 신청하기'}
          </button>
        </form>
      </section>
    </TemplateLayout>
  )
}

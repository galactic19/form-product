'use client'

import { useState } from 'react'
import { TemplateLayout } from '@/components/templates/TemplateLayout'

const BENEFITS = [
  {
    icon: '📱',
    title: '공시지원금 최대 지원',
    desc: '최신 기기 공시지원금 + 추가 보조금까지. 타 대리점 대비 최대 혜택 제공.',
  },
  {
    icon: '🎁',
    title: '사은품 추가 증정',
    desc: '에어팟, 갤럭시버즈, 상품권, 현금 중 선택. 가입 즉시 지급.',
  },
  {
    icon: '⚡',
    title: '현장 즉시 개통',
    desc: '서류 준비 없이 신분증 하나로 당일 개통. 번호이동도 30분 이내 완료.',
  },
]

const DEVICES = [
  { name: '갤럭시 S25', sub: '5G', from: '0', tag: '인기' },
  { name: '아이폰 16', sub: '5G', from: '0', tag: '' },
  { name: '갤럭시 Z폴드6', sub: '5G', from: '290,000', tag: '' },
  { name: '갤럭시 A55', sub: 'LTE', from: '0', tag: '실속형' },
]

const FAQ = [
  {
    q: '번호이동도 혜택이 동일한가요?',
    a: '네, 신규가입과 번호이동 모두 동일한 혜택입니다. 오히려 번호이동 시 추가 혜택이 있는 경우도 있습니다.',
  },
  {
    q: '사은품은 언제 받을 수 있나요?',
    a: '개통 당일 또는 7영업일 이내 수령 가능합니다. 현금 지급의 경우 계좌 이체로 처리됩니다.',
  },
  {
    q: '기존 기기는 어떻게 하나요?',
    a: '기존 기기 보상 프로그램 또는 판매 연결도 도와드립니다. 상담 시 말씀해 주세요.',
  },
  {
    q: '요금제는 꼭 비싼 걸 써야 하나요?',
    a: '아닙니다. 6개월 후 요금제 변경이 가능하며, 처음부터 합리적인 요금제로 시작할 수도 있습니다.',
  },
]

export default function MobileTemplatePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    device: '',
    provider: '',
    agreePrivacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          heroGradient: 'linear-gradient(160deg, #0D0D0D 0%, #1E1B4B 100%)',
          primaryColor: '#6D28D9',
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
            className="mt-6 rounded-xl bg-[#6D28D9] px-6 py-3 text-[14px] font-black text-white"
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
        heroBadge: '🎁 최신폰 0원 개통 이벤트 진행 중',
        heroTitle:
          '공시지원금 최대 +<br/><strong style="color:#FEE500">사은품 추가 증정</strong><br/>지금 신청하세요',
        heroSub: '갤럭시 · 아이폰 전 기종 취급 | KT · SK · LGU+ 번호이동 환영',
        heroBullets: [
          '현장 즉시 개통 (30분 이내)',
          '사은품 당일 지급',
          '요금제 6개월 후 자유 변경',
        ],
        heroGradient: 'linear-gradient(160deg, #1A0533 0%, #4C1D95 100%)',
        heroCta: '📞 지금 전화하면 바로 연결됩니다',
        primaryColor: '#6D28D9',
        companyName: 'OO휴대폰 대리점',
        companyPhone: '1588-0000',
        companyHours: '09:00 ~ 21:00',
        trustStats: [
          { value: '8,240건', label: '이번 달 개통' },
          { value: '4.9점', label: '고객 평점' },
          { value: '30분↓', label: '평균 개통 소요' },
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
          저희 대리점 혜택
        </h2>
        <div className="space-y-3">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="flex items-start gap-4 rounded-2xl bg-[#F5F3FF] p-4"
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

      {/* ── 기기 ─────────────────────────────────────────────────── */}
      <section className="border-t border-[#EEE] bg-[#F8F8F8] px-4 py-8">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#CCC]">
          DEVICES
        </p>
        <h2 className="mb-5 text-[18px] font-black text-[#111]">
          취급 기기 (일부)
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {DEVICES.map((d) => (
            <div
              key={d.name}
              className="relative rounded-2xl border-2 border-[#EEE] bg-white p-4"
            >
              {d.tag && (
                <span className="absolute right-3 top-3 rounded-full bg-[#6D28D9] px-2 py-0.5 text-[9px] font-black text-white">
                  {d.tag}
                </span>
              )}
              <p className="text-[13px] font-black text-[#111]">{d.name}</p>
              <p className="text-[11px] text-[#AAA]">{d.sub}</p>
              <p className="mt-2 text-[11px] text-[#888]">
                실구매가{' '}
                <strong className="text-[#111]">
                  {d.from === '0' ? '0원~' : `${d.from}원~`}
                </strong>
              </p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[11px] text-[#AAA]">
          * 요금제 · 통신사 · 약정 조건에 따라 다를 수 있습니다.
        </p>
      </section>

      {/* ── 신청 폼 ──────────────────────────────────────────────── */}
      <section className="px-4 py-8" id="form">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#CCC]">
          APPLY
        </p>
        <h2 className="mb-1 text-[18px] font-black text-[#111]">
          간편 신청하기
        </h2>
        <p className="mb-5 text-[12px] text-[#888]">
          연락처만 남겨주시면 최고 혜택으로 안내드립니다.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="이름"
            className="h-[52px] w-full rounded-xl border border-[#DDD] px-4 text-[15px] focus:border-[#6D28D9] focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20"
          />
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="연락처 (010-0000-0000)"
            className="h-[52px] w-full rounded-xl border border-[#DDD] px-4 text-[15px] focus:border-[#6D28D9] focus:outline-none focus:ring-2 focus:ring-[#6D28D9]/20"
          />

          <div>
            <p className="mb-2 text-[13px] font-bold text-[#555]">
              관심 통신사
            </p>
            <div className="grid grid-cols-2 gap-2">
              {['KT', 'SK텔레콤', 'LGU+', '상관없음'].map((p) => (
                <label
                  key={p}
                  className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 text-[13px] font-bold transition-colors ${
                    formData.provider === p
                      ? 'border-[#6D28D9] bg-[#F5F3FF] text-[#6D28D9]'
                      : 'border-[#DDD] text-[#555]'
                  }`}
                >
                  <input
                    type="radio"
                    name="provider"
                    value={p}
                    checked={formData.provider === p}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  {p}
                </label>
              ))}
            </div>
          </div>

          <label className="flex items-start gap-2.5 rounded-xl bg-[#F8F8F8] p-3.5">
            <input
              type="checkbox"
              name="agreePrivacy"
              required
              checked={formData.agreePrivacy}
              onChange={handleChange}
              className="mt-0.5 h-4 w-4 rounded accent-[#6D28D9]"
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
            style={{ background: '#6D28D9', boxShadow: '0 6px 24px rgba(109,40,217,0.4)' }}
          >
            {isSubmitting ? '신청 중...' : '📋 최고 혜택으로 신청하기'}
          </button>
        </form>
      </section>
    </TemplateLayout>
  )
}

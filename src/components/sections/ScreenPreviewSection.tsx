'use client'

import { RevealOnScroll } from '@/components/animations/RevealOnScroll'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SurfaceCard } from '@/components/ui/SurfaceCard'
import { screenPreviewContent } from '@/lib/content'

// 구글폼 스타일 Before 목업
function GoogleFormMockup() {
  return (
    <div className="h-full w-full bg-white p-3 pt-8">
      {/* 구글폼 헤더 */}
      <div className="mb-4 border-b-2 border-gray-200 pb-3">
        <div className="h-6 w-3/4 rounded bg-purple-100" />
        <div className="mt-2 h-3 w-full rounded bg-gray-100" />
        <div className="mt-1 h-3 w-2/3 rounded bg-gray-100" />
      </div>
      
      {/* 질문들 */}
      <div className="space-y-4">
        <div className="rounded border border-gray-200 bg-white p-3 shadow-sm">
          <div className="h-3 w-20 rounded bg-gray-700" />
          <div className="mt-2 h-8 w-full rounded border border-gray-300 bg-gray-50" />
        </div>
        
        <div className="rounded border border-gray-200 bg-white p-3 shadow-sm">
          <div className="h-3 w-16 rounded bg-gray-700" />
          <div className="mt-2 h-8 w-full rounded border border-gray-300 bg-gray-50" />
        </div>
        
        <div className="rounded border border-gray-200 bg-white p-3 shadow-sm">
          <div className="h-3 w-24 rounded bg-gray-700" />
          <div className="mt-2 space-y-1">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full border border-gray-400" />
              <div className="h-2.5 w-16 rounded bg-gray-300" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full border border-gray-400" />
              <div className="h-2.5 w-20 rounded bg-gray-300" />
            </div>
          </div>
        </div>
        
        {/* 제출 버튼 */}
        <div className="flex justify-end">
          <div className="h-8 w-20 rounded bg-purple-100" />
        </div>
      </div>
      
      {/* 구글폼 푸터 */}
      <div className="mt-6 flex items-center justify-center gap-1 text-gray-300">
        <div className="h-3 w-3 rounded-full bg-gray-300" />
        <span className="text-[8px]">Google Forms</span>
      </div>
    </div>
  )
}

// 전문 폼 After 목업
function ProfessionalFormMockup() {
  return (
    <div className="h-full w-full bg-gradient-to-b from-gray-900 via-gray-900 to-black p-3 pt-8">
      {/* 헤더 배너 */}
      <div className="mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-primary/30" />
          <div className="h-4 w-20 rounded bg-white/20" />
        </div>
        <div className="mt-2 h-2.5 w-full rounded bg-white/10" />
        <div className="mt-1 h-2.5 w-2/3 rounded bg-white/10" />
      </div>
      
      {/* 입력 필드들 */}
      <div className="space-y-3">
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-red-400/60" />
            <div className="h-2 w-14 rounded bg-gray-600" />
          </div>
          <div className="h-9 w-full rounded-lg border border-gray-700 bg-gray-800/50 px-2">
            <div className="h-full w-24 rounded bg-gray-700/30" />
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-red-400/60" />
            <div className="h-2 w-10 rounded bg-gray-600" />
          </div>
          <div className="h-9 w-full rounded-lg border border-gray-700 bg-gray-800/50 px-2">
            <div className="h-full w-20 rounded bg-gray-700/30" />
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="h-2 w-12 rounded bg-gray-600" />
          <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-2">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 rounded bg-gray-800/50 p-1.5">
                <div className="h-3 w-3 rounded border border-primary/50" />
                <div className="h-2 w-16 rounded bg-gray-600" />
              </div>
              <div className="flex items-center gap-2 rounded bg-gray-800/50 p-1.5">
                <div className="h-3 w-3 rounded border border-gray-600" />
                <div className="h-2 w-14 rounded bg-gray-600" />
              </div>
              <div className="flex items-center gap-2 rounded bg-primary/10 p-1.5">
                <div className="h-3 w-3 rounded border border-primary bg-primary/20" />
                <div className="h-2 w-20 rounded bg-gray-500" />
              </div>
            </div>
          </div>
        </div>
        
        {/* 제출 버튼 */}
        <div className="pt-2">
          <div className="flex h-10 w-full items-center justify-center rounded-lg bg-gradient-to-r from-primary to-primary/80 font-medium text-white shadow-lg shadow-primary/25">
            <span className="text-xs">신청하기</span>
          </div>
        </div>
      </div>
      
      {/* 보안 배지 */}
      <div className="mt-4 flex items-center justify-center gap-1 text-gray-500">
        <div className="h-2 w-2 rounded-full bg-green-500/50" />
        <span className="text-[8px]">SSL 보안 연결</span>
      </div>
    </div>
  )
}

function PreviewCard({
  label,
  caption,
  type,
}: {
  label: string
  caption: string
  type: 'before' | 'after'
}) {
  const isAfter = type === 'after'
  
  return (
    <SurfaceCard className={`relative overflow-hidden p-6 transition-all duration-500 ${isAfter ? 'border-primary/50 bg-primary/5 shadow-[0_0_40px_-10px_rgba(0,153,255,0.2)]' : 'border-border/50 bg-card/50 opacity-80 hover:opacity-100'}`}>
      <span className={`inline-flex rounded-md border px-3 py-1 text-xs font-bold tracking-wider ${isAfter ? 'border-primary/30 bg-primary/10 text-primary' : 'border-border/50 bg-foreground/5 text-muted-foreground'}`}>
        {label}
      </span>
      
      <div className="mt-6 flex justify-center">
        {/* Device Frame */}
        <div className="relative aspect-[9/18] w-full max-w-[260px] rounded-[2rem] border-[6px] border-gray-800 bg-black shadow-2xl">
           {/* Screen Content */}
           <div className="absolute inset-0 overflow-hidden rounded-[1.7rem] bg-gray-900">
             {/* Notch */}
             <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-black" />
             
             {isAfter ? <ProfessionalFormMockup /> : <GoogleFormMockup />}
           </div>
        </div>
      </div>
      
      <p className={`mt-8 text-center text-sm font-medium ${isAfter ? 'text-primary' : 'text-muted-foreground'}`}>{caption}</p>
    </SurfaceCard>
  )
}

export function ScreenPreviewSection() {
  return (
    <section id="screen-preview" className="border-t border-border/50 bg-background px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title={screenPreviewContent.title} subtitle={screenPreviewContent.subtitle} />

        <div className="mt-16 grid gap-8 md:grid-cols-2 items-center">
          <RevealOnScroll direction="right">
            <PreviewCard
              label={screenPreviewContent.before.label}
              caption={screenPreviewContent.before.caption}
              type="before"
            />
          </RevealOnScroll>
          <RevealOnScroll direction="left" delay={0.2}>
            <PreviewCard
              label={screenPreviewContent.after.label}
              caption={screenPreviewContent.after.caption}
              type="after"
            />
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.3}>
          <div className="mt-12 text-center">
            <p className="mx-auto max-w-2xl whitespace-pre-line text-lg font-light leading-relaxed text-muted-foreground">
              {screenPreviewContent.bottomCopy}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}


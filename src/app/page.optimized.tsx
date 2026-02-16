import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/sections/HeroSection'

// Above-the-fold: 즉시 로드
// Below-the-fold: Dynamic import (코드 스플리팅)
const ProblemSection = dynamic(() => import('@/components/sections/ProblemSection').then(mod => ({ default: mod.ProblemSection })))
const SolutionChoiceSection = dynamic(() => import('@/components/sections/SolutionChoiceSection').then(mod => ({ default: mod.SolutionChoiceSection })))
const TemplateDetailSection = dynamic(() => import('@/components/sections/TemplateDetailSection').then(mod => ({ default: mod.TemplateDetailSection })))
const SubscriptionDetailSection = dynamic(() => import('@/components/sections/SubscriptionDetailSection').then(mod => ({ default: mod.SubscriptionDetailSection })))
const PricingSection = dynamic(() => import('@/components/sections/PricingSection').then(mod => ({ default: mod.PricingSection })))
const HowItWorksSection = dynamic(() => import('@/components/sections/HowItWorksSection').then(mod => ({ default: mod.HowItWorksSection })))
const ScreenPreviewSection = dynamic(() => import('@/components/sections/ScreenPreviewSection').then(mod => ({ default: mod.ScreenPreviewSection })))
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection').then(mod => ({ default: mod.TestimonialsSection })))
const FAQSection = dynamic(() => import('@/components/sections/FAQSection').then(mod => ({ default: mod.FAQSection })))
const FinalCTASection = dynamic(() => import('@/components/sections/FinalCTASection').then(mod => ({ default: mod.FinalCTASection })))

export default function Home() {
  return (
    <main className="pt-20 sm:pt-24">
      {/* Above-the-fold: 즉시 로드 */}
      <HeroSection />
      
      {/* Below-the-fold: Dynamic import */}
      <ProblemSection />
      <SolutionChoiceSection />
      <TemplateDetailSection />
      <SubscriptionDetailSection />
      <PricingSection />
      <HowItWorksSection />
      <ScreenPreviewSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  )
}

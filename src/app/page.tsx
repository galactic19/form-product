import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { SolutionChoiceSection } from '@/components/sections/SolutionChoiceSection'
import { TemplateDetailSection } from '@/components/sections/TemplateDetailSection'
import { SubscriptionDetailSection } from '@/components/sections/SubscriptionDetailSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { ScreenPreviewSection } from '@/components/sections/ScreenPreviewSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

export default function Home() {
  return (
    <main className="pt-20 sm:pt-24">
      <HeroSection />
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

import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/sections/HeroSection'

function SectionLoadingFallback() {
  return (
    <section className="border-t border-border px-6 py-24 sm:py-32" aria-hidden="true">
      <div className="mx-auto max-w-7xl space-y-4">
        <div className="h-4 w-36 animate-pulse bg-muted rounded" />
        <div className="h-10 w-full max-w-3xl animate-pulse bg-muted rounded" />
        <div className="h-5 w-full max-w-2xl animate-pulse bg-muted rounded" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-36 animate-pulse border border-border bg-muted/50 rounded-2xl"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProblemSection = dynamic(() =>
  import('@/components/sections/ProblemSection').then((mod) => ({
    default: mod.ProblemSection,
  })),
  { loading: () => <SectionLoadingFallback /> }
)
const SolutionChoiceSection = dynamic(() =>
  import('@/components/sections/SolutionChoiceSection').then((mod) => ({
    default: mod.SolutionChoiceSection,
  })),
  { loading: () => <SectionLoadingFallback /> }
)
const TemplateDetailSection = dynamic(() =>
  import('@/components/sections/TemplateDetailSection').then((mod) => ({
    default: mod.TemplateDetailSection,
  })),
  { loading: () => <SectionLoadingFallback /> }
)
const SubscriptionDetailSection = dynamic(() =>
  import('@/components/sections/SubscriptionDetailSection').then((mod) => ({
    default: mod.SubscriptionDetailSection,
  })),
  { loading: () => <SectionLoadingFallback /> }
)
const PricingSection = dynamic(() =>
  import('@/components/sections/PricingSection').then((mod) => ({
    default: mod.PricingSection,
  })),
  { loading: () => <SectionLoadingFallback /> }
)
const HowItWorksSection = dynamic(() =>
  import('@/components/sections/HowItWorksSection').then((mod) => ({
    default: mod.HowItWorksSection,
  })),
  { loading: () => <SectionLoadingFallback /> }
)
const ScreenPreviewSection = dynamic(() =>
  import('@/components/sections/ScreenPreviewSection').then((mod) => ({
    default: mod.ScreenPreviewSection,
  })),
  { loading: () => <SectionLoadingFallback /> }
)
const TestimonialsSection = dynamic(() =>
  import('@/components/sections/TestimonialsSection').then((mod) => ({
    default: mod.TestimonialsSection,
  })),
  { loading: () => <SectionLoadingFallback /> }
)
const FAQSection = dynamic(() =>
  import('@/components/sections/FAQSection').then((mod) => ({
    default: mod.FAQSection,
  })),
  { loading: () => <SectionLoadingFallback /> }
)
const FinalCTASection = dynamic(() =>
  import('@/components/sections/FinalCTASection').then((mod) => ({
    default: mod.FinalCTASection,
  })),
  { loading: () => <SectionLoadingFallback /> }
)

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ProblemSection />
      <TemplateDetailSection />
      <SubscriptionDetailSection />
      <SolutionChoiceSection />
      <PricingSection />
      <HowItWorksSection />
      <ScreenPreviewSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  )
}

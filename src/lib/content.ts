// =============================================================================
// Form 서비스 랜딩페이지 콘텐츠
// 소비심리학 패턴 적용: PAS, 앵커링, 손실 회피, 사회적 증거
// =============================================================================

// -----------------------------------------------------------------------------
// 섹션 1: Hero
// 심리 패턴: 질문형 헤드라인 (문제 인식) + CTA 2개 (선택지 제공)
// -----------------------------------------------------------------------------

export interface HeroContent {
  headline: string
  subheadline: string
  cta: {
    primary: { text: string; href: string }
    secondary: { text: string; href: string }
  }
}

export const heroContent: HeroContent = {
  headline: '가입상품 팔면서 아직도 카톡으로 신청받으세요?',
  subheadline:
    '인터넷, TV, 렌탈, 보험... 가입상품 판매자를 위한 전용 신청폼.\n원페이지 템플릿부터 구독형 관리 서비스까지.',
  cta: {
    primary: { text: '템플릿 둘러보기', href: '#template-detail' },
    secondary: { text: '무료 체험 시작', href: '#subscription-detail' },
  },
}

// -----------------------------------------------------------------------------
// 섹션 2: 문제 공감
// 심리 패턴: PAS 공식 (Problem → Agitate)
// -----------------------------------------------------------------------------

export interface ProblemScenario {
  id: number
  title: string
  icon: string
  description: string
}

export interface ProblemContent {
  title: string
  subtitle: string
  scenarios: ProblemScenario[]
}

export const problemContent: ProblemContent = {
  title: '이런 경험, 있지 않으세요?',
  subtitle: '가입상품 영업 현장에서 매일 겪는 문제들',
  scenarios: [
    {
      id: 1,
      title: '카톡 지옥',
      icon: '💬',
      description:
        '"이름이요? 연락처요? 주소요? 어떤 상품이요?"\n하나하나 물어보다 대화 끊기고, 정보 빠지고, 고객 놓침.',
    },
    {
      id: 2,
      title: '구글폼의 배신',
      icon: '📋',
      description:
        '링크 보냈더니 "이거 사기 아니에요?"\n디자인이 허접해서 고객이 신뢰를 못 함.',
    },
    {
      id: 3,
      title: '외주의 늪',
      icon: '💸',
      description:
        '제대로 만들려니 견적 80만원.\n상품 바뀌면 수정비 또 따로. 포기.',
    },
  ],
}

// -----------------------------------------------------------------------------
// 섹션 3: 해결책 선택
// 심리 패턴: 선택지 제공 ("살까 말까" → "어떤 걸 살까")
// -----------------------------------------------------------------------------

export interface SolutionOption {
  id: number
  type: 'template' | 'subscription'
  icon: string
  title: string
  subtitle: string
  features: string[]
  priceText: string
  cta: { text: string; href: string }
}

export interface SolutionChoiceContent {
  title: string
  subtitle: string
  options: SolutionOption[]
  helpText: string
}

export const solutionChoiceContent: SolutionChoiceContent = {
  title: '상황에 맞게 선택하세요',
  subtitle: '템플릿과 구독, 두 가지 방법으로 시작할 수 있습니다',
  options: [
    {
      id: 1,
      type: 'template',
      icon: '💼',
      title: '템플릿 구매',
      subtitle: '만들어 드립니다',
      features: [
        '원페이지 완성본',
        '모바일 최적화',
        '링크 바로 사용',
        '1회 수정 포함',
      ],
      priceText: '5만원~ (1회)',
      cta: { text: '템플릿 보기', href: '#template-detail' },
    },
    {
      id: 2,
      type: 'subscription',
      icon: '🚀',
      title: '구독 서비스',
      subtitle: '직접 관리하세요',
      features: [
        '폼 자유롭게 생성',
        '카카오톡 알림',
        '고객에게 자동 메시지',
        'Admin 대시보드',
        '구글시트 자동 연동',
      ],
      priceText: '월 ₩9,900~',
      cta: { text: '무료 체험', href: '#subscription-detail' },
    },
  ],
  helpText: '잘 모르겠다면? → 템플릿부터 시작하세요. 나중에 구독으로 전환할 수 있습니다.',
}

// -----------------------------------------------------------------------------
// 섹션 4: 템플릿 상세
// 심리 패턴: 앵커링 (외주 80만원 vs 템플릿 5만원)
// -----------------------------------------------------------------------------

export interface TemplateItem {
  id: number
  name: string
  icon: string
  description: string
  mockupImage: string
}

export interface TemplatePricing {
  item: string
  price: string
  description: string
}

export interface TemplateDetailContent {
  title: string
  subtitle: string
  templates: TemplateItem[]
  pricing: TemplatePricing[]
  deliveryInfo: string
}

export const templateDetailContent: TemplateDetailContent = {
  title: '외주 80만원짜리를 5만원에',
  subtitle: '업종별 최적화 템플릿으로 바로 영업 시작',
  templates: [
    {
      id: 1,
      name: '인터넷/TV 가입 신청',
      icon: '🌐',
      description: '통신사별 요금제 선택, 설치 주소 입력 폼',
      mockupImage: '/images/template-internet.png',
    },
    {
      id: 2,
      name: '정수기/렌탈 상담 신청',
      icon: '💧',
      description: '제품별 옵션, 설치 희망일, 상담 시간 선택',
      mockupImage: '/images/template-rental.png',
    },
    {
      id: 3,
      name: '보험 상담 신청',
      icon: '🛡',
      description: '보험 유형, 가입 목적, 상담 가능 시간',
      mockupImage: '/images/template-insurance.png',
    },
    {
      id: 4,
      name: '범용 가입상품',
      icon: '📱',
      description: '모든 가입상품에 사용 가능한 기본 템플릿',
      mockupImage: '/images/template-general.png',
    },
  ],
  pricing: [
    {
      item: '기본 템플릿',
      price: '₩50,000 ~ ₩100,000',
      description: '원페이지 완성 + 호스팅 + 1회 수정',
    },
    {
      item: '+ 구글시트 연동',
      price: '₩10,000 ~ ₩20,000',
      description: '폼 응답 → 스프레드시트 자동 저장',
    },
    {
      item: '+ 이미지 커스텀',
      price: '₩20,000 ~ ₩30,000',
      description: '로고/색상/문구 맞춤 제작',
    },
  ],
  deliveryInfo: '주문 후 1~2일 안에 완성. 링크 하나로 바로 영업 시작.',
}

// -----------------------------------------------------------------------------
// 섹션 5: 구독 서비스 상세
// 심리 패턴: 소유욕 ("카톡 알림" = 놓치지 않는다)
// -----------------------------------------------------------------------------

export interface SubscriptionFeature {
  id: number
  title: string
  description: string
  icon: string
  benefit: string
}

export interface SubscriptionDetailContent {
  title: string
  subtitle: string
  features: SubscriptionFeature[]
}

export const subscriptionDetailContent: SubscriptionDetailContent = {
  title: '영업이 바쁜 당신을 위한 관리 도구',
  subtitle: '템플릿과의 차별점, 본격적인 영업 관리 기능',
  features: [
    {
      id: 1,
      title: '카카오톡 실시간 알림',
      description:
        '고객이 폼 작성하면 즉시 카톡으로 알림.\n구글시트 열어볼 필요 없이, 바로 전화하세요.',
      icon: '📱',
      benefit: '영업 기회를 놓치지 않습니다',
    },
    {
      id: 2,
      title: '고객에게 자동 접수 확인 메시지',
      description:
        '신청한 고객에게 카카오톡으로 접수 확인 메시지가 자동 전송됩니다.\n"이 업체 제대로 된 곳이네" — 고객 신뢰도가 올라갑니다.',
      icon: '✉️',
      benefit: '전문성 있는 인상을 줍니다',
    },
    {
      id: 3,
      title: 'Admin 대시보드',
      description:
        '모든 신청 내역을 한 화면에서 관리.\n처리 상태 체크, 메모 추가, 엑셀 다운로드까지.',
      icon: '📊',
      benefit: '고객 관리가 체계적으로 됩니다',
    },
  ],
}

// -----------------------------------------------------------------------------
// 섹션 6: 가격표
// 심리 패턴: 프로 플랜 강조 + 템플릿→구독 할인 (업셀 유도)
// -----------------------------------------------------------------------------

export interface TemplatePricingItem {
  item: string
  price: string
}

export interface SubscriptionPlan {
  id: number
  name: string
  price: string
  isRecommended: boolean
  features: {
    forms: string
    responses: string
    kakaoNotification: boolean
    kakaoCustomerMessage: boolean
    excelDownload: boolean
    googleSheetSync: boolean
    branding: boolean
    adminDashboard: string
    teamMembers: string
  }
}

export interface PricingContent {
  title: string
  subtitle: string
  templatePricing: {
    title: string
    description: string
    items: TemplatePricingItem[]
  }
  subscriptionPricing: {
    title: string
    description: string
    plans: SubscriptionPlan[]
  }
  conversionOffer: string
  bottomNote: string
}

export const pricingContent: PricingContent = {
  title: '커피 한 잔 가격으로 시작하세요',
  subtitle: '템플릿과 구독, 상황에 맞게 선택하세요',
  templatePricing: {
    title: '템플릿 (1회 구매)',
    description: '빠르게 하나만 필요한 분에게 추천',
    items: [
      { item: '기본 템플릿', price: '₩50,000 ~ ₩100,000' },
      { item: '+ 구글시트 연동', price: '₩10,000 ~ ₩20,000' },
      { item: '+ 이미지 커스텀', price: '₩20,000 ~ ₩30,000' },
    ],
  },
  subscriptionPricing: {
    title: '구독 서비스 (월 과금)',
    description: '본격적으로 영업하는 분에게 추천',
    plans: [
      {
        id: 1,
        name: '무료체험',
        price: '0원/7일',
        isRecommended: false,
        features: {
          forms: '1개',
          responses: '30건',
          kakaoNotification: true,
          kakaoCustomerMessage: false,
          excelDownload: true,
          googleSheetSync: false,
          branding: false,
          adminDashboard: '기본',
          teamMembers: '✕',
        },
      },
      {
        id: 2,
        name: '스타터',
        price: '₩9,900/월',
        isRecommended: false,
        features: {
          forms: '3개',
          responses: '200건',
          kakaoNotification: true,
          kakaoCustomerMessage: false,
          excelDownload: true,
          googleSheetSync: false,
          branding: false,
          adminDashboard: '기본',
          teamMembers: '✕',
        },
      },
      {
        id: 3,
        name: '프로',
        price: '₩29,900/월',
        isRecommended: true,
        features: {
          forms: '무제한',
          responses: '무제한',
          kakaoNotification: true,
          kakaoCustomerMessage: true,
          excelDownload: true,
          googleSheetSync: true,
          branding: true,
          adminDashboard: '고급',
          teamMembers: '✕',
        },
      },
      {
        id: 4,
        name: '팀',
        price: '₩59,900/월',
        isRecommended: false,
        features: {
          forms: '무제한',
          responses: '무제한',
          kakaoNotification: true,
          kakaoCustomerMessage: true,
          excelDownload: true,
          googleSheetSync: true,
          branding: true,
          adminDashboard: '고급',
          teamMembers: '5명',
        },
      },
    ],
  },
  conversionOffer: '템플릿 구매 고객은 구독 전환 시 첫 달 50% 할인',
  bottomNote: '카드 등록 없이 시작 · 언제든 해지 가능',
}

// -----------------------------------------------------------------------------
// 섹션 7: 작동 방식
// 심리 패턴: 3단계 플로우로 단순화 ("나도 할 수 있겠다")
// -----------------------------------------------------------------------------

export interface FlowStep {
  step: number
  title: string
  description: string
}

export interface HowItWorksContent {
  title: string
  subtitle: string
  templateFlow: {
    title: string
    steps: FlowStep[]
  }
  subscriptionFlow: {
    title: string
    steps: FlowStep[]
  }
}

export const howItWorksContent: HowItWorksContent = {
  title: '시작하는 건 간단합니다',
  subtitle: '복잡한 과정 없이 3단계로 완성',
  templateFlow: {
    title: '템플릿 구매 플로우',
    steps: [
      {
        step: 1,
        title: '업종 선택',
        description: '파는 상품을 알려주세요',
      },
      {
        step: 2,
        title: '정보 전달',
        description: '로고, 연락처, 원하는 문구',
      },
      {
        step: 3,
        title: '링크 수령',
        description: '1~2일 안에 완성본 전달',
      },
    ],
  },
  subscriptionFlow: {
    title: '구독 서비스 플로우',
    steps: [
      {
        step: 1,
        title: '가입',
        description: '30초면 끝',
      },
      {
        step: 2,
        title: '폼 만들기',
        description: '템플릿 선택하고 수정하면 완성',
      },
      {
        step: 3,
        title: '공유',
        description: '링크 복사해서 블로그/SNS에 붙이기',
      },
    ],
  },
}

// -----------------------------------------------------------------------------
// 섹션 8: 화면 미리보기
// 심리 패턴: Before/After 비교 (욕구 강화)
// -----------------------------------------------------------------------------

export interface ScreenPreviewContent {
  title: string
  subtitle: string
  before: {
    label: string
    image: string
    caption: string
  }
  after: {
    label: string
    image: string
    caption: string
  }
  bottomCopy: string
}

export const screenPreviewContent: ScreenPreviewContent = {
  title: '고객이 보게 되는 화면입니다',
  subtitle: '깔끔한 디자인 = 고객 신뢰',
  before: {
    label: 'Before',
    image: '/images/screen-before.png',
    caption: '구글폼 - "이거 사기 아니에요?"',
  },
  after: {
    label: 'After',
    image: '/images/screen-after.png',
    caption: '우리 폼 - "제대로 된 업체네"',
  },
  bottomCopy:
    '구글폼 링크 보내면 "사기 아니에요?" 라고 묻던 고객이,\n이 폼을 보면 "제대로 된 업체네" 라고 느낍니다.',
}

// -----------------------------------------------------------------------------
// 섹션 9: 고객 후기
// 심리 패턴: 사회적 증거 (업종별 + 템플릿→구독 전환 스토리)
// -----------------------------------------------------------------------------

export interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
  type: 'template' | 'conversion' | 'subscription'
}

export interface TestimonialsContent {
  title: string
  subtitle: string
  testimonials: Testimonial[]
}

export const testimonialsContent: TestimonialsContent = {
  title: '이미 영업 현장에서 쓰고 있습니다',
  subtitle: '나 같은 사람들이 실제로 사용하고 있습니다',
  testimonials: [
    {
      id: 1,
      quote:
        '외주 맡기면 80만원인데 7만원에 끝났어요.\n다음날 바로 링크 받아서 블로그에 달았더니 그날부터 신청이 들어왔습니다.',
      author: '김OO',
      role: '인터넷/TV 대리점 3년차',
      type: 'template',
    },
    {
      id: 2,
      quote:
        '처음에 템플릿 샀다가, 카톡 알림이 너무 편해서 구독으로 바꿨어요.\n신청 들어오면 바로 전화하니까 계약률이 확 올랐습니다.',
      author: '박OO',
      role: '정수기 렌탈 영업',
      type: 'conversion',
    },
    {
      id: 3,
      quote:
        '고객한테 접수 확인 카톡이 자동으로 가니까\n"여기 믿을만하다"는 반응이 늘었어요. 이전엔 상상도 못한 기능.',
      author: '이OO',
      role: '보험 설계사',
      type: 'subscription',
    },
  ],
}

// -----------------------------------------------------------------------------
// 섹션 10: FAQ
// 심리 패턴: 리스크 제거 (마지막 의심 해소)
// -----------------------------------------------------------------------------

export interface FAQItem {
  id: number
  question: string
  answer: string
}

export interface FAQContent {
  title: string
  subtitle: string
  faqs: FAQItem[]
}

export const faqContent: FAQContent = {
  title: '자주 묻는 질문',
  subtitle: '궁금하신 점을 해결해드립니다',
  faqs: [
    {
      id: 1,
      question: 'IT를 잘 몰라도 되나요?',
      answer:
        '템플릿은 저희가 만들어드리니까 아무것도 안 하셔도 됩니다.\n구독 서비스도 템플릿 선택하고 수정하면 끝이에요.',
    },
    {
      id: 2,
      question: '고객 개인정보는 안전한가요?',
      answer: 'SSL 암호화 적용, 개인정보 보호법 준수. 국내 서버 저장.',
    },
    {
      id: 3,
      question: '네이버 블로그/카페에도 넣을 수 있나요?',
      answer: '네, 링크 형태라 어디든 됩니다. 블로그, 카페, 인스타, 카톡 모두.',
    },
    {
      id: 4,
      question: '템플릿 사고 나중에 구독으로 바꿀 수 있나요?',
      answer: '네, 언제든 가능합니다. 구독 전환 시 첫 달 50% 할인 혜택도 있어요.',
    },
    {
      id: 5,
      question: '구글시트 연동은 어떻게 되나요?',
      answer:
        '템플릿 구매 시 ₩10,000~₩20,000 추가로 셋업해드립니다.\n구독 프로 플랜에는 기본 포함이에요.',
    },
    {
      id: 6,
      question: '무료 체험 후 자동 결제되나요?',
      answer: '아니요. 카드 등록 없이 시작하기 때문에 자동결제 없습니다.',
    },
  ],
}

// -----------------------------------------------------------------------------
// 섹션 11: 최종 CTA
// 심리 패턴: 손실 회피 ("다음 고객을 놓치기 전에")
// -----------------------------------------------------------------------------

export interface FinalCTAContent {
  headline: string
  subheadline: string
  cta: {
    primary: { text: string; href: string }
    secondary: { text: string; href: string }
  }
  trustSignals: string[]
}

export const finalCTAContent: FinalCTAContent = {
  headline: '다음 고객을 놓치기 전에',
  subheadline: '템플릿 하나면 내일부터 영업이 달라집니다',
  cta: {
    primary: { text: '템플릿 주문하기 →', href: '#' },
    secondary: { text: '구독 무료 체험 →', href: '#' },
  },
  trustSignals: ['1~2일 내 완성', '카드 등록 불필요', '100% 환불 보장'],
}

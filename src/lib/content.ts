// =============================================================================
// Form 서비스 랜딩페이지 콘텐츠
// 소비심리학 패턴 적용: PAS, 앵커링, 손실 회피, 사회적 증거
// =============================================================================

// -----------------------------------------------------------------------------
// 섹션 1: Hero
// 심리 패턴: 질문형 헤드라인 (문제 인식) + CTA 2개 (선택지 제공)
// -----------------------------------------------------------------------------

export interface HeroContent {
  headline: string;
  subheadline: string;
  cta: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
  };
}

export const heroContent: HeroContent = {
  headline: "온라인 영업 채널을 열어 보세요",
  subheadline:
    "인터넷, TV, 렌탈, 보험 영업에 맞춘 전용 신청폼.\n블로그, SNS, 광고 어디든 연결되는 나만의 상담 채널을 만드세요.",
  cta: {
    primary: { text: "템플릿 둘러보기", href: "#template-detail" },
    secondary: { text: "묻는 체험하기", href: "#subscription-detail" },
  },
};

// -----------------------------------------------------------------------------
// 섹션 2: 문제 공감
// 심리 패턴: PAS 공식 (Problem → Agitate)
// -----------------------------------------------------------------------------

export interface ProblemScenario {
  id: number;
  title: string;
  icon: string;
  description: string;
}

export interface ProblemContent {
  title: string;
  subtitle: string;
  scenarios: ProblemScenario[];
}

export const problemContent: ProblemContent = {
  title: "혹시, 이런 고민 하고 계신가요?",
  subtitle: "온라인 영업을 시작하고 싶지만 막막한 순간들",
  scenarios: [
    {
      id: 1,
      title: "플랫폼에 입점하고 싶지 않아요",
      icon: "💬",
      description:
        "플랫폼 수수료가 부담스럽고, 가입상품은 입점이 어렵습니다.\n독립적인 채널이 필요합니다.",
    },
    {
      id: 2,
      title: "구글폼은 신뢰가 안 가요",
      icon: "📋",
      description:
        '링크를 본 뒤 "이거 믿어도 되나요?"라는 반응이 나옵니다.\n전문적인 인상이 필요합니다.',
    },
    {
      id: 3,
      title: "외주는 비싸고 번거로워요",
      icon: "💸",
      description:
        "제대로 만들려니 견적이 80만원 안팎.\n상품이 바뀔 때마다 수정이 어렵습니다.",
    },
  ],
};

// -----------------------------------------------------------------------------
// 섹션 3: 해결책 선택
// 심리 패턴: 선택지 제공 ("살까 말까" → "어떤 걸 살까")
// -----------------------------------------------------------------------------

export interface SolutionOption {
  id: number;
  type: "template" | "subscription";
  icon: string;
  title: string;
  subtitle: string;
  features: string[];
  priceText: string;
  cta: { text: string; href: string };
}

export interface SolutionChoiceContent {
  title: string;
  subtitle: string;
  options: SolutionOption[];
  helpText: string;
}

export const solutionChoiceContent: SolutionChoiceContent = {
  title: "상황에 맞게 선택하세요",
  subtitle: "템플릿으로 빠르게 시작하거나, 구독으로 직접 운영하세요",
  options: [
    {
      id: 1,
      type: "template",
      icon: "💼",
      title: "템플릿 구매",
      subtitle: "만들어 드립니다",
      features: [
        "업종별 최적화 원페이지",
        "모바일 반응형 디자인",
        "링크 바로 사용",
        "1회 수정 포함",
        "호스팅 포함",
      ],
      priceText: "₩150,000 (1회)",
      cta: { text: "템플릿 보기", href: "#template-detail" },
    },
    {
      id: 2,
      type: "subscription",
      icon: "🚀",
      title: "구독 서비스",
      subtitle: "직접 관리하세요",
      features: [
        "폼 무제한 생성/수정",
        "카카오톡 실시간 알림",
        "고객 자동 접수 메시지",
        "Admin 대시보드",
        "구글시트 자동 연동",
      ],
      priceText: "월 ₩9,900~",
      cta: { text: "묻는 체험하기", href: "#subscription-detail" },
    },
  ],
  helpText:
    "잘 모르겠다면 템플릿부터 시작하세요. 나중에 구독으로 전환할 수 있습니다.",
};

// -----------------------------------------------------------------------------
// 섹션 4: 템플릿 상세
// 심리 패턴: 앵커링 (외주 80만원 vs 템플릿 5만원)
// -----------------------------------------------------------------------------

export interface TemplateItem {
  id: number;
  name: string;
  icon: string;
  description: string;
  mockupImage: string;
}

export interface TemplatePricing {
  item: string;
  price: string;
  description: string;
}

export interface TemplateDetailContent {
  title: string;
  subtitle: string;
  templates: TemplateItem[];
  pricing: TemplatePricing[];
  deliveryInfo: string;
}

export const templateDetailContent: TemplateDetailContent = {
  title: "외주 80만원짜리를 15만원에",
  subtitle: "가입상품 영업에 맞춘 템플릿으로 전문적인 상담 채널을 만드세요",
  templates: [
    {
      id: 1,
      name: "인터넷/TV 가입 신청",
      icon: "🌐",
      description: "단독/결합 선택, 요금제 비교, 설치 정보 접수에 최적화된 폼",
      mockupImage: "/images/landing/templates/template-internet.png",
    },
    {
      id: 2,
      name: "정수기/렌탈 상담 신청",
      icon: "💧",
      description: "제품 옵션, 사은품 선택, 설치 희망일, 상담 시간을 한 번에 받는 폼",
      mockupImage: "/images/landing/templates/template-rental.png",
    },
    {
      id: 3,
      name: "보험 상담 신청",
      icon: "🛡",
      description: "보험 유형과 가입 목적, 상담 가능 시간을 명확히 수집",
      mockupImage: "/images/landing/templates/template-insurance.png",
    },
    {
      id: 4,
      name: "범용 가입상품",
      icon: "📱",
      description: "여러 가입상품에 공통으로 적용 가능한 기본 템플릿",
      mockupImage: "/images/landing/templates/template-general.png",
    },
  ],
  pricing: [
    {
      item: "기본 템플릿",
      price: "₩150,000",
      description: "원페이지 완성본 + 호스팅 + 1회 수정 포함",
    },
    {
      item: "+ 추가 수정",
      price: "₩30,000~ /회",
      description: "상품/문구 변경 시 수정 비용",
    },
    {
      item: "+ 구글시트 연동",
      price: "₩50,000",
      description: "폼 응답을 스프레드시트로 자동 저장",
    },
  ],
  deliveryInfo:
    "주문 후 1~2일 내 완성본 전달. 링크 하나로 블로그, SNS, 광고에 바로 연결됩니다.",
};

// -----------------------------------------------------------------------------
// 섹션 5: 구독 서비스 상세
// 심리 패턴: 소유욕 ("카톡 알림" = 놓치지 않는다)
// -----------------------------------------------------------------------------

export interface SubscriptionFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
  benefit: string;
}

export interface SubscriptionDetailContent {
  title: string;
  subtitle: string;
  features: SubscriptionFeature[];
}

export const subscriptionDetailContent: SubscriptionDetailContent = {
  title: "영업 속도를 올리는 운영 도구",
  subtitle: "신청 접수부터 후속 대응까지, 한 번에 관리하세요",
  features: [
    {
      id: 1,
      title: "카카오톡 실시간 알림",
      description:
        "고객이 폼을 제출하면 즉시 카카오톡으로 알림이 도착합니다.\n확인 지연 없이 바로 연락을 시작하세요.",
      icon: "📱",
      benefit: "신규 상담을 놓치지 않습니다",
    },
    {
      id: 2,
      title: "고객에게 자동 접수 확인 메시지",
      description:
        "신청 직후 고객에게 접수 확인 메시지가 자동 발송됩니다.\n응답 대기 불안을 줄이고 신뢰를 높입니다.",
      icon: "✉️",
      benefit: "첫 응답 경험이 좋아집니다",
    },
    {
      id: 3,
      title: "Admin 대시보드",
      description:
        "신청 내역을 한 화면에서 확인하고 상태를 관리합니다.\n메모, 검색, 엑셀 다운로드까지 지원합니다.",
      icon: "📊",
      benefit: "상담 관리가 체계화됩니다",
    },
  ],
};

// -----------------------------------------------------------------------------
// 섹션 6: 가격표
// 심리 패턴: 프로 플랜 강조 + 템플릿→구독 할인 (업셀 유도)
// -----------------------------------------------------------------------------

export interface TemplatePricingItem {
  item: string;
  price: string;
}

export interface SubscriptionPlan {
  id: number;
  name: string;
  price: string;
  isRecommended: boolean;
  features: {
    forms: string;
    responses: string;
    kakaoNotification: boolean;
    kakaoCustomerMessage: boolean;
    excelDownload: boolean;
    googleSheetSync: boolean;
    branding: boolean;
    adminDashboard: string;
    teamMembers: string;
  };
}

export interface PricingContent {
  title: string;
  subtitle: string;
  templatePricing: {
    title: string;
    description: string;
    items: TemplatePricingItem[];
  };
  subscriptionPricing: {
    title: string;
    description: string;
    plans: SubscriptionPlan[];
  };
  conversionOffer: string;
  bottomNote: string;
}

export const pricingContent: PricingContent = {
  title: "투명한 가격으로 시작하세요",
  subtitle: "필요한 방식으로 선택해 운영하세요",
  templatePricing: {
    title: "템플릿 (1회 구매)",
    description: "단건 제작이 필요한 분에게 추천",
    items: [
      { item: "기본 템플릿", price: "₩150,000" },
      { item: "+ 추가 수정", price: "₩30,000~ /회" },
      { item: "+ 구글시트 연동", price: "₩50,000" },
    ],
  },
  subscriptionPricing: {
    title: "구독 서비스 (월 과금)",
    description: "지속적으로 상담을 운영하는 분에게 추천",
    plans: [
      {
        id: 1,
        name: "무료체험",
        price: "0원/7일",
        isRecommended: false,
        features: {
          forms: "1개",
          responses: "30건",
          kakaoNotification: true,
          kakaoCustomerMessage: false,
          excelDownload: true,
          googleSheetSync: false,
          branding: false,
          adminDashboard: "기본",
          teamMembers: "✕",
        },
      },
      {
        id: 2,
        name: "스타터",
        price: "₩9,900/월",
        isRecommended: false,
        features: {
          forms: "3개",
          responses: "200건",
          kakaoNotification: true,
          kakaoCustomerMessage: false,
          excelDownload: true,
          googleSheetSync: false,
          branding: false,
          adminDashboard: "기본",
          teamMembers: "✕",
        },
      },
      {
        id: 3,
        name: "프로",
        price: "₩29,900/월",
        isRecommended: true,
        features: {
          forms: "무제한",
          responses: "무제한",
          kakaoNotification: true,
          kakaoCustomerMessage: true,
          excelDownload: true,
          googleSheetSync: true,
          branding: true,
          adminDashboard: "고급",
          teamMembers: "✕",
        },
      },
      {
        id: 4,
        name: "팀",
        price: "₩59,900/월",
        isRecommended: false,
        features: {
          forms: "무제한",
          responses: "무제한",
          kakaoNotification: true,
          kakaoCustomerMessage: true,
          excelDownload: true,
          googleSheetSync: true,
          branding: true,
          adminDashboard: "고급",
          teamMembers: "5명",
        },
      },
    ],
  },
  conversionOffer:
    "템플릿 구매 고객은 구독 전환 시 첫 달 50% 할인을 제공합니다",
  bottomNote: "카드 등록 없이 시작 · 원할 때 해지 가능",
};

// -----------------------------------------------------------------------------
// 섹션 7: 작동 방식
// 심리 패턴: 3단계 플로우로 단순화 ("나도 할 수 있겠다")
// -----------------------------------------------------------------------------

export interface FlowStep {
  step: number;
  title: string;
  description: string;
}

export interface HowItWorksContent {
  title: string;
  subtitle: string;
  templateFlow: {
    title: string;
    steps: FlowStep[];
  };
  subscriptionFlow: {
    title: string;
    steps: FlowStep[];
  };
}

export const howItWorksContent: HowItWorksContent = {
  title: "도입은 3단계면 충분합니다",
  subtitle: "복잡한 설정 없이 바로 시작하세요",
  templateFlow: {
    title: "템플릿 도입 절차",
    steps: [
      {
        step: 1,
        title: "업종 선택",
        description: "판매 상품과 상담 목적을 선택",
      },
      {
        step: 2,
        title: "정보 전달",
        description: "로고, 연락처, 원하는 문구 전달",
      },
      {
        step: 3,
        title: "링크 수령",
        description: "1~2일 내 완성본 수령 후 바로 공유",
      },
    ],
  },
  subscriptionFlow: {
    title: "구독 시작 절차",
    steps: [
      {
        step: 1,
        title: "가입",
        description: "30초 내 기본 설정 완료",
      },
      {
        step: 2,
        title: "폼 만들기",
        description: "템플릿 선택 후 필요한 항목만 수정",
      },
      {
        step: 3,
        title: "공유",
        description: "생성된 링크를 블로그/SNS/메신저에 배포",
      },
    ],
  },
};

// -----------------------------------------------------------------------------
// 섹션 8: 화면 미리보기
// 심리 패턴: Before/After 비교 (욕구 강화)
// -----------------------------------------------------------------------------

export interface ScreenPreviewContent {
  title: string;
  subtitle: string;
  before: {
    label: string;
    image: string;
    caption: string;
  };
  after: {
    label: string;
    image: string;
    caption: string;
  };
  bottomCopy: string;
}

export const screenPreviewContent: ScreenPreviewContent = {
  title: "고객이 실제로 보는 신청 화면",
  subtitle: "첫 화면 신뢰가 상담 전환을 좌우합니다",
  before: {
    label: "Before",
    image: "/images/landing/preview/screen-before.png",
    caption: '구글폼 - "이 링크, 괜찮은 건가요?"',
  },
  after: {
    label: "After",
    image: "/images/landing/preview/screen-after.png",
    caption: '전용 폼 - "믿고 신청해도 되겠네요"',
  },
  bottomCopy:
    "같은 상담이라도 화면 인상은 다릅니다.\n신뢰감 있는 신청폼이 응답률과 상담 연결을 높여줍니다.",
};

// -----------------------------------------------------------------------------
// 섹션 9: 고객 후기
// 심리 패턴: 사회적 증거 (업종별 + 템플릿→구독 전환 스토리)
// -----------------------------------------------------------------------------

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  type: "template" | "conversion" | "subscription";
}

export interface TestimonialsContent {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

export const testimonialsContent: TestimonialsContent = {
  title: "현장에서 이미 사용 중입니다",
  subtitle: "가입상품 영업 담당자들의 실제 사용 후기",
  testimonials: [
    {
      id: 1,
      quote:
        "외주를 고민하다 템플릿으로 시작했는데 비용 부담이 크게 줄었습니다.\n다음날 링크를 받아 바로 상담을 받기 시작했어요.",
      author: "김OO",
      role: "인터넷/TV 대리점 3년차",
      type: "template",
    },
    {
      id: 2,
      quote:
        "처음엔 템플릿으로 시작했고, 알림이 필요해 구독으로 전환했습니다.\n신청 즉시 연락하니 상담 연결 속도가 확실히 빨라졌습니다.",
      author: "박OO",
      role: "정수기 렌탈 영업",
      type: "conversion",
    },
    {
      id: 3,
      quote:
        "접수 확인 메시지가 자동으로 나가니 고객 반응이 훨씬 안정적입니다.\n처음 상담 단계에서 신뢰를 얻기 쉬워졌어요.",
      author: "이OO",
      role: "보험 설계사",
      type: "subscription",
    },
  ],
};

// -----------------------------------------------------------------------------
// 섹션 10: FAQ
// 심리 패턴: 리스크 제거 (마지막 의심 해소)
// -----------------------------------------------------------------------------

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQContent {
  title: string;
  subtitle: string;
  faqs: FAQItem[];
}

export const faqContent: FAQContent = {
  title: "자주 묻는 질문",
  subtitle: "도입 전에 많이 물어보는 내용을 정리했습니다",
  faqs: [
    {
      id: 1,
      question: "IT를 잘 몰라도 되나요?",
      answer:
        "템플릿은 필요한 정보만 전달해주시면 제작해드립니다.\n구독 서비스도 템플릿을 선택해 항목만 수정하면 바로 사용할 수 있어요.",
    },
    {
      id: 2,
      question: "고객 개인정보는 안전한가요?",
      answer: "SSL 암호화 적용, 개인정보 보호법 준수. 국내 서버 저장.",
    },
    {
      id: 3,
      question: "네이버 블로그/카페에도 넣을 수 있나요?",
      answer:
        "네, 링크 형태라 어디든 넣을 수 있습니다. 블로그, 카페, 인스타, 카카오톡 모두 가능합니다.",
    },
    {
      id: 4,
      question: "템플릿 사고 나중에 구독으로 바꿀 수 있나요?",
      answer:
        "네, 언제든 가능합니다. 구독으로 전환하면 첫 달 50% 할인 혜택이 적용됩니다.",
    },
    {
      id: 5,
      question: "구글시트 연동은 어떻게 되나요?",
      answer:
        "템플릿 구매 시 ₩10,000~₩20,000 추가로 셋업해드립니다.\n구독 프로 플랜에는 기본 포함됩니다.",
    },
    {
      id: 6,
      question: "무료 체험 후 자동 결제되나요?",
      answer: "아니요. 카드 등록 없이 시작하므로 자동 결제되지 않습니다.",
    },
  ],
};

// -----------------------------------------------------------------------------
// 섹션 11: 최종 CTA
// 심리 패턴: 손실 회피 ("다음 고객을 놓치기 전에")
// -----------------------------------------------------------------------------

export interface FinalCTAContent {
  headline: string;
  subheadline: string;
  cta: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
  };
  trustSignals: string[];
}

export const finalCTAContent: FinalCTAContent = {
  headline: "다음 고객을 놓치기 전에",
  subheadline: "템플릿 하나면 내일부터 영업이 달라집니다",

  cta: {
    primary: { text: "템플릿 주문하기 →", href: "#" },
    secondary: { text: "구독 묻는 체험 →", href: "#" },
  },
  trustSignals: ["1~2일 내 완성", "카드 등록 불필요", "100% 환불 보장"],
};

export interface HeroContent {
  title: string
  subtitle: string
  cta: {
    primary: { text: string; href: string }
    secondary: { text: string; href: string }
  }
}

export interface Feature {
  id: number
  title: string
  icon: string
  description: string
  color: string
}

export interface ShowcaseItem {
  id: number
  title: string
  image: string
  tags: string[]
  description: string
}

export const heroContent: HeroContent = {
  title: 'Build the Future',
  subtitle: 'Revolutionary solutions for modern challenges with cutting-edge technology',
  cta: {
    primary: { text: 'Get Started', href: '#demo' },
    secondary: { text: 'Learn More', href: '#features' },
  },
}

export const features: Feature[] = [
  {
    id: 1,
    title: 'Lightning Fast',
    icon: '⚡',
    description: 'Optimized for speed and performance with modern web technologies',
    color: '#FFD700',
  },
  {
    id: 2,
    title: 'Secure',
    icon: '🔒',
    description: 'Enterprise-grade security protecting your data and privacy',
    color: '#4169E1',
  },
  {
    id: 3,
    title: 'Scalable',
    icon: '📈',
    description: 'Grows with your business from startup to enterprise',
    color: '#32CD32',
  },
  {
    id: 4,
    title: 'User-Friendly',
    icon: '✨',
    description: 'Intuitive interface designed for seamless user experience',
    color: '#FF69B4',
  },
]

export const showcaseItems: ShowcaseItem[] = [
  {
    id: 1,
    title: 'Project Alpha',
    image: '/images/showcase-1.jpg',
    tags: ['Design', 'Development'],
    description: 'A revolutionary approach to modern web applications',
  },
  {
    id: 2,
    title: 'Project Beta',
    image: '/images/showcase-2.jpg',
    tags: ['Innovation', 'Technology'],
    description: 'Pushing boundaries with cutting-edge solutions',
  },
  {
    id: 3,
    title: 'Project Gamma',
    image: '/images/showcase-3.jpg',
    tags: ['UI/UX', 'Interactive'],
    description: 'Crafting exceptional digital experiences',
  },
]

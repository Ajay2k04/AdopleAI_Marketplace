export type Product = {
  slug: string
  name: string
  type: string
  category: string
  short: string
  price: number
  compareAt?: number
  rating: number
  reviews: number
  badge?: string
  image: string
  accent?: string
  integrations?: string[]
  plan?: "Lifetime" | "Subscription" | "One-time"
  status?: "new" | "hot" | "ending"
  priceRange?: "under-50" | "50-100" | "100-plus"
}

export const products: Product[] = [
  {
    slug: "grigora",
    name: "Adople Voice Agent",
    type: "Document Search",
    category: "Software",
    short: "Use it to transforms static documents into dynamic conversations—upload PDFs or other files, ask questions ...",
    price: 59,
    compareAt: 299,
    rating: 5.0,
    reviews: 42,
    badge: "ADOPLE AI SELECT",
    image: "/image2.png",
    accent: "from-indigo-600 to-violet-600",
    integrations: ["WordPress", "Zapier"],
    plan: "Lifetime",
    status: "new",
    priceRange: "50-100",
  },
  {
    slug: "jodian",
    name: "SEC Analysis",
    type: "Audit support",
    category: "Software",
    short: "Use it to evaluate the financial status of your businesses based on key metrics, trends, and risk indicators...",
    price: 69,
    compareAt: 516,
    rating: 4.9,
    reviews: 73,
    badge: "ADOPLE AI SELECT",
    image: "/image7.png",
    accent: "from-sky-500 to-indigo-600",
    integrations: ["OpenAI", "Zapier"],
    plan: "Subscription",
    status: "new",
    priceRange: "50-100",
  },
  {
    slug: "restreamer",
    name: "Resume Analyzer",
    type: "Recruitment & HR",
    category: "Software",
    short: "Use this tool evaluates resumes against job descriptions, scoring candidates by relevance and fit. Recruiters can ...",
    price: 39,
    compareAt: 468,
    rating: 4.8,
    reviews: 156,
    badge: "ADOPLE AI SELECT",
    image: "/image10.png",
    accent: "from-purple-600 to-fuchsia-500",
    integrations: ["Meta Ads", "Google Ads"],
    plan: "Lifetime",
    status: "new",
    priceRange: "under-50",
  },
  {
    slug: "document-insights",
    name: "Document Insights",
    type: "Document Analysis",
    category: "Software",
    short: "Advanced AI-powered document analysis tool that extracts key insights, summarizes content, and identifies patterns in your documents...",
    price: 79,
    compareAt: 399,
    rating: 4.9,
    reviews: 128,
    badge: "ADOPLE AI SELECT",
    image: "/imgs.png",
    accent: "from-blue-600 to-indigo-600",
    integrations: ["PDF", "Word", "Google Docs"],
    plan: "Lifetime",
    status: "new",
    priceRange: "50-100",
  },
  {
    slug: "email-verifier",
    name: "Email Verifier",
    type: "Email Validation",
    category: "Software",
    short: "Comprehensive, high-performance email verification system that validates email addresses in real-time using multiple verification techniques...",
    price: 29,
    compareAt: 599,
    rating: 4.8,
    reviews: 89,
    badge: "ADOPLE AI SELECT",
    image: "/email-img.png",
    accent: "from-emerald-600 to-teal-600",
    integrations: ["API", "CSV", "SMTP"],
    plan: "Lifetime",
    status: "new",
    priceRange: "under-50",
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    type: "RAG Platform",
    category: "Software",
    short: "Comprehensive Retrieval-Augmented Generation (RAG) platform that combines document management, AI-powered chat, and knowledge base functionality with 40+ connectors...",
    price: 99,
    compareAt: 999,
    rating: 4.9,
    reviews: 156,
    badge: "ADOPLE AI SELECT",
    image: "/agent0.png",
    accent: "from-purple-600 to-indigo-600",
    integrations: ["OpenAI", "Google AI", "Mistral", "LangChain"],
    plan: "Lifetime",
    status: "new",
    priceRange: "50-100",
  },
]

"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { addToCart, type CartTier } from "@/app/lib/cart"
import ImageSlider from "@/components/ui/ImageSlider"

const THEME_KEY = "theme"

export default function AIAgentsPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const router = useRouter()
  
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem(THEME_KEY)) as "dark" | "light" | null
    if (saved) setTheme(saved)
  }, [])

  return (
    <main className={cn("min-h-screen", theme === "dark" ? "bg-[#0b0e0c] text-white" : "bg-white text-[#0b0e0c]")}>
      <Header theme={theme} />
      <Hero theme={theme} />
      <SectionContainer>
        <TrustBar />
        <FeatureAndVideo theme={theme} />
        <ImageSlider
          theme={theme}
          images={[
            { src: "/agent1.png", alt: "AI Agents Dashboard" },
            { src: "/agent2.png", alt: "RAG Platform Interface" },
            { src: "/agent3.png", alt: "Document Management" },
            { src: "/agent4.png", alt: "AI Chat Interface" },
            { src: "/agent1.png", alt: "40+ Connectors" },
            { src: "/agent3.png", alt: "Analytics Dashboard" },
          ]}
        />
      </SectionContainer>
      <PricingComparison theme={theme} />
      <StoryBlock theme={theme} />
      <Testimonials theme={theme} />
      <StoriesYoullLove theme={theme} />
      <InsiderKnowledge theme={theme} />
      <BottomCTA theme={theme} />
      <SiteFooter theme={theme} />
    </main>
  )
}

function Header({ theme }: { theme: "dark" | "light" }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur supports-[backdrop-filter]:bg-background/70",
        theme === "dark" ? "border-white/10 bg-black/40" : "border-black/10 bg-white/70",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6">
        <Link href="/" className="font-semibold tracking-wide">
          ADOPLE AI
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/deals" className="hover:text-foreground">
            Deals
          </Link>
          <a href="#pricing" className="hover:text-foreground">
            Pricing
          </a>
          <a href="#faq" className="hover:text-foreground">
            FAQ
          </a>
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <Link className="rounded-md px-3 py-2 text-sm font-medium bg-primary text-primary-foreground" href="/deals">
            Browse all deals
          </Link>
          <Link href="/cart" className="text-sm hover:underline">
            Cart
          </Link>
        </div>
      </div>
    </header>
  )
}

function Hero({ theme }: { theme: "dark" | "light" }) {
  return (
    <section
      className={cn(
        "mx-4 mt-6 rounded-2xl p-6 md:p-10",
        "bg-gradient-to-r from-purple-600 to-indigo-600",
        theme === "dark" ? "text-white" : "text-white",
      )}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-medium bg-black/30 rounded-full px-3 py-1 mb-4">
            <span className="opacity-90">ADOPLE AI SELECT</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-pretty">
            AI Agents - RAG Platform
          </h1>
          <p className="mt-4 text-sm md:text-base opacity-90 max-w-prose">
            Comprehensive Retrieval-Augmented Generation (RAG) platform that combines document management, 
            AI-powered chat, and knowledge base functionality with 40+ built-in connectors for seamless integration.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#pricing" className="rounded-full bg-yellow-400 text-black font-semibold px-5 py-2">
              Starting at $99
            </a>
            <Link href="/deals" className="rounded-full bg-white/15 hover:bg-white/25 text-white px-5 py-2">
              View all deals
            </Link>
          </div>
        </div>
        <div className="w-full aspect-video rounded-xl overflow-hidden ring-1 ring-white/20">
          <img
            src="/agent0.png"
            alt="AI Agents Platform"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

function SectionContainer({ children }: { children: React.ReactNode }) {
  return <section className="max-w-7xl mx-auto px-4 py-10">{children}</section>
}

function TrustBar() {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
      <span>ADOPLE AI</span>
      <span className="text-yellow-400">★★★★★</span>
      <span>4.9/5 from 156 reviews</span>
    </div>
  )
}

function FeatureAndVideo({ theme }: { theme: "dark" | "light" }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-pretty">
          Comprehensive RAG Platform Features
        </h2>
        <ul className="mt-6 space-y-4">
          <li className="border rounded-lg p-4">
            <details open>
              <summary className="font-medium cursor-pointer">🤖 AI Chat & Assistants</summary>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Real-time streaming chat with AI assistants</li>
                <li>Custom personas/assistants with specific behaviors</li>
                <li>Multi-model support (OpenAI, Google AI, Mistral)</li>
                <li>Context-aware responses with document citations</li>
                <li>Persistent chat history with search</li>
              </ul>
            </details>
          </li>
          <li className="border rounded-lg p-4">
            <details>
              <summary className="font-medium cursor-pointer">📚 Document Management</summary>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Multiple file formats (PDF, DOCX, PPTX, etc.)</li>
                <li>Advanced document processing and vector indexing</li>
                <li>Document sets and hierarchical organization</li>
                <li>OCR support for scanned documents</li>
                <li>Drag & drop file upload interface</li>
              </ul>
            </details>
          </li>
          <li className="border rounded-lg p-4">
            <details>
              <summary className="font-medium cursor-pointer">🔗 40+ Built-in Connectors</summary>
              <p className="mt-2 text-sm text-muted-foreground">
                Seamless integration with productivity tools (Notion, Confluence, Google Drive), 
                communication platforms (Slack, Discord, Teams), project management (Jira, Asana, ClickUp), 
                support systems (Zendesk, Freshdesk), development tools (GitHub, GitLab), and more.
              </p>
            </details>
          </li>
          <li className="border rounded-lg p-4">
            <details>
              <summary className="font-medium cursor-pointer">🔐 Enterprise Security</summary>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Multiple auth types (Basic, Google OAuth, Cloud)</li>
                <li>Role-based access control (Admin, Curator, Limited)</li>
                <li>API key management and rate limiting</li>
                <li>Multi-tenant architecture</li>
                <li>Secure data isolation</li>
              </ul>
            </details>
          </li>
          <li className="border rounded-lg p-4">
            <details>
              <summary className="font-medium cursor-pointer">🛠️ Advanced Features</summary>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Custom tool integration for AI assistants</li>
                <li>Advanced prompt engineering and management</li>
                <li>Configurable search parameters and ranking</li>
                <li>Real-time notification system</li>
                <li>Usage tracking and telemetry</li>
                <li>Slack bot integration</li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div
        className={cn(
          "rounded-xl p-3 ring-1",
          theme === "dark" ? "ring-white/10 bg-white/5" : "ring-black/10 bg-black/5",
        )}
      >
        <img
          src="/agent1.png"
          alt="RAG Platform Interface"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  )
}

function PricingComparison({ theme }: { theme: "dark" | "light" }) {
  const router = useRouter()
  const tiers = [
    { name: "License Tier 1" as CartTier, price: 99, credits: 0 },
    { name: "License Tier 2" as CartTier, price: 299, credits: 200 },
    { name: "License Tier 3" as CartTier, price: 599, credits: 400 },
    { name: "License Tier 4" as CartTier, price: 999, credits: 800 },
  ]
  const features = [
    "AI chat conversations per month",
    "Document storage (GB)",
    "Built-in connectors",
    "Custom AI assistants",
    "API access & rate limits",
    "Multi-tenant support",
    "Advanced analytics",
    "Priority support",
    "White-label options",
    "Custom integrations",
    "Slack bot integration",
    "Enterprise features",
  ]

  return (
    <section id="pricing" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Choose the plan that's right for you</h2>
      <div className={cn("rounded-xl overflow-x-auto ring-1", theme === "dark" ? "ring-white/10" : "ring-black/10")}>
        <table className="min-w-[800px] w-full text-sm">
          <thead>
            <tr>
              <th className="text-left p-4"></th>
              {tiers.map((t) => (
                <th key={t.name} className="p-4 text-left">
                  <div className="text-sm">{t.name}</div>
                  <div className="text-2xl font-semibold">${t.price}</div>
                  <a
                    href="http://agent.adople.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 rounded-full bg-yellow-400 text-black font-semibold px-4 py-1.5 inline-block text-center hover:bg-yellow-500 transition-colors"
                  >
                    Buy now
                  </a>
                  <div className="text-xs mt-1 opacity-70">Lifetime access</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((f, i) => (
              <tr key={f} className={i % 2 ? "bg-black/5 dark:bg-white/5" : undefined}>
                <td className="p-3 whitespace-pre-wrap">{f}</td>
                {tiers.map((t, idx) => (
                  <td key={idx} className="p-3">
                    {renderFeatureValue(f, t)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground mt-4">
        Deal terms & conditions. Lifetime access. Ability to upgrade between license tiers within 60 days of purchase.
      </p>
    </section>
  )
}

function renderFeatureValue(name: string, t: { price: number; credits: number }) {
  switch (name) {
    case "AI chat conversations per month":
      return t.credits === 0 ? "1,000" : "Unlimited"
    case "Document storage (GB)":
      return t.credits === 0 ? "10" : t.credits >= 200 ? "100" : t.credits >= 400 ? "500" : "1,000"
    case "Built-in connectors":
      return t.credits === 0 ? "10" : "40+"
    case "Custom AI assistants":
      return t.credits >= 200 ? <span className="text-emerald-500">✓</span> : "✗"
    case "API access & rate limits":
      return t.credits >= 200 ? "1000/min" : "100/min"
    case "Multi-tenant support":
      return t.credits >= 400 ? <span className="text-emerald-500">✓</span> : "✗"
    case "Advanced analytics":
      return t.credits >= 400 ? <span className="text-emerald-500">✓</span> : "✗"
    case "Priority support":
      return t.credits >= 400 ? <span className="text-emerald-500">✓</span> : "✗"
    case "White-label options":
      return t.credits >= 800 ? <span className="text-emerald-500">✓</span> : "✗"
    case "Custom integrations":
      return t.credits >= 800 ? <span className="text-emerald-500">✓</span> : "✗"
    case "Slack bot integration":
      return t.credits >= 800 ? <span className="text-emerald-500">✓</span> : "✗"
    case "Enterprise features":
      return t.credits >= 800 ? <span className="text-emerald-500">✓</span> : "✗"
    default:
      return <span className="text-emerald-500">✓</span>
  }
}

function StoryBlock({ theme }: { theme: "dark" | "light" }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-[280px,1fr] gap-8">
      <aside
        className={cn(
          "rounded-xl p-4 ring-1",
          theme === "dark" ? "ring-white/10 bg-white/5" : "ring-black/10 bg-black/5",
        )}
      >
        <div className="text-sm">Founded March 1, 2024</div>
        <div className="mt-3 text-sm">San Francisco, United States</div>
        <div className="mt-3 text-sm">Team size: 25–50</div>
        <div className="mt-3 text-sm">Funding: Series B</div>
        <a className="mt-4 inline-block text-primary underline" href="https://ai-agents.ai/">
          ai-agents.ai
        </a>
      </aside>
      <article>
        <h3 className="text-xl md:text-2xl font-semibold mb-3">Revolutionizing knowledge management with AI</h3>
        <p className="text-muted-foreground">
          AI Agents was built to solve the critical challenge of information overload and knowledge management in the enterprise. 
          By combining advanced Retrieval-Augmented Generation (RAG) technology with comprehensive document management and 
          40+ built-in connectors, we've created a platform that transforms how organizations access, process, and utilize 
          their knowledge. Our multi-tenant architecture and enterprise-grade security make it suitable for teams of all sizes, 
          from startups to Fortune 500 companies.
        </p>
      </article>
    </section>
  )
}

function Testimonials({ theme }: { theme: "dark" | "light" }) {
  const items = [
    { title: "AI Agents transformed our knowledge management", name: "Sarah Johnson", date: "Mar 15, 2025" },
    { title: "The 40+ connectors are game-changing", name: "Michael Chen", date: "Mar 12, 2025" },
    { title: "Perfect for enterprise document management", name: "Emily Rodriguez", date: "Mar 10, 2025" },
    { title: "RAG-powered responses are incredibly accurate", name: "David Thompson", date: "Mar 8, 2025" },
    { title: "Multi-tenant architecture works flawlessly", name: "Lisa Park", date: "Mar 5, 2025" },
    { title: "Best investment for AI-powered knowledge base", name: "James Wilson", date: "Mar 3, 2025" },
  ]
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h3 className="text-2xl font-semibold mb-6">See what customers are saying</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <div
            key={i}
            className={cn(
              "rounded-xl p-4 ring-1",
              theme === "dark" ? "ring-white/10 bg-white/5" : "ring-black/10 bg-black/5",
            )}
          >
            <div className="text-yellow-400">★★★★★</div>
            <h4 className="mt-2 font-medium">{t.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              {i % 2
                ? "The platform's ability to connect with all our existing tools has revolutionized our workflow."
                : "AI Agents has become the central hub for all our knowledge management needs."}
            </p>
            <div className="mt-4 text-xs text-muted-foreground">
              {t.date} — {t.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function StoriesYoullLove({ theme }: { theme: "dark" | "light" }) {
  const items = [
    { title: "How to Build an Enterprise Knowledge Base", date: "Mar 20, 2025" },
    { title: "NEW FEATURE — Advanced RAG Capabilities", date: "Mar 18, 2025" },
    { title: "The Complete Guide to AI-Powered Document Management", date: "Mar 15, 2025" },
  ]
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h3 className="text-2xl font-semibold">Stories you'll love</h3>
      <div className="mt-5 grid md:grid-cols-3 gap-6">
        {items.map((s, i) => (
          <div
            key={i}
            className={cn(
              "rounded-xl p-4 ring-1",
              theme === "dark" ? "ring-white/10 bg-white/5" : "ring-black/10 bg-black/5",
            )}
          >
            <div className="aspect-video rounded-lg bg-black/20 dark:bg-white/10 mb-3" />
            <h4 className="font-medium">{s.title}</h4>
            <div className="text-xs text-muted-foreground mt-1">{s.date}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function InsiderKnowledge({ theme }: { theme: "dark" | "light" }) {
  const faqs = [
    "How do I get started with AI Agents?",
    "What connectors are available?",
    "How does the RAG technology work?",
    "Can I create custom AI assistants?",
    "Do you support multi-tenant deployments?",
    "How secure is my data?",
    "What file formats are supported?",
    "Can I integrate with my existing tools?",
  ]
  return (
    <section id="faq" className="px-4 py-12">
      <div
        className={cn("max-w-7xl mx-auto rounded-2xl p-6 md:p-10", theme === "dark" ? "bg-[#0f1311]" : "bg-neutral-50")}
      >
        <h3 className="text-2xl font-semibold mb-4">Insider Knowledge</h3>
        <div className="flex items-center gap-2">
          <input
            placeholder="Search"
            className={cn(
              "w-full rounded-full px-4 py-2 ring-1 outline-none",
              theme === "dark"
                ? "bg-black/30 ring-white/10 placeholder:text-white/60"
                : "bg-white ring-black/10 placeholder:text-black/50",
            )}
          />
          <button className={cn("px-4 py-2 rounded-full text-sm", theme === "dark" ? "bg-white/10" : "bg-black/10")}>
            Search
          </button>
        </div>

        <div className="mt-6 flex items-center gap-3 text-sm">
          <span className="rounded-md px-3 py-1 font-medium ring-1 ring-black/10 dark:ring-white/10">FAQs</span>
          <span className="text-muted-foreground">Questions</span>
          <span className="text-muted-foreground">Reviews</span>
          <span className="text-muted-foreground">News & Updates</span>
        </div>

        <div className="mt-6 space-y-3">
          {faqs.map((q, i) => (
            <details
              key={i}
              className={cn(
                "rounded-lg p-4 ring-1",
                theme === "dark" ? "ring-white/10 bg-black/30" : "ring-black/10 bg-white",
              )}
            >
              <summary className="cursor-pointer font-medium">{q}</summary>
              <p className="mt-2 text-sm text-muted-foreground">
                {i % 2
                  ? "We support 40+ connectors including Notion, Slack, GitHub, Google Drive, and many more for seamless integration."
                  : "Sign up for free, upload your documents, and start building your AI-powered knowledge base immediately."}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function BottomCTA({ theme }: { theme: "dark" | "light" }) {
  return (
    <section className={cn("mt-6 py-14 text-center", theme === "light" ? "bg-[#0a0d0b]" : "bg-neutral-950 text-white")}>
      <div className="max-w-3xl mx-auto px-4">
        <h3 className="text-xl md:text-2xl font-semibold">Transform your knowledge management today</h3>
        <p className="mt-2 text-sm opacity-80">Powered by advanced RAG technology, just connect and chat.</p>
        <a href="http://agent.adople.in/" target="_blank" rel="noopener noreferrer" className="inline-block mt-5 rounded-full bg-yellow-400 text-black font-semibold px-6 py-2 hover:bg-yellow-500 transition-colors">
          Get AI Agents now
        </a>
      </div>
    </section>
  )
}

function SiteFooter({ theme }: { theme: "dark" | "light" }) {
  return (
    <footer
      className={cn(
        "px-4 py-12 border-t",
        theme === "dark" ? "bg-[#0b0e0c] border-white/10" : "bg-gray-100 border-black/10",
      )}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-2">ADOPLE AI</h4>
          <p className="opacity-70">High‑quality lifetime software deals.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Account</h4>
          <ul className="space-y-1 opacity-80">
            <li>
              <Link href="/signup">Sign up</Link>
            </li>
            <li>
              <Link href="/login">Log in</Link>
            </li>
            <li>
              <Link href="/redeem">Redeem</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 opacity-80">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/affiliates">Affiliates</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal & Learn</h4>
          <ul className="space-y-1 opacity-80">
            <li>
              <Link href="/terms">Terms</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/learn/start-business">Start an online business</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

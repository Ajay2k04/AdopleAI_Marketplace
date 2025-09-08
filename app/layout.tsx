import "./globals.css"
import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Adople Marketplace",
  description: "Explore and manage digital assets on Adople Marketplace",
  generator: "adople.ai",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>
}

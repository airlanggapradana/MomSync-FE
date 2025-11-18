import type React from "react"
import type { Metadata } from "next"
import { Instrument_Serif, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { AuthProvider } from "@/lib/auth-context"



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "MomSync - Empowering Mothers, Nurturing Lives",
  description: "Your trusted companion for a healthy and joyful pregnancy journey.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  font-sans antialiased`}>
        <AuthProvider>
          <Header />
          {children}
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  )
}

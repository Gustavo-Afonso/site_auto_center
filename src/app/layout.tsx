import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WF Auto Center | Funilaria, Pintura e Restauração",
  description:
    "Serviços de funilaria, pintura, polimento técnico, higienização, personalização e restauração de veículos antigos em Duque de Caxias, RJ.",
  keywords:
    "funilaria, pintura automotiva, restauração de carros, polimento técnico, higienização automotiva, personalização de veículos, carros antigos, Duque de Caxias",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
  <head>
    <meta name="google-site-verification" content="eBHfNtNh84MlsM25CsLQhH7JgK25a5GnPM8M6mZZDOE" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="WF Auto Center" />
    <meta name="geo.region" content="BR-RJ" />
    <meta name="geo.placename" content="Duque de Caxias" />
    <link rel="canonical" href="https://www.wflanternagem.com.br" />
  </head>
  <body className={inter.className}>
    {children}
    <Analytics />
    <SpeedInsights />
  </body>
</html>

  )
}



import './globals.css'
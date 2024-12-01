import type { Metadata } from 'next'
import './globals.css'
import { montserrat, openSans } from '@/constants/fonts'
import { GA_ID, METADATA } from '@/constants/meta'
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = METADATA

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        {children}
        <Analytics />
        <GoogleAnalytics gaId={GA_ID} />
        <SpeedInsights />
      </body>
    </html>
  )
}

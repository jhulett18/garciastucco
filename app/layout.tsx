import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Garcia Professional Stucco - Okeechobee & South Florida Stucco Services',
  description: 'Expert stucco installation, repair, and restoration services in Okeechobee, Lake Placid, Sebring, and throughout South Florida. Licensed and insured with 25+ years of experience. Free estimates!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
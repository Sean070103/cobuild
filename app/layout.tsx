import type { Metadata } from 'next'
import { VT323 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const pixelFont = VT323({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pixel',
});

export const metadata: Metadata = {
  title: 'Skyrant - Full Stack Development & Design Services',
  description: 'Professional freelance team offering frontend, backend, fullstack development, thesis writing, and design services.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${pixelFont.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

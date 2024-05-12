import './globals.css'

import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'

import * as config from '@/lib/config'
import { cn } from '@/lib/utils'

import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: config.title,
  description: config.description
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          styles.body
        )}
      >
        {children}

        <Analytics />
      </body>
    </html>
  )
}

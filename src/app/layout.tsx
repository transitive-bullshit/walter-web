import './globals.css'

import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import cs from 'clsx'
import { Inter } from 'next/font/google'

import * as config from '@/lib/config'

import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={cs(inter.className, styles.body)}>
        {children}

        <Analytics />
      </body>
    </html>
  )
}

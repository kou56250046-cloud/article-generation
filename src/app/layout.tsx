import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })

export const metadata: Metadata = {
  title: {
    default: '迷い人の茶屋',
    template: '%s | 迷い人の茶屋',
  },
  description: '難解な理論書を師匠と弟子の対話で読み解く物語集',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${geist.variable} antialiased`}>
      <body className="min-h-screen bg-neutral-950 text-white">
        {children}
      </body>
    </html>
  )
}

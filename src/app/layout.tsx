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
    <html lang="ja" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-stone-50 text-slate-800">
        <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
            <span className="text-2xl">🍵</span>
            <a href="/" className="text-lg font-bold tracking-wide text-slate-700 hover:text-slate-900">
              迷い人の茶屋
            </a>
          </div>
        </header>
        <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-10">
          {children}
        </main>
        <footer className="border-t border-stone-200 text-center text-sm text-slate-400 py-6">
          師匠と弟子の対話で学ぶ、真理の物語
        </footer>
      </body>
    </html>
  )
}

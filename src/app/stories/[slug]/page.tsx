import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllStories, getStoryBySlug } from '@/lib/stories'
import StoryViewer from '@/components/StoryViewer'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllStories().map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const story = getStoryBySlug(slug)
  if (!story) return {}
  return { title: story.title, description: story.description }
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params
  const story = getStoryBySlug(slug)
  if (!story) notFound()

  return (
    <div className="min-h-screen bg-neutral-950">

      {/* ヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-white font-bold tracking-widest text-sm hover:text-amber-400 transition-colors">
            <span>🍵</span>
            <span>迷い人の茶屋</span>
          </a>
          <Link href="/" className="text-white/40 hover:text-white text-xs tracking-widest transition-colors">
            ← 一覧へ
          </Link>
        </div>
      </header>

      <main className="pt-14">
        {/* ストーリーヘッダー */}
        <div className="bg-gradient-to-b from-stone-900 to-neutral-950 px-6 py-16 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-4 text-amber-400/60 text-xs tracking-widest">
              {story.source && <span>{story.source}</span>}
              {story.chapter && <><span>·</span><span>{story.chapter}</span></>}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
              {story.title}
            </h1>
            {story.description && (
              <p className="text-white/50 text-sm leading-relaxed">{story.description}</p>
            )}
            {story.date && (
              <p className="mt-4 text-white/25 text-xs">{story.date}</p>
            )}
          </div>
        </div>

        {/* 本文 */}
        <div className="max-w-2xl mx-auto px-6 py-12 animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
          <div className="bg-white/3 border border-white/8 rounded-2xl p-8 md:p-12">
            <StoryViewer content={story.content} />
          </div>
        </div>

        {/* フッターナビ */}
        <div className="max-w-2xl mx-auto px-6 pb-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-amber-400 text-sm tracking-widest transition-colors"
          >
            ← 物語一覧に戻る
          </Link>
        </div>
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-white/20 text-xs tracking-widest">
        <p>© 迷い人の茶屋</p>
      </footer>
    </div>
  )
}

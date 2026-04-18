import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllStories, getStoryBySlug } from '@/lib/stories'
import StoryViewer from '@/components/StoryViewer'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllStories().map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const story = getStoryBySlug(slug)
  if (!story) return {}
  return {
    title: story.title,
    description: story.description,
  }
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params
  const story = getStoryBySlug(slug)

  if (!story) notFound()

  return (
    <article>
      <div className="mb-8">
        <Link href="/" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
          ← 物語一覧へ
        </Link>
        <h1 className="text-3xl font-bold text-slate-800 mt-4 mb-2">{story.title}</h1>
        <div className="flex gap-4 text-sm text-slate-400">
          {story.source && <span>📖 {story.source}</span>}
          {story.chapter && <span>{story.chapter}</span>}
          {story.date && <span>{story.date}</span>}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-8">
        <StoryViewer content={story.content} />
      </div>
    </article>
  )
}

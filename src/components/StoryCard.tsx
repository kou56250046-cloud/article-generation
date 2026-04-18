'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import type { StoryMeta } from '@/lib/stories'

const GRADIENTS = [
  'from-amber-500 via-orange-500 to-red-500',
  'from-violet-600 via-purple-600 to-indigo-700',
  'from-teal-500 via-cyan-500 to-blue-600',
  'from-rose-500 via-pink-500 to-fuchsia-600',
  'from-slate-600 via-blue-700 to-indigo-800',
  'from-emerald-500 via-green-500 to-teal-600',
  'from-amber-600 via-violet-600 to-purple-700',
]

const CHAPTER_NUMS = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']

type Props = { story: StoryMeta; index: number }

export default function StoryCard({ story, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const gradient = GRADIENTS[index % GRADIENTS.length]
  const chNum = CHAPTER_NUMS[index] ?? String(index + 1)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="card-appear"
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <Link href={`/stories/${story.slug}`} className="group block h-full">
        <article className="h-full flex flex-col rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10">

          {/* グラデーションヘッダー */}
          <div className={`relative bg-gradient-to-br ${gradient} h-44 flex flex-col items-center justify-center`}>
            <div className="absolute inset-0 bg-black/20" />
            <span className="relative text-white/30 text-7xl font-bold leading-none select-none">
              {chNum}
            </span>
            <span className="relative mt-1 text-white/80 text-xs tracking-widest uppercase">
              第{chNum}話
            </span>
            {/* ホバー時の光彩 */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/5" />
          </div>

          {/* テキスト部分 */}
          <div className="flex flex-col flex-1 p-5 gap-3">
            <h2 className="text-white font-bold text-base leading-snug line-clamp-2 group-hover:text-amber-300 transition-colors duration-200">
              {story.title}
            </h2>
            {story.description && (
              <p className="text-white/50 text-sm leading-relaxed line-clamp-3 flex-1">
                {story.description}
              </p>
            )}
            <div className="flex items-center gap-3 text-xs text-white/30 mt-auto pt-3 border-t border-white/5">
              {story.source && <span>📖 {story.source}</span>}
              {story.date && <span>{story.date}</span>}
              <span className="ml-auto text-amber-400/70 group-hover:text-amber-400 transition-colors">
                読む →
              </span>
            </div>
          </div>
        </article>
      </Link>
    </div>
  )
}

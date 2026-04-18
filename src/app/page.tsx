import Link from 'next/link'
import { getAllStories } from '@/lib/stories'

export default function HomePage() {
  const stories = getAllStories()

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">物語一覧</h1>
        <p className="text-slate-500">師匠と弟子の対話で紐解く、真理への道</p>
      </div>

      {stories.length === 0 ? (
        <div className="rounded-xl border border-dashed border-stone-300 bg-white p-12 text-center text-slate-400">
          <p className="text-4xl mb-4">📜</p>
          <p className="font-medium">まだ物語がありません</p>
          <p className="text-sm mt-1">
            <code className="bg-stone-100 px-1 rounded">/narrativize</code> で最初の物語を生成してください
          </p>
        </div>
      ) : (
        <ul className="space-y-4">
          {stories.map((story) => (
            <li key={story.slug}>
              <Link
                href={`/stories/${story.slug}`}
                className="block rounded-xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-bold text-lg text-slate-800 mb-1">{story.title}</h2>
                    {story.description && (
                      <p className="text-slate-500 text-sm leading-relaxed">{story.description}</p>
                    )}
                  </div>
                  <span className="text-amber-400 text-xl flex-shrink-0">→</span>
                </div>
                <div className="mt-3 flex gap-3 text-xs text-slate-400">
                  {story.source && <span>📖 {story.source}</span>}
                  {story.chapter && <span>{story.chapter}</span>}
                  {story.date && <span>{story.date}</span>}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

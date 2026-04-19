import { Suspense } from 'react'
import { getAllStories } from '@/lib/stories'
import HeroSection from '@/components/HeroSection'
import TabNav from '@/components/TabNav'
import StoryCard from '@/components/StoryCard'

type Props = {
  searchParams: Promise<{ tab?: string }>
}

const TABS = [
  { label: '総  序', value: '総序' },
  { label: '創造原理', value: '創造原理' },
  { label: '堕落論', value: '堕落論' },
  { label: '終末論', value: '終末論' },
  { label: 'メシヤ論', value: 'メシヤ論' },
  { label: '復活論', value: '復活論' },
]

export default async function HomePage({ searchParams }: Props) {
  const { tab } = await searchParams
  const activeTab = tab ?? '総序'

  const allStories = getAllStories()
  const filtered = allStories
    .filter((s) => s.collection === activeTab)
    .filter((s) => s.slug !== 'sample')
    .sort((a, b) => a.slug.localeCompare(b.slug))

  return (
    <div className="min-h-screen bg-neutral-950">

      {/* ヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-white font-bold tracking-widest text-sm hover:text-amber-400 transition-colors">
            <span>🍵</span>
            <span>迷い人の茶屋</span>
          </a>
        </div>
      </header>

      {/* ヒーロー */}
      <div className="pt-14">
        <HeroSection />
      </div>

      {/* メインコンテンツ */}
      <main className="max-w-6xl mx-auto px-6 py-12">

        {/* タブナビゲーション */}
        <Suspense fallback={null}>
          <TabNav tabs={TABS} active={activeTab} />
        </Suspense>

        {/* コレクション情報 */}
        <div className="mb-8">
          <div className="flex items-baseline gap-4">
            <h2 className="text-white text-xl font-bold tracking-wide">{activeTab}</h2>
            <span className="text-white/30 text-sm">{filtered.length}話</span>
          </div>
          {activeTab === '総序' && (
            <p className="text-white/40 text-sm mt-1">
              原理講論 · 序文 — 人間の幸福・矛盾・真理を師匠と弟子が対話で紐解く
            </p>
          )}
          {activeTab === '創造原理' && (
            <p className="text-white/40 text-sm mt-1">
              原理講論 · 創造原理 — 神の二性性相・被造世界の構造・万物の目的を解き明かす
            </p>
          )}
          {activeTab === '堕落論' && (
            <p className="text-white/40 text-sm mt-1">
              原理講論 · 堕落論 — 罪の根はどこにあるのか。サタンの正体と人間堕落の経緯を解き明かす
            </p>
          )}
          {activeTab === '終末論' && (
            <p className="text-white/40 text-sm mt-1">
              原理講論 · 終末論 — 終末とは何か。歴史の目的と再臨、そして今この時代を生きる意味を解き明かす
            </p>
          )}
          {activeTab === 'メシヤ論' && (
            <p className="text-white/40 text-sm mt-1">
              原理講論 · メシヤ論 — 十字架の死は必然だったのか。洗礼ヨハネの不信とイエスの悲痛な心情を解き明かす
            </p>
          )}
          {activeTab === '復活論' && (
            <p className="text-white/40 text-sm mt-1">
              原理講論 · 復活論 — 肉体の復活は本当に起きるのか。霊人の再臨と宗教統一まで、復活の真義を解き明かす
            </p>
          )}
        </div>

        {/* ストーリーグリッド */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-white/20">
            <span className="text-5xl mb-4">📜</span>
            <p>まだ物語がありません</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((story, i) => (
              <StoryCard key={story.slug} story={story} index={i} />
            ))}
          </div>
        )}
      </main>

      {/* フッター */}
      <footer className="border-t border-white/5 mt-20 py-10 text-center text-white/20 text-xs tracking-widest">
        <p>© 迷い人の茶屋 — 師匠と弟子の対話で学ぶ、真理の物語</p>
      </footer>
    </div>
  )
}

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <p className="text-6xl mb-6">🍵</p>
      <h2 className="text-2xl font-bold text-slate-700 mb-2">この物語は見つかりませんでした</h2>
      <p className="text-slate-400 mb-8">茶屋に戻って、別の物語をお探しください</p>
      <Link
        href="/"
        className="inline-block bg-amber-400 hover:bg-amber-500 text-white font-medium px-6 py-3 rounded-lg transition-colors"
      >
        物語一覧へ戻る
      </Link>
    </div>
  )
}

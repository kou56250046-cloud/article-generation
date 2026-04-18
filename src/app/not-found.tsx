import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center text-center px-6">
      <p className="text-6xl mb-6">🍵</p>
      <h2 className="text-xl font-bold text-white mb-2">この物語は見つかりませんでした</h2>
      <p className="text-white/40 text-sm mb-8">茶屋に戻って、別の物語をお探しください</p>
      <Link
        href="/"
        className="border border-amber-400/50 text-amber-400 hover:bg-amber-400 hover:text-black text-sm tracking-widest px-8 py-3 rounded-lg transition-all duration-200"
      >
        一覧に戻る
      </Link>
    </div>
  )
}

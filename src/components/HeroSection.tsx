'use client'

import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setVisible(true) }, [])

  return (
    <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden bg-neutral-900 flex items-center justify-center">

      {/* 背景グラデーション + パターン */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-stone-900 to-neutral-950" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(180,130,80,0.4) 0%, transparent 50%),
                            radial-gradient(circle at 80% 30%, rgba(100,80,60,0.3) 0%, transparent 50%)`,
        }}
      />

      {/* 霧のような光の筋 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-amber-400/20 to-transparent" />

      {/* コンテンツ */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* 上線装飾 */}
        <div
          className={`flex items-center gap-3 mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
          style={{ transitionDelay: '0.1s' }}
        >
          <div className="h-px w-16 bg-amber-400/60" />
          <span className="text-amber-400/80 text-xs tracking-[0.3em]">MAIGO NO CHAYA</span>
          <div className="h-px w-16 bg-amber-400/60" />
        </div>

        {/* メインタイトル — HASH#FUKUOKAのような囲み枠スタイル */}
        <div
          className={`relative border border-amber-400/40 px-10 py-8 transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ transitionDelay: '0.25s' }}
        >
          {/* 四隅の装飾 */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-amber-400" />
          <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-amber-400" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-amber-400" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-amber-400" />

          <h1 className="text-4xl md:text-6xl font-bold tracking-wider leading-tight text-white">
            迷い人の
            <br />
            <span className="text-amber-400">茶屋</span>
          </h1>
        </div>

        {/* サブテキスト */}
        <p
          className={`mt-8 text-white/50 text-sm tracking-widest transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0.45s' }}
        >
          師匠と弟子の対話で読み解く、真理への道
        </p>

        {/* スクロールインジケーター */}
        <div
          className={`mt-10 flex flex-col items-center gap-1 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '0.7s' }}
        >
          <span className="text-white/20 text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  )
}

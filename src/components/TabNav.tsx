'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useTransition } from 'react'

type Tab = { label: string; value: string }

export default function TabNav({ tabs, active }: { tabs: Tab[]; active: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const handleClick = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('tab', value)
    startTransition(() => router.push(`?${params.toString()}`))
  }

  return (
    <div className="flex gap-1 border-b border-white/10 mb-10 overflow-x-auto">
      {tabs.map((tab) => {
        const isActive = tab.value === active
        return (
          <button
            key={tab.value}
            onClick={() => handleClick(tab.value)}
            disabled={isPending}
            className={`
              relative px-6 py-3 text-sm font-medium tracking-widest whitespace-nowrap
              transition-colors duration-200
              ${isActive ? 'text-amber-400' : 'text-white/50 hover:text-white/80'}
            `}
          >
            {tab.label}
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 animate-scale-in" />
            )}
          </button>
        )
      })}
    </div>
  )
}

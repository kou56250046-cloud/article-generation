export default function StoryLoading() {
  return (
    <div className="animate-pulse">
      <div className="h-4 w-24 bg-stone-200 rounded mb-8" />
      <div className="h-8 w-2/3 bg-stone-200 rounded mb-4" />
      <div className="h-4 w-1/3 bg-stone-200 rounded mb-8" />
      <div className="bg-white rounded-xl border border-stone-200 p-8 space-y-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-4 bg-stone-100 rounded" style={{ width: `${70 + (i % 3) * 10}%` }} />
        ))}
      </div>
    </div>
  )
}

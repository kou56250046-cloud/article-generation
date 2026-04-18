'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = {
  content: string
}

export default function StoryViewer({ content }: Props) {
  return (
    <div className="prose prose-slate max-w-none
      prose-headings:font-bold prose-headings:text-slate-800
      prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
      prose-p:leading-relaxed prose-p:text-slate-700
      prose-strong:text-slate-900
      prose-blockquote:border-l-4 prose-blockquote:border-amber-400
      prose-blockquote:bg-amber-50 prose-blockquote:py-1 prose-blockquote:px-4
      prose-blockquote:rounded-r-md prose-blockquote:text-slate-700
      prose-hr:border-slate-200">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  )
}

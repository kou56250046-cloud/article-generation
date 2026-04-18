'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = { content: string }

export default function StoryViewer({ content }: Props) {
  return (
    <div className="
      prose prose-invert max-w-none
      prose-headings:font-bold prose-headings:text-white
      prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-5 prose-h2:tracking-wide
      prose-p:leading-8 prose-p:text-white/70 prose-p:text-[0.95rem]
      prose-strong:text-amber-300 prose-strong:font-semibold
      prose-blockquote:border-l-2 prose-blockquote:border-amber-400/60
      prose-blockquote:bg-amber-400/5 prose-blockquote:rounded-r-lg
      prose-blockquote:py-2 prose-blockquote:px-5
      prose-blockquote:text-white/60 prose-blockquote:not-italic
      prose-hr:border-white/10
    ">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  )
}

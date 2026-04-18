import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const storiesDir = path.join(process.cwd(), 'content', 'stories')

export type StoryMeta = {
  slug: string
  title: string
  date: string
  source: string
  chapter: string
  description: string
  collection: string
}

export type Story = StoryMeta & {
  content: string
}

export function getAllStories(): StoryMeta[] {
  if (!fs.existsSync(storiesDir)) return []

  const files = fs.readdirSync(storiesDir).filter((f) => f.endsWith('.md'))

  return files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '')
      const fullPath = path.join(storiesDir, filename)
      const { data } = matter(fs.readFileSync(fullPath, 'utf8'))
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? '',
        source: data.source ?? '',
        chapter: data.chapter ?? '',
        description: data.description ?? '',
        collection: data.collection ?? '総序',
      } satisfies StoryMeta
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getStoryBySlug(slug: string): Story | null {
  const fullPath = path.join(storiesDir, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    source: data.source ?? '',
    chapter: data.chapter ?? '',
    description: data.description ?? '',
    collection: data.collection ?? '総序',
    content,
  }
}

import type { Filters, Job } from './types'

// Bỏ dấu tiếng Việt để gõ "ke toan" vẫn ra "Kế toán".
export function normalizeText(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
}

export function filterJobs(list: Job[], f: Filters, query: string): Job[] {
  const q = normalizeText(query.trim())
  const result = list.filter((j) => {
    if (f.location && j.location !== f.location) return false
    if (f.type && j.type !== f.type) return false
    if (f.level && j.level !== f.level) return false
    if (f.minSalary && j.salaryMax < f.minSalary) return false
    if (q) {
      const haystack = normalizeText([j.title, j.company, ...j.skills].join(' '))
      if (!haystack.includes(q)) return false
    }
    return true
  })
  return result.sort((a, b) => {
    if (f.sort === 'salary-desc') return b.salaryMax - a.salaryMax
    if (f.sort === 'salary-asc') return a.salaryMin - b.salaryMin
    return b.postedAt.localeCompare(a.postedAt)
  })
}

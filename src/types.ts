export type JobType = 'Toàn thời gian' | 'Bán thời gian' | 'Từ xa' | 'Thực tập'
export type JobLevel = 'Thực tập' | 'Junior' | 'Middle' | 'Senior'
export type SortKey = 'newest' | 'salary-desc' | 'salary-asc'

export interface Job {
  id: number
  title: string
  company: string
  location: string
  type: JobType
  level: JobLevel
  salaryMin: number
  salaryMax: number
  skills: string[]
  postedAt: string
  description: string
}

export interface Filters {
  query: string
  location: string
  type: string
  level: string
  minSalary: number
  sort: SortKey
}

export const DEFAULT_FILTERS: Filters = {
  query: '',
  location: '',
  type: '',
  level: '',
  minSalary: 0,
  sort: 'newest',
}

import { useEffect, useMemo, useState } from 'react'
import { jobs } from '../data'
import { filterJobs } from '../filterJobs'
import { DEFAULT_FILTERS, type Filters } from '../types'
import { debounce } from '../utils'
import { FilterBar } from '../components/FilterBar'
import { JobCard } from '../components/JobCard'
import { Pagination } from '../components/Pagination'

const PAGE_SIZE = 9
const unique = (arr: string[]) => Array.from(new Set(arr))

export function ListPage() {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS)
  const [appliedQuery, setAppliedQuery] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    document.title = 'ViệcLàm Xanh - Tìm việc làm'
  }, [])

  // Debounce 300ms cho ô tìm kiếm
  const applyQuery = useMemo(
    () =>
      debounce((value: string) => {
        setAppliedQuery(value)
        setPage(1)
      }, 300),
    [],
  )

  const options = useMemo(
    () => ({
      locations: unique(jobs.map((j) => j.location)),
      types: unique(jobs.map((j) => j.type)),
      levels: unique(jobs.map((j) => j.level)),
    }),
    [],
  )

  const handleChange = (patch: Partial<Filters>) => {
    setFilters((f) => ({ ...f, ...patch }))
    if (patch.query !== undefined) applyQuery(patch.query)
    else setPage(1)
  }

  const handleReset = () => {
    setFilters(DEFAULT_FILTERS)
    setAppliedQuery('')
    setPage(1)
  }

  const results = useMemo(() => filterJobs(jobs, filters, appliedQuery), [filters, appliedQuery])
  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const visible = results.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  const goToPage = (p: number) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Việc làm đang tuyển</h1>
      <FilterBar filters={filters} options={options} onChange={handleChange} onReset={handleReset} />
      <p role="status" aria-live="polite" className="text-sm text-slate-600 dark:text-slate-300">
        Tìm thấy {results.length} việc làm
      </p>
      {visible.length === 0 ? (
        <p className="rounded-xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-600">
          Không có việc làm phù hợp. Hãy thử bỏ bớt bộ lọc hoặc đổi từ khóa.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
      <Pagination page={currentPage} totalPages={totalPages} onChange={goToPage} />
    </div>
  )
}

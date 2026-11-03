import type { Filters, SortKey } from '../types'

interface Props {
  filters: Filters
  options: { locations: string[]; types: string[]; levels: string[] }
  onChange: (patch: Partial<Filters>) => void
  onReset: () => void
}

const SALARY_OPTIONS = [
  { label: 'Tất cả mức lương', value: 0 },
  { label: 'Từ 5 triệu', value: 5_000_000 },
  { label: 'Từ 10 triệu', value: 10_000_000 },
  { label: 'Từ 20 triệu', value: 20_000_000 },
  { label: 'Từ 30 triệu', value: 30_000_000 },
  { label: 'Từ 50 triệu', value: 50_000_000 },
]

const SORT_OPTIONS: { label: string; value: SortKey }[] = [
  { label: 'Mới nhất', value: 'newest' },
  { label: 'Lương cao nhất', value: 'salary-desc' },
  { label: 'Lương thấp nhất', value: 'salary-asc' },
]

const fieldCls =
  'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100'
const labelCls = 'mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200'

export function FilterBar({ filters, options, onChange, onReset }: Props) {
  return (
    <form
      role="search"
      aria-label="Tìm kiếm và lọc việc làm"
      onSubmit={(e) => e.preventDefault()}
      className="grid grid-cols-1 gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-2 lg:grid-cols-3 dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="sm:col-span-2 lg:col-span-3">
        <label htmlFor="q" className={labelCls}>Từ khóa (vị trí, công ty, kỹ năng)</label>
        <input
          id="q"
          type="search"
          value={filters.query}
          onChange={(e) => onChange({ query: e.target.value })}
          placeholder="Ví dụ: gia su, phuc vu, react"
          className={fieldCls}
        />
      </div>
      <div>
        <label htmlFor="loc" className={labelCls}>Địa điểm</label>
        <select id="loc" value={filters.location} onChange={(e) => onChange({ location: e.target.value })} className={fieldCls}>
          <option value="">Tất cả địa điểm</option>
          {options.locations.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="type" className={labelCls}>Hình thức</label>
        <select id="type" value={filters.type} onChange={(e) => onChange({ type: e.target.value })} className={fieldCls}>
          <option value="">Tất cả hình thức</option>
          {options.types.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="level" className={labelCls}>Cấp bậc</label>
        <select id="level" value={filters.level} onChange={(e) => onChange({ level: e.target.value })} className={fieldCls}>
          <option value="">Tất cả cấp bậc</option>
          {options.levels.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="salary" className={labelCls}>Mức lương</label>
        <select id="salary" value={filters.minSalary} onChange={(e) => onChange({ minSalary: Number(e.target.value) })} className={fieldCls}>
          {SALARY_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="sort" className={labelCls}>Sắp xếp</label>
        <select id="sort" value={filters.sort} onChange={(e) => onChange({ sort: e.target.value as SortKey })} className={fieldCls}>
          {SORT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
      <div className="flex items-end">
        <button
          type="button"
          onClick={onReset}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-700"
        >
          Xóa bộ lọc
        </button>
      </div>
    </form>
  )
}

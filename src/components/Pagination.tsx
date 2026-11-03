import { Fragment } from 'react'

interface Props {
  page: number
  totalPages: number
  onChange: (page: number) => void
}

const base = 'min-w-10 rounded-lg border px-3 py-2 text-sm font-medium disabled:opacity-50'
const idle = 'border-slate-300 text-slate-800 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-700'
const active = 'border-primary-dark bg-primary-dark text-white'

export function Pagination({ page, totalPages, onChange }: Props) {
  if (totalPages <= 1) return null
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).filter(
    (p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1,
  )
  return (
    <nav aria-label="Phân trang" className="mt-6 flex flex-wrap items-center justify-center gap-2">
      <button type="button" className={`${base} ${idle}`} disabled={page === 1} onClick={() => onChange(page - 1)}>
        Trước
      </button>
      {pages.map((p, i) => (
        <Fragment key={p}>
          {i > 0 && p - pages[i - 1] > 1 && <span aria-hidden="true">…</span>}
          <button
            type="button"
            aria-label={`Trang ${p}`}
            aria-current={p === page ? 'page' : undefined}
            className={`${base} ${p === page ? active : idle}`}
            onClick={() => onChange(p)}
          >
            {p}
          </button>
        </Fragment>
      ))}
      <button type="button" className={`${base} ${idle}`} disabled={page === totalPages} onClick={() => onChange(page + 1)}>
        Sau
      </button>
    </nav>
  )
}

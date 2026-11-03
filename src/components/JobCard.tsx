import { Link } from 'react-router-dom'
import type { Job } from '../types'
import { formatCurrency, truncateText } from '../utils'

export function JobCard({ job }: { job: Job }) {
  return (
    <article className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-start gap-3">
        <div
          aria-hidden="true"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-dark text-lg font-bold text-white"
        >
          {job.company.charAt(0)}
        </div>
        <div className="min-w-0">
          <h2 className="font-semibold leading-snug">
            <Link to={`/item/${job.id}`} className="hover:underline">
              {job.title}
            </Link>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">{job.company}</p>
        </div>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300">{truncateText(job.description, 90)}</p>
      <div className="flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-primary-light px-2 py-1 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100">{job.type}</span>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-800 dark:bg-slate-700 dark:text-slate-100">{job.level}</span>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-slate-800 dark:bg-slate-700 dark:text-slate-100">{job.location}</span>
      </div>
      <p className="mt-auto text-sm font-semibold text-primary-dark dark:text-emerald-400">
        {formatCurrency(job.salaryMin)} – {formatCurrency(job.salaryMax)}
      </p>
    </article>
  )
}

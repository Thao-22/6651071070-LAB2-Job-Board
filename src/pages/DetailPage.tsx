import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { jobs } from '../data'
import { formatCurrency } from '../utils'

export function DetailPage() {
  const { id } = useParams()
  const job = jobs.find((j) => String(j.id) === id)

  useEffect(() => {
    document.title = job ? `${job.title} - ${job.company}` : 'Không tìm thấy - ViệcLàm Nhanh'
  }, [job])

  const backLink = (
    <Link to="/" className="text-sm font-medium text-primary-dark hover:underline dark:text-emerald-400">
      Quay lại danh sách việc làm
    </Link>
  )

  if (!job) {
    return (
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">Không tìm thấy việc làm</h1>
        <p>Tin tuyển dụng này không tồn tại hoặc đã bị gỡ.</p>
        {backLink}
      </div>
    )
  }

  const info: [string, string][] = [
    ['Công ty', job.company],
    ['Địa điểm', job.location],
    ['Hình thức', job.type],
    ['Cấp bậc', job.level],
    ['Mức lương', `${formatCurrency(job.salaryMin)} – ${formatCurrency(job.salaryMax)}`],
    ['Ngày đăng', new Date(job.postedAt).toLocaleDateString('vi-VN')],
  ]

  return (
    <article className="space-y-5">
      {backLink}
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <dl className="grid grid-cols-1 gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-2 lg:grid-cols-3 dark:border-slate-700 dark:bg-slate-800">
        {info.map(([k, v]) => (
          <div key={k}>
            <dt className="text-sm text-slate-600 dark:text-slate-300">{k}</dt>
            <dd className="font-medium">{v}</dd>
          </div>
        ))}
      </dl>
      <section>
        <h2 className="mb-2 text-lg font-semibold">Mô tả công việc</h2>
        <p className="max-w-prose text-slate-700 dark:text-slate-200">{job.description}</p>
      </section>
      <section>
        <h2 className="mb-2 text-lg font-semibold">Kỹ năng yêu cầu</h2>
        <ul className="flex flex-wrap gap-2">
          {job.skills.map((s) => (
            <li key={s} className="rounded-full bg-primary-light px-3 py-1 text-sm text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100">
              {s}
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

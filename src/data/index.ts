import raw from './data.json'
import type { Job } from '../types'

export const jobs = raw as unknown as Job[]

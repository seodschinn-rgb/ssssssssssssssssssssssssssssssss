import copy from './service-copy.json'
import supplementalCopy from './service-supplemental-copy.json'
import type { ServicePageCopy } from './service-page-types'

export const SERVICE_PAGES: Record<string, ServicePageCopy> = { ...copy, ...supplementalCopy }

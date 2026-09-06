export interface ServiceBlock { title: string; text: string }
export interface ServicePageCopy {
  title: string
  description: string
  h1: string
  eyebrow: string
  intro: string
  audience: ServiceBlock[]
  deliverables: ServiceBlock[]
  process: ServiceBlock[]
  boundaries: string
  priceNote: string
  faqs: { question: string; answer: string }[]
  related: { label: string; href: string }[]
  example: { label: string; title: string; intro: string; columns: string[]; rows: string[][] }
}

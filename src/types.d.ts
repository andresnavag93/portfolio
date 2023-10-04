export interface Project {
  id: string
  title: string
  subtitle: string
  description?: string
  image: string
  date?: string
  area: Area
  features?: Features
  urls?: Urls[]
}
export interface Features {
  classification: string
  company?: string
  technologies: Technology[]
  urls?: Urls[]
}
export interface Area {
  name: string
  color: string
}

export interface Urls {
  name: string
  url: string
}

export interface Technology {
  name: string
  icon?: string
}

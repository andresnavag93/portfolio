export interface Project {
  id: string
  title: string
  subtitle: string
  description?: string
  image: string
  date?: string
  area: Area
  features?: Features
  links?: string[][]
}
export interface Features {
  classification?: string
  technologies?: string[]
  client?: string
  developedIn?: string
  links?: string[][]
}
export interface Area {
  name: string
  color: string
}

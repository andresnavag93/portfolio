export type Url = string
export type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

export type TProjectId = string

export type TResumeId = string

export type TModelId = string

export interface ProjectLinks {
  github?: string
  web?: string
  demo?: string
  demo2?: string
}

export interface ProjectAreaFeature {
  name: string
  color: SemanticCOLORS
}

export interface ProjectFeatures {
  description: string
  'developed in'?: string
  links: string[string[]]
  technologies: string[]
  client?: string
  classification?: string
}

export interface Project {
  id: TProjectId
  title: string
  subtitle: string
  image: Url
  area: TProjectAreaFeature
  date?: string
  features: TProjectFeatures
  links?: string[string[]]
}

export interface Model {
  id: TModelId
  title: string
  subtitle: string
  image: Url
  area: TProjectAreaFeature
  links?: string[string[]]
}

export type APIPROJECTDetailResponse = TProject

export interface APIProjectResponse {
  lenght: number
  data: TProject[]
  error?: string
}

export interface ResumeSkills {
  languages?: string[]
  code?: string[]
  'game Engines'?: string[]
  'augmented Reality'?: string[]
  '3d Modeling'?: string[]
  design?: string[]
  'video Editing'?: string[]
  'front-End'?: string[]
  'back-End'?: string[]
  dapp?: string[]
  'block Chain Networks'?: string[]
  devOps?: string[]
  databases?: string[]
}

export interface Resume {
  id: ResumeId
  title: string
  resume: string[]
  skills: TResumeFeatures
}

export const sizes = [
  'mini',
  'tiny',
  'small',
  'medium',
  'large',
  'big',
  'huge',
  'massive'
]

export const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black'
]

export interface ProjectTest {
  project: Root
}

export interface Root {
  id: string
  title: string
  subtitle: string
  image: string
  area: Area
  date: string
  features: Features
}

export interface Area {
  name: string
  color: string
}

export interface Features {
  client: string
  classification: string
  'developed in': string
  description: string
  technologies: string[]
  links: string[][]
}

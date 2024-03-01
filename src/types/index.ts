type TagType = {
  deployed: boolean
  current: boolean
  frontend: boolean
  backend: boolean
}

type ProjectCardType = {
  title: string
  stack: string[]
  description: string
  gitHubUrl: string
  imageUrl: string
  imageDescription: string
  tags: TagType
}

type SkillType = {
  name: string
  descr: string
}

type OccupationType = {
  title: string
  location: string
  organisation: string
  description: string
  qualification: string
  skills: SkillType[]
}

type PeriodType = {
  years: string
  occupations: OccupationType[]
}

export type { ProjectCardType, SkillType, PeriodType, OccupationType, TagType }

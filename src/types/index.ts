type ProjectCardType = {
  title: string
  stack: string[]
  description: string
  gitHubLink: string
  imageUrl: string
  imageDescription: string
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
  occupationList: OccupationType[]
}
export type { ProjectCardType, SkillType, PeriodType, OccupationType }

export interface WhyUsCardProps {
    stat: string
    text: string
}

export interface WhyUsImageCardProps {
    imageSource: string
    heading: string
    content: string
}

export interface LifeAtAUCardProps {
    imageSource: string
    heading: string
    content: string
}

export interface TheSchoolCardStats {
    stat: string
    name: string
}

export interface TheSchoolsCard{
    id: string
    schoolName: string
    text: string
    backgroundImage: string
    stats: TheSchoolCardStats[]
}
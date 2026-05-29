import { Building, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceProps {
  experience: {
    title: string
    company: string
    location: string
    period: string
    description: string[]
    technologies: string[]
  }
}

export default function ExperienceCard({ experience }: ExperienceProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
          <div>
            <CardTitle>{experience.title}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              <Building className="h-4 w-4 mr-1" />
              {experience.company} • {experience.location}
            </CardDescription>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            {experience.period}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ul className="list-disc pl-5 space-y-2">
            {experience.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            {experience.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

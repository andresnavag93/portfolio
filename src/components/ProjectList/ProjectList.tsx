import Grid from '@mui/material/Grid'
import { ProjectCard } from '../ProjectCard/ProjectCard.tsx'
import { type Project } from '../../types'

interface ProjectData {
  projectData: Project[]
  hasLink?: boolean
}
export const ProjectList = ({ projectData, hasLink = true }: ProjectData) => {
  return (
    <>
      <Grid sx={{ mt: 5, flexGrow: 1 }} container rowSpacing={10} columnSpacing={5}>
        {projectData.map((project) => {
          return <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard project={project} hasLink={hasLink} />
          </Grid>
        })}
      </Grid>
    </>
  )
}

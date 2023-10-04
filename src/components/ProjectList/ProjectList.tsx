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
      <Grid sx={{ mt: 5 }} container rowSpacing={5} columnSpacing={{ xs: 5, sm: 5, md: 5 }}>
        {projectData.map((project) => {
          return <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard project={project} hasLink={hasLink} />
          </Grid>
        })}
      </Grid>
    </>
  )
}

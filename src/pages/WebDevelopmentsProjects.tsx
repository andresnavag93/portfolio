import Grid from '@mui/material/Grid'
import { ProjectCard } from '../components/ProjectCard/ProjectCard.tsx'
import { WEB_DEVELOPMENTS_PROJECTS_DATA } from '../data/webDevelopmentsProjectsData.ts'

export const WebDevelopmentsProjects = () => {
  return (
    <>
      <Grid sx={{ mt: 5 }} container rowSpacing={5} columnSpacing={{ xs: 5, sm: 5, md: 5 }}>
        {WEB_DEVELOPMENTS_PROJECTS_DATA.map((project) => {
          return <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard project={project} />
        </Grid>
        })}
      </Grid>
    </>
  )
}

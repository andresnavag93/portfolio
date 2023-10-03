import Grid from '@mui/material/Grid'
import { Navbar } from '../components/Navbar/Navbar.tsx'
import { ProjectCard } from '../components/ProjectCard/ProjectCard.tsx'
import { webDevelopmentData } from '../data/webDevelopmentData.ts'

export const WebProjects = () => {
  return (
    <>
      <Navbar />
      <Grid sx={{ mt: 5 }} container rowSpacing={5} columnSpacing={{ xs: 5, sm: 5, md: 5 }}>
        {webDevelopmentData.map((webProject) => {
          return <Grid item xs={12} sm={6} md={4} key={webProject.id}>
            <ProjectCard webProject={webProject} />
        </Grid>
        })}
      </Grid>
    </>
  )
}

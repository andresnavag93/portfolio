import { ANIMATIONS_PROJECTS_DATA } from '../data/animationsProjectsData.ts'
import { WebTitle } from '../components/WebTitle/WebTitle.tsx'
import { ProjectList } from '../components/ProjectList/ProjectList.tsx'

export const AnimationsProjects = () => {
  return (
    <>
      <WebTitle title="3D models - Animations" />
      <ProjectList projectData={ANIMATIONS_PROJECTS_DATA}/>
    </>
  )
}

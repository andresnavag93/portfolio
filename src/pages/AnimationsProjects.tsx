import { ANIMATIONS_PROJECTS_DATA } from '../data/animationsProjectsData.ts'
import { WebTitle } from '../components/WebTitle/WebTitle.tsx'
import { ProjectList } from '../components/ProjectList/ProjectList.tsx'
// import { motion } from 'framer-motion'

export const AnimationsProjects = () => {
  return (
    <>
      <WebTitle title="3D models - Animations" />
      <ProjectList projectData={ANIMATIONS_PROJECTS_DATA} hasLink={false} />
    </>
  )
}

// <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

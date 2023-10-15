import { WEB_DEVELOPMENTS_PROJECTS_DATA } from '../data/webDevelopmentsProjectsData.ts'
import { WebTitle } from '../components/WebTitle/WebTitle.tsx'
import { ProjectList } from '../components/ProjectList/ProjectList.tsx'
// import { motion } from 'framer-motion'

export const WebDevelopmentsProjects = () => {
  return (
    <>
      <WebTitle title="Web Developments" />
      <ProjectList projectData={WEB_DEVELOPMENTS_PROJECTS_DATA} />
    </>
  )
}

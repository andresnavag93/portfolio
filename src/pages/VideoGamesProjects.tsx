import { VIDEO_GAMES_PROJECTS_DATA } from '../data/videoGamesProjectsData.ts'
import { WebTitle } from '../components/WebTitle/WebTitle.tsx'
import { ProjectList } from '../components/ProjectList/ProjectList.tsx'
import { motion } from 'framer-motion'

export const VideoGamesProjects = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <WebTitle title="Videogames - XR" />
      <ProjectList projectData={VIDEO_GAMES_PROJECTS_DATA} />
    </motion.div>
  )
}

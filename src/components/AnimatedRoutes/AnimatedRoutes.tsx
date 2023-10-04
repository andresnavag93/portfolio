import { WebDevelopmentsProjects } from '../../pages/WebDevelopmentsProjects.tsx'
import { AnimationsProjects } from '../../pages/AnimationsProjects.tsx'
import { VideoGamesProjects } from '../../pages/VideoGamesProjects.tsx'
import { ProjectDetail } from '../../pages/ProjectDetail.tsx'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
export const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<WebDevelopmentsProjects />} />
        <Route path='/web-develpment' element={<WebDevelopmentsProjects />} />
        <Route path='/animations' element={<AnimationsProjects />} />
        <Route path='/videogames' element={<VideoGamesProjects />} />
        <Route path='/project-detail/:id' element={<ProjectDetail />} />
        <Route path='*' element={<p>Not Found</p>} />
      </Routes>
    </AnimatePresence>
  )
}

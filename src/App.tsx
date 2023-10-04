import { WebDevelopmentsProjects } from './pages/WebDevelopmentsProjects.tsx'
import { AnimationsProjects } from './pages/AnimationsProjects.tsx'
import { VideoGamesProjects } from './pages/VideoGamesProjects.tsx'
import { ProjectDetail } from './pages/ProjectDetail.tsx'
import { Navbar } from './components/Navbar/Navbar.tsx'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'

export const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<WebDevelopmentsProjects />} />
        <Route path='/web-develpment' element={<WebDevelopmentsProjects />} />
        <Route path='/animations' element={<AnimationsProjects />} />
        <Route path='/videogames' element={<VideoGamesProjects />} />
        <Route path='/project-detail/:id' element={<ProjectDetail />} />
        <Route path='*' element={<p>Not Found</p>} />
      </Routes>
    </HashRouter>
  )
}

export default App

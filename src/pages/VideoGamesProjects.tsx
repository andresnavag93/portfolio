import { VIDEO_GAMES_PROJECTS_DATA } from '../data/videoGamesProjectsData.ts'
import { WebTitle } from '../components/WebTitle/WebTitle.tsx'
import { ProjectList } from '../components/ProjectList/ProjectList.tsx'

export const VideoGamesProjects = () => {
  return (
    <>
      <WebTitle title="Videogames - XR" />
      <ProjectList projectData={VIDEO_GAMES_PROJECTS_DATA} />
    </>
  )
}

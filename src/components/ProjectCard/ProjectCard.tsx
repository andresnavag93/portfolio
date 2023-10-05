import { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom'
import { type Project } from '../../types'
import Atropos from 'atropos/react'

interface Props {
  project: Project
  hasLink?: boolean
}

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])

  return windowDimensions
}

export const ProjectCard = ({ project, hasLink = true }: Props) => {
  const { width } = useWindowDimensions()
  const { id, title, subtitle, image, area } = project
  const imgUrl = new URL(`../../assets/images/${image}`, import.meta.url).href

  if (width < 768) {
    return (
      <Card sx={{ width: '100%', maxWidth: 400, backgroundColor: '#0E0E0E' }}>
        <CardMedia
          sx={{ height: 250, maxHeight: 400 }}
          image={imgUrl}
          title={title}
        />
        <CardContent>
          {hasLink
            ? <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            : null}
          <Typography variant="h6" color="text.secondary">
            {subtitle}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {area.name}
          </Typography>
        </CardContent>
        {hasLink
          ? <CardActions>
            <NavLink to={`/project-detail/${id}`}
            >
              <Button size="small">Learn More</Button>
            </NavLink>
          </CardActions>
          : null}
      </Card >
    )
  }

  return (
    <Atropos style={{ width: '100%', maxWidth: 400 }}
      activeOffset={100}
      shadowScale={0.5}
    >

      <Card sx={{ width: '100%', maxWidth: 400, backgroundColor: '#0E0E0E' }}>
        <CardMedia
          sx={{ height: 250, maxHeight: 400 }}
          image={imgUrl}
          title={title}
        />
        <CardContent>
          {hasLink
            ? <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            : null}
          <Typography variant="h6" color="text.secondary">
            {subtitle}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {area.name}
          </Typography>
        </CardContent>
        {hasLink
          ? <CardActions>
            <NavLink to={`/project-detail/${id}`}
            >
              <Button size="small">Learn More</Button>
            </NavLink>
          </CardActions>
          : null}
      </Card >
    </Atropos>
  )
}

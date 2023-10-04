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

export const ProjectCard = ({ project, hasLink = true }: Props) => {
  const { id, title, subtitle, image, area } = project
  const imgUrl = new URL(`../../assets/images/${image}`, import.meta.url).href

  return (
    <Atropos style={{ width: '100%', maxWidth: 400 }}
      activeOffset={100}
      shadowScale={0.5}
    >

      <Card sx={{ width: '100%', maxWidth: 400 }}>
        <CardMedia
          sx={{ height: 250 }}
          image={imgUrl}
          title="byson"
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

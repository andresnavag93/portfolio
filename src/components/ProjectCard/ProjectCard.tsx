import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { NavLink } from 'react-router-dom'
import { type Project } from '../../types'

interface Props {
  project: Project
  hasLink?: boolean
}

export const ProjectCard = ({ project, hasLink = true }: Props) => {
  const { id, title, subtitle, image } = project
  const imgUrl = new URL(`../../assets/images/${image}`, import.meta.url).href

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={imgUrl}
        title="byson"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
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

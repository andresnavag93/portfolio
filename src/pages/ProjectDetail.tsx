import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export const ProjectDetail = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>ProjectDetail</div>
      <Button onClick={() => { navigate(-1) }}>
        Go Back
      </Button>
    </>
  )
}

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export const WebTitle = ({ title }: { title: string }) => {
  return (
    <Box sx={{ m: '0 auto', textAlign: 'center', mt: 15, width: '100%', maxWidth: 700 }} className="animate__animated animate__zoomIn">
      <Typography sx={{ typography: { sm: 'h3', xs: 'h4' } }} gutterBottom >
        <div className="animate__animated animate__zoomIn">
          {title}
        </div>
      </Typography>
    </Box>
  )
}

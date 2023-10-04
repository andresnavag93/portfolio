import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export const WebTitle = ({ title }: { title: string }) => {
  return (
    <Box sx={{ m: '0 auto', textAlign: 'center', mt: 10, width: '100%', maxWidth: 700 }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
    </Box>
  )
}

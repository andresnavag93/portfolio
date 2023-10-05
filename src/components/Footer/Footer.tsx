import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import YouTubeIcon from '@mui/icons-material/YouTube'
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset'
import GitHubIcon from '@mui/icons-material/GitHub'

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        mb: 3
      }}
    >
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'space-between' }}>
        <Grid container spacing={5} sx={{ display: 'flex', placeItems: 'center' }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" color="text.secondary" align="center">
              {'Copyright © '}
              Andres Navarro
              {` ${new Date().getFullYear()}`}
              {'.'}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
            {/* <Typography variant="h6" color="text.primary" gutterBottom>
              Links
            </Typography> */}
            <Link m={1} href="mailto: andresnavag93gmail.com" target="_blank" rel="noopener" color="inherit">
              <EmailIcon fontSize='large' />
            </Link>
            <Link m={1} href="https://github.com/andresnavag93" target="_blank" rel="noopener" color="inherit">
              <GitHubIcon fontSize='large' />
            </Link>
            <Link m={1} href="https://www.linkedin.com/in/andresnavag93/" target="_blank" rel="noopener" color="inherit">
              <LinkedInIcon fontSize='large' />
            </Link>
            <Link m={1} href="https://www.youtube.com/channel/UC59WLJg8ghkepR2WLl_xB9w" target="_blank" rel="noopener" color="inherit">
              <YouTubeIcon fontSize='large' />
            </Link>
            <Link m={1} href="https://andresnavag93.itch.io/" target="_blank" rel="noopener" color="inherit">
              <VideogameAssetIcon fontSize='large' />
            </Link>

          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import Link from '@mui/material/Link'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
}

const routes = [{
  to: '/',
  text: 'Web'
}, {
  to: '/videogames',
  text: 'Videogames'
}, {
  to: '/animations',
  text: 'Animations'
}]

const drawerWidth = 240

export const Navbar = (props: Props) => {
  const navigate = useNavigate()
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Link onClick={() => { navigate('/') }}>
        <Box
          component="img"
          sx={{
            height: 'auto',
            width: 50,
            maxHeight: { xs: 50, md: 50 },
            maxWidth: { xs: 50, md: 50 }
          }}
          alt="Logo"
          src={logo}
        />
      </Link>
      <Divider />
      <List>
        {routes.map((item) => (
          <NavLink to={item.to} key={item.text}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center', color: '#fff' }}>
                {item.text}
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link
            variant="h6"
            component="div"
            onClick={() => { navigate('/') }}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          ><Box
              component="img"
              sx={{
                height: 'auto',
                width: 50,
                maxHeight: { xs: 50, md: 50 },
                maxWidth: { xs: 50, md: 50 }
              }}
              alt="Logo"
              src={logo}
            />
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {routes.map((item) => (
              <NavLink key={item.text} to={item.to}>
                <Button sx={{ color: '#fff' }}>
                  {item.text}
                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}

import { Navbar } from './components/Navbar/Navbar.tsx'
import { HashRouter } from 'react-router-dom'
import './App.css'
import { AnimatedRoutes } from './components/AnimatedRoutes/AnimatedRoutes.tsx'
import { Footer } from './components/Footer/Footer.tsx'

export const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </HashRouter>
  )
}

export default App

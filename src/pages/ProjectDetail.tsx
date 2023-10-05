import Button from '@mui/material/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { ALL_DATA } from '../data/allData.ts'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { WebTitle } from '../components/WebTitle/WebTitle.tsx'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { ProjectCard } from '../components/ProjectCard/ProjectCard.tsx'
import { motion } from 'framer-motion'
// import { useEffect } from 'react'

export const ProjectDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const project = ALL_DATA.find(item => item.id === id)

  if (project === undefined) {
    navigate('/')
    return null
  }

  const { title, description, features } = project
  const { client, classification, technologies, links, developedIn } = features

  const parseLinks = (links: string[][]) => {
    if (links.length <= 0) return null

    return links.map((values: string[], i: number) => (
      <span key={values[0]}>
        <a href={values[1]} target="_blank" rel="noreferrer">
          {values[0]}
        </a>
        {!(i === links.length - 1) && ' • '}
      </span>
    ))
  }

  const getLinksRow = (links: string[][]) => {
    if (links?.length > 0) {
      return (
        <TableRow key="links-row" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
          <TableCell component="th" scope="row">
            Links
          </TableCell>
          <TableCell align="left">{parseLinks(links)}</TableCell>
        </TableRow>
      )
    } else {
      return null
    }
  }
  window.scrollTo(0, 0)
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Button onClick={() => { navigate(-1) }} sx={{ position: 'sticky', top: { xs: 80, sm: 100 }, left: { xs: 20, sm: 0 }, color: '#fff', border: 1, backgroundColor: '#0E0E0E' }}>
        Back
      </Button>
      <WebTitle title={title} />
      <Stack sx={{ m: '0 auto', width: '100%', display: 'flex', alignItems: 'center', mt: 10, flexGrow: 1 }}>
        <ProjectCard project={project} hasLink={false} />
      </Stack>
      <Typography variant="h4" sx={{ mt: 5 }}> About this project </Typography>
      <Typography sx={{ width: '100%', maxWidth: '700px', mt: 3 }}> {description} </Typography>
      <Box sx={{ overflow: 'auto', mt: 5 }} component={Paper}>
        <Box sx={{ width: '100%', maxWidth: '700px', display: 'table', tableLayout: 'fixed' }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell size='medium' sx={{ fontSize: '1.5rem' }}>Features</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" >
                  Client
                </TableCell>
                <TableCell align="left">{client}</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Classification
                </TableCell>
                <TableCell align="left">{classification}</TableCell>
              </TableRow>
              {/* <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Developed In
                </TableCell>
                <TableCell align="left">{developedIn}</TableCell>
              </TableRow> */}
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Technologies
                </TableCell>
                <TableCell align="left">{technologies?.join(' • ')}</TableCell>
              </TableRow>
              {getLinksRow(links)}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </motion.div>
  )
}

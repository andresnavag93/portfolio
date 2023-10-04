import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
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

export const ProjectDetail = () => {
  const navigate = useNavigate()

  const { title, subtitle, image, area, description, features } = ALL_DATA[40]
  const { client, classification, technologies, links, developedIn } = features

  const parseLinks = (links: string[][]) => {
    if (links.length <= 0) return null

    return links.map((values: string[], i: number) => (
      <span key={values[0]}>
        <a href={values[1]} target="_blank" rel="noreferrer">
          {values[0]}
        </a>
        {!(i === links.length - 1) && ', '}
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

  const imgUrl = new URL(`../assets/images/${image}`, import.meta.url).href
  return (
    <>
      <Button onClick={() => { navigate(-1) }} sx={{ position: 'absolute', top: 80, left: 20 }}>
        Back
      </Button>
      <WebTitle title={title} />
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} sx={{ mt: 5 }}>
        <img src={imgUrl} alt="" style={{ width: '100%', maxWidth: '300px' }} />
        <Stack sx={{ width: '100%', maxWidth: '300px' }} direction='column'>
          <Typography variant="h5"> {subtitle} </Typography>
          <Typography> {area.name} </Typography>
        </Stack>
      </Stack>

      { }
      <Typography variant="h4" sx={{ mt: 5 }}> About this project </Typography>
      <Typography sx={{ width: '100%', maxWidth: '700px', mt: 3 }}> {description} </Typography>
      <Box sx={{ overflow: 'auto', mt: 5 }} component={Paper}>
        <Box sx={{ width: '100%', maxWidth: '700px', display: 'table', tableLayout: 'fixed' }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Features</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
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
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Technologies
                </TableCell>
                <TableCell align="left">{technologies?.join(', ')}</TableCell>
              </TableRow>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Developed In
                </TableCell>
                <TableCell align="left">{developedIn}</TableCell>
              </TableRow>
              {getLinksRow(links)}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </>
  )
}

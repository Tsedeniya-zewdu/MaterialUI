import Container from '@mui/material/Container'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import ImageCollage from '../component/ImageCollage.js'
import CustomizedAccordions from '../component/Accordian.js'
import { BottomNavigation, Paper } from "@mui/material";
import BasicModal from '../component/Modal.js'
function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the world
      </Typography>
      <Box marginTop={3} sx={{ display: 'flex' }}>
        <img
          src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
          height={350}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Welcome to the dazzling heart of Nevada – Las Vegas! Our comprehensive
          tour is designed to give you an immersive experience of the city that
          never sleeps. From the glitz and glamour of the iconic Las Vegas Strip
          to the serene beauty of the surrounding desert, our expertly guided
          tour ensures you won't miss a thing.
        </Typography>
      </Box>
      <Box marginBottom={2}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently asked questions
        </Typography>
              <CustomizedAccordions />
              <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels         
        >
          <BasicModal />
        </BottomNavigation>
      </Paper>
      </Box>
    </Container>
  )
}
export default Tour

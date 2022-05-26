import {Typography, IconButton, Box} from "@mui/material"
import {Upload as UploadIcon, Close as CloseIcon} from "@mui/icons-material"


export const FileUpload = () => {
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    mt={5}
    flexDirection="column"
  >
    <Box         
    display="flex"
    justifyContent="center"
    alignItems="center"
    >
      <Typography variant="body1"> Sample.pdf</Typography>
      <IconButton>
          <CloseIcon/>
      </IconButton>
    </Box>
    <IconButton>
      <UploadIcon/>
    </IconButton>
  </Box>
  )
}


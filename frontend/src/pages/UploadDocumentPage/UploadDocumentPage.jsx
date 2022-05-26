import React from 'react'

export const UploadDocumentPage = () => {
  return (
    <Container
    maxWidth="lg"
    sx={{
      my: 10,
    }}
  >
          <Typography variant="h4" mb={10} textAlign="center" fontFamily={"areal"}>
        Upload Document
      </Typography> 
      <Typography variant="h6" textAlign="left" fontFamily={"areal"}>
               Document Type :
             </Typography>

              <Box sx={{ minWidth: 120 }}>
           <FormControl fullWidth>
             <InputLabel id="demo-simple-select-label">Panel Member</InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Supervisor"
         
                >
                <MenuItem value={10}>pdf</MenuItem>
               <MenuItem value={20}>word</MenuItem>
               <MenuItem value={30}>ppt</MenuItem>
               <MenuItem value={40}>image</MenuItem>
               
               </Select>
           </FormControl>
           <Box
            sx={{
              my: 4,
              px: 30,
              display: "flex",
              flexDirection: "column",
              rowGap: 2,
            }}
          >
            <Button variant="contained">Submit</Button>
          </Box>
         </Box>
      </Container>

  )
}


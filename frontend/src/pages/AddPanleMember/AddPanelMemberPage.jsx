import React from "react";
import {
  Button,
  Container,
  Paper,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const AddPanelMemberPage = () => {
  return (
    <Container
    maxWidth="lg"
    sx={{
      my: 10,
    }}
  >
          <Typography variant="h4" mb={10} textAlign="center" fontFamily={"areal"}>
        Add Panel Members
      </Typography> 
      <Paper
         elevation={8}
        sx={{
          py: 3,
          mx: 20,
        }}
      >
              <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            mx: 4,
            rowGap: 4,
          }}
        >
                    <Typography variant="h6" textAlign="left" fontFamily={"areal"}>
          Group ID :
        </Typography>
        <Typography variant="h6" textAlign="left" fontFamily={"areal"}>
          Research Field :
        </Typography>
        <Typography variant="h6" textAlign="left" fontFamily={"areal"}>
               Choose member 1 :
             </Typography>

              <Box sx={{ minWidth: 120 }}>
           <FormControl fullWidth>
             <InputLabel id="demo-simple-select-label">Panel Member</InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Supervisor"
         
                >
                <MenuItem value={10}>MR Silva</MenuItem>
               <MenuItem value={20}>MS Perera</MenuItem>
               <MenuItem value={30}>MS Dilani Fonseka</MenuItem>
               <MenuItem value={40}>MR Rudrigu</MenuItem>
               
               </Select>
           </FormControl>
         </Box>

         <Typography variant="h6" textAlign="left" fontFamily={"areal"}>
               Choose Member 2 :
             </Typography>

              <Box sx={{ minWidth: 120 }}>
           <FormControl fullWidth>
             <InputLabel id="demo-simple-select-label">Panel Member</InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Supervisor"
         
                >
                <MenuItem value={10}>MR Silva</MenuItem>
               <MenuItem value={20}>MS Perera</MenuItem>
               <MenuItem value={30}>MS Dilani Fonseka</MenuItem>
               <MenuItem value={40}>MR Rudrigu</MenuItem>
               
               </Select>
           </FormControl>
         </Box>

         <Typography variant="h6" textAlign="left" fontFamily={"areal"}>
               Choose member 3 :
             </Typography>

              <Box sx={{ minWidth: 120 }}>
           <FormControl fullWidth>
             <InputLabel id="demo-simple-select-label">Panel Member</InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Supervisor"
         
                >
                <MenuItem value={10}>MR Silva</MenuItem>
               <MenuItem value={20}>MS Perera</MenuItem>
               <MenuItem value={30}>MS Dilani Fonseka</MenuItem>
               <MenuItem value={40}>MR Rudrigu</MenuItem>
               
               </Select>
           </FormControl>
         </Box>

         <Typography variant="h6" textAlign="left" fontFamily={"areal"}>
               Choose member 4 :
             </Typography>

              <Box sx={{ minWidth: 120 }}>
           <FormControl fullWidth>
             <InputLabel id="demo-simple-select-label">Panel Member</InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Supervisor"
         
                >
                <MenuItem value={10}>MR Silva</MenuItem>
               <MenuItem value={20}>MS Perera</MenuItem>
               <MenuItem value={30}>MS Dilani Fonseka</MenuItem>
               <MenuItem value={40}>MR Rudrigu</MenuItem>
               
               </Select>
           </FormControl>
         </Box>

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


            </Box>  </Paper> 
  </Container>
    
  )
}


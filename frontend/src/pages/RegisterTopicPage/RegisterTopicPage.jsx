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

export const Registertopic = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 10,
      }}
    >
      <Typography variant="h4" mb={10} textAlign="center" fontFamily={"areal"}>
        Register Your Topic ..
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
        ><br/>
        <Typography variant="h6" textAlign="left" fontFamily={"areal"}>
          Select Research Feild :
        </Typography>

         <Box sx={{ minWidth: 120 }}>
           <FormControl fullWidth>
             <InputLabel id="demo-simple-select-label">Research Feild</InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Research Feild"
         
                >
                <MenuItem value={10}> Safety and security of software development</MenuItem>
               <MenuItem value={20}>Defect prevention techniques</MenuItem>
               <MenuItem value={30}>Fault tolerance methods could be devised</MenuItem>
               <MenuItem value={40}>Faults containments specially once the products are launched in the market</MenuItem>
               <MenuItem value={50}>Data mining semantic-web-mining</MenuItem>
               <MenuItem value={60}>Testing-software</MenuItem>
               </Select>
           </FormControl>
         </Box>


             <Typography variant="h6" textAlign="left" fontFamily={"areal"}>
               Discussion / Topic :
             </Typography>

              <TextField></TextField>



             <Typography variant="h6" textAlign="left" fontFamily={"areal"}>
               Choose Supervisor :
             </Typography>

              <Box sx={{ minWidth: 120 }}>
           <FormControl fullWidth>
             <InputLabel id="demo-simple-select-label">Supervisor</InputLabel>
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

      </Box>
      </Paper>
    </Container>
  );
};

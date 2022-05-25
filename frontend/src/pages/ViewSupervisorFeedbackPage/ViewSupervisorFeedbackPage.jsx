import React from "react";
import {
  Button,
  Container,
  Paper,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const ViewSupervisorFeedbackPage = () => {
  return (
    <Container>
        <Box sx={{
             my: 10,
             maxwidth:50,
         }} >
          
          <TextField textAlign="left" placeholder="Search" > Search <SearchIcon /></TextField> 

        </Box>


        
    </Container>
  )
}
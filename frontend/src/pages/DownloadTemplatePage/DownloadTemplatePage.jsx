import React from 'react';
import {
	TableHead,
	TableRow,
	Paper,
	Table,
	TableContainer,
	TableCell,
	TextField,
	TableBody,
} from "@mui/material";
import {
  Button,
  Container,
  Typography,
  Box,
 
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { StyledTableCell } from '../../components/StyledTableCell/StyledTableCell';



const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const rows = [
  "IEEE Conference Template",
  "MS Word Template for Transaction",
   "Conference Template"
 
];



export const DownloadTemplatePage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 10,
      }}
    >
      <Typography variant="h4" mb={10} textAlign="center" fontFamily={"areal"}>
        Download Templates ..
      </Typography>
      
      <Box sx={{display:"flex" , justifyContent:"center"}}>
      <TableContainer component={Paper} sx={{ maxWidth: 900 ,}}  >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
             
            <StyledTableCell>Templates</StyledTableCell>
            <StyledTableCell >Download</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,i) => (
            <StyledTableRow key={i}>
              <StyledTableCell  scope="row">
                {row}
              </StyledTableCell>
              <StyledTableCell >Download</StyledTableCell>
             
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
   



    </Container>
  )
}
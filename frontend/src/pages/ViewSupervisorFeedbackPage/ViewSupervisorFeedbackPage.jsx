import React from "react";
import {
  Button,
  Container,
  Paper,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
// import { StyledTableCell } from "../StyledTableCell/StyledTableCell";
import SearchIcon from '@mui/icons-material/Search';


export const ViewSupervisorFeedbackPage = () => {

    const values = [];

  return (
        
    <Container>

        <TableRow hover>
			{values.map((value, index) => (
				<TableCell align="center" key={index}>
					{value}
				</TableCell>
			))}
		</TableRow>

        <Box sx={{
             my: 10,
             maxwidth:50,
         }} >
          
          <Typography variant="h4" mb={5} fontFamily={"areal"}>
			 View Supervisor Feedback
			</Typography>

          <TextField textAlign="left" placeholder="Search" > Search <SearchIcon /></TextField> 

        </Box>
         

			

    </Container>
  )
}
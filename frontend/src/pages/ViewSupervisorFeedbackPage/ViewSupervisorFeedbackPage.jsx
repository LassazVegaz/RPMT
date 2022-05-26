import React from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  TableHead,
	TableRow,
	Table,
	TableContainer,
	TableCell,
	TableBody,
  InputBase,
} from "@mui/material";

import { StyledTableCell } from "../../components/StyledTableCell/StyledTableCell";



const SchemaRow = () => {
	const values = ["AF_01", "Testing" ,"MR Perea","Approved"];

	return (
		<TableRow hover>
			{values.map((value, index) => (
				<TableCell key={index} align="center">
					{value}
				</TableCell>
			))}
			
		</TableRow>
	);
};



 export const ViewSupervisorFeedbackPage = ({isCoSupervisor=false}) => {
   const headers = ["GroupID", "Topic", "Supervisor" , "Feedback"];
   if (isCoSupervisor)
    headers[2] = "Co-Supervisor"
  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 10,
      }}
    >
      <Typography variant="h4" mb={10} textAlign="center" fontFamily={"areal"}>
        View Supervisor Feedback ..
      </Typography>

  <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 , mb: 5}}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search google maps' }}

      />
    </Paper>
      

      <TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow
						sx={{
							backgroundColor: "palette.common.black",
						}}
					>
						{headers.map((header, index) => (
							<StyledTableCell
							align="center"
								key={index}
							
							>
								{header}
							</StyledTableCell>
						))}
					</TableRow>
				</TableHead>

				<TableBody>
					<SchemaRow />
					<SchemaRow />
					<SchemaRow />
				</TableBody>
			</Table>
		</TableContainer>

      </Container>
  )
}


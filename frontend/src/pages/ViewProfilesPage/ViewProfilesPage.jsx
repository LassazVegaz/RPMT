import { Delete, Edit } from "@mui/icons-material";
import {
    Container,
	Paper,
	Table,
	TableBody,
    TableCell,
	TableContainer,
	TableHead,
    Avatar,
    Box,
	TableRow,
    IconButton,
} from "@mui/material";
import { StyledTableCell } from "../../components/StyledTableCell/StyledTableCell";

const ProfileRow = () => {
	const values = [ "IT101", "Oshadhi", "oshadhi@oshadhi.com", "Software Engineering"];

	return (
		<TableRow hover >
            <TableCell align="center">
                <Box display="flex" justifyContent="center" >
                <Avatar />
                </Box>
            </TableCell>
			{values.map((value, index) => (
				<TableCell align="center" key={index}>
					{value}
				</TableCell>
			))}
            <TableCell align="center">
                <IconButton>
                    <Edit/>
                </IconButton>
                <IconButton>
                   <Delete/>
                </IconButton>   
            </TableCell>
		</TableRow>
	);
};



export const ViewProfilesPage = () => {
    const tableHeaders = ["Picture","ID", "Name", "Email", "Related Field", "Update"];
  return (
    <Container maxWidth="lg"     sx={{
        my: 10,
      }}>
          <TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow
						sx={{
							backgroundColor: "palette.common.black",
						}}
					>
						{tableHeaders.map((header, index) => (
							<StyledTableCell align="center" key={index}>
								{header}
							</StyledTableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
                            <ProfileRow/>
                            <ProfileRow/>
                            <ProfileRow/>
                            
				</TableBody>
			</Table>
		</TableContainer>


    </Container>
  )
}


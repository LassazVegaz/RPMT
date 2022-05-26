import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
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
    ToggleButtonGroup,
    ToggleButton,
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
                    <EditIcon/>
                </IconButton>
                <IconButton>
                   <DeleteIcon/>
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
          				<ToggleButtonGroup exclusive fullWidth sx={{mb:5}}>
						<ToggleButton>Co-Supervisors</ToggleButton>
						<ToggleButton>Supervisors</ToggleButton>
						<ToggleButton>Panel Members</ToggleButton>
                        <ToggleButton>Students</ToggleButton>
					    </ToggleButtonGroup>
            
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


import { Add } from "@mui/icons-material";
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

const panelRow = () => {
const values = [ "G001"];
return (
    <TableRow hover >
        {values.map((value, index) => (
            <TableCell align="center" key={index}>
                {value}
            </TableCell>
        ))}
        <TableCell align="center">
            <IconButton>
                <Add/>
            </IconButton>  
        </TableCell>
    </TableRow>
);
};

export const AllocatePanelMembersPage = () => {
    const tableHeaders = ["GID", "Add Panel Members"];
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
				</TableBody>
			</Table>
		</TableContainer>

          </Container>
  )
}


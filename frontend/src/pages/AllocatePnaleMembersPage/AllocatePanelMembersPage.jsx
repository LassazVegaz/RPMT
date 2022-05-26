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


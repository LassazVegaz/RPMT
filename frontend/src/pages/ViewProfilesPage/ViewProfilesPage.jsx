import {
    Container,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { StyledTableCell } from "../StyledTableCell/StyledTableCell";

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

				</TableBody>
			</Table>
		</TableContainer>


    </Container>
  )
}


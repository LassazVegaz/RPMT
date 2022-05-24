import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { StyledTableCell } from "../StyledTableCell/StyledTableCell";

const StudentRow = () => {
	const values = ["IT101", "Oshadhi", "oshadhi@oshadhi.com", "Leader"];

	return (
		<TableRow hover>
			{values.map((value, index) => (
				<TableCell align="center" key={index}>
					{value}
				</TableCell>
			))}
		</TableRow>
	);
};

export const StudentGroupView = () => {
	const tableHeaders = ["ID", "Name", "Email", "Membership"];

	return (
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
					<StudentRow />
					<StudentRow />
					<StudentRow />
				</TableBody>
			</Table>
		</TableContainer>
	);
};

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
import { StyledTableCell } from "../StyledTableCell/StyledTableCell";

const SchemaRow = () => {
	const values = ["Marking schema area", "50"];

	return (
		<TableRow hover>
			{values.map((value, index) => (
				<TableCell key={index} align={index === 0 ? "left" : "center"}>
					{value}
				</TableCell>
			))}
			<TableCell align="center">
				<TextField
					size="small"
					variant="standard"
					sx={{
						input: {
							textAlign: "center",
						},
					}}
				/>
			</TableCell>
		</TableRow>
	);
};

export const MarkingSchemeView = () => {
	const headers = ["Area", "Allocated Marks", "Marks Given"];

	return (
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
								align={index === 0 ? "left" : "center"}
								key={index}
								width={index === 0 ? "50%" : "25%"}
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
	);
};

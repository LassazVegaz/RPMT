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

const SchemaRow = ({ area, onChange, editable }) => {
	const _allocatedMarks = Number(area.allocatedMarks);

	return (
		<TableRow hover>
			<TableCell align="left">{area.name}</TableCell>
			<TableCell align="center">{area.allocatedMarks}</TableCell>
			<TableCell align="center">
				<TextField
					value={area.marks}
					size="small"
					variant="standard"
					sx={{
						input: {
							textAlign: "center",
						},
					}}
					onChange={(e) => {
						if (!editable) return;
						const val = Number(e.target.value);
						if (val <= _allocatedMarks && val >= 0)
							onChange(e.target.value);
					}}
				/>
			</TableCell>
		</TableRow>
	);
};

export const MarkingSchemeView = ({ areas, editable, onChange }) => {
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
					{areas.map((area, index) => (
						<SchemaRow
							area={area}
							key={area.id}
							editable={editable}
							onChange={(marks) => onChange(index, marks)}
						/>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

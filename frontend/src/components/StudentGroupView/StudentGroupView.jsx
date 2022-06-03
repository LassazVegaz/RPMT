import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useGroups } from "../../hooks/groups.hook";
import { StyledTableCell } from "../StyledTableCell/StyledTableCell";

const StudentRow = ({ student, membership }) => {
	return (
		<TableRow hover>
			<TableCell align="center">{student.id}</TableCell>
			<TableCell align="center">
				{student.firstName} {student.lastName}
			</TableCell>
			<TableCell align="center">{student.user.email}</TableCell>
			<TableCell align="center">{membership}</TableCell>
		</TableRow>
	);
};

const tableHeaders = ["ID", "Name", "Email", "Membership"];

export const StudentGroupView = ({ id }) => {
	const { getGroup } = useGroups();
	const [students, setStudents] = useState([]);

	useEffect(() => {
		loadStudents();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	const loadStudents = async () => {
		const group = await getGroup(id);
		setStudents(group.students);
	};

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
					{students.map((student, i) => (
						<StudentRow
							student={student}
							key={i}
							membership={i === 0 ? "Leader" : "Member"}
						/>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

import { styled, TableCell, tableCellClasses } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.primary.contrastText,
	},
}));

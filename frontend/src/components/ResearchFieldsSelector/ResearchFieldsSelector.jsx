import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useSelector } from "react-redux";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const getStyles = (resField, selectedFieldIds, theme) => {
	return {
		fontWeight: selectedFieldIds.includes(resField.id)
			? theme.typography.fontWeightMedium
			: theme.typography.fontWeightRegular,
	};
};

const SelectedValuesDisplay = ({ selectedFieldIds, researchFields }) => {
	const theme = useTheme();
	return (
		<Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
			{selectedFieldIds.map((fieldId) => {
				const field = researchFields.find((r) => r.id === fieldId);
				return (
					<Chip
						key={fieldId}
						label={field.name}
						style={getStyles(field, selectedFieldIds, theme)}
					/>
				);
			})}
		</Box>
	);
};

export const ResearchFieldsSelector = ({
	selectedFieldIds,
	setSelectedFieldIds,
}) => {
	const theme = useTheme();
	const researchFields = useSelector((s) => s.researchFields);

	const title = "Research Fields";

	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		setSelectedFieldIds(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};

	const menuItems = researchFields.map((resField) => (
		<MenuItem
			key={resField.id}
			value={resField.id}
			style={getStyles(resField, selectedFieldIds, theme)}
		>
			{resField.name}
		</MenuItem>
	));

	return (
		<FormControl>
			<InputLabel id="demo-multiple-chip-label">{title}</InputLabel>
			<Select
				labelId="demo-multiple-chip-label"
				multiple
				value={selectedFieldIds}
				onChange={handleChange}
				input={<OutlinedInput label={title} />}
				renderValue={(selected) => (
					<SelectedValuesDisplay
						selectedFieldIds={selected}
						researchFields={researchFields}
					/>
				)}
				MenuProps={MenuProps}
			>
				{menuItems}
			</Select>
		</FormControl>
	);
};

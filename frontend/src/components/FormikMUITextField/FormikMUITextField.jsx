import { TextField } from "@mui/material";

export const FormikMUITextField = ({ label, name, form, type = "text" }) => {
	return (
		<TextField
			value={form.values[name]}
			onChange={form.handleChange}
			name={name}
			label={label}
			error={form.touched[name] && Boolean(form.errors[name])}
			helperText={form.touched[name] && form.errors[name]}
			type={type}
		/>
	);
};

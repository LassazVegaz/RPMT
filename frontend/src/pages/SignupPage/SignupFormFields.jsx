import {
	Box,
	TextField,
	FormControlLabel,
	Button,
	Checkbox,
	ToggleButton,
	ToggleButtonGroup,
} from "@mui/material";
import { FormikMUITextField } from "../../components/FormikMUITextField/FormikMUITextField";
import { GENDERS } from "../../constants/genders.constants";
import { USER_ROLES } from "../../constants/user-roles.constants";

export const SignupFormFields = ({ form }) => {
	const handleToggleButtonChange = (name) => (_, value) => {
		if (value) form.setFieldValue(name, value);
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				rowGap: 4,
				px: 4,
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<FormikMUITextField
					label="First Name"
					name="firstName"
					form={form}
				/>
				<FormikMUITextField
					label="Last Name"
					name="lastName"
					form={form}
				/>
			</Box>

			<FormikMUITextField
				label="Email"
				name="email"
				form={form}
				type="email"
			/>
			<FormikMUITextField
				label="Phone"
				name="phone"
				form={form}
				type="tel"
			/>

			<ToggleButtonGroup
				value={form.values.gender}
				exclusive
				fullWidth
				onChange={handleToggleButtonChange("gender")}
			>
				<ToggleButton name="gender" value={GENDERS.MALE}>
					Male
				</ToggleButton>
				<ToggleButton name="gender" value={GENDERS.FEMALE}>
					Female
				</ToggleButton>
			</ToggleButtonGroup>

			<FormikMUITextField
				label="Password"
				name="password"
				form={form}
				type="password"
			/>
			<FormikMUITextField
				label="Confirm Password"
				name="confirmPassword"
				form={form}
				type="password"
			/>

			<ToggleButtonGroup
				value={form.values.role}
				exclusive
				fullWidth
				onChange={handleToggleButtonChange("role")}
			>
				<ToggleButton name="role" value={USER_ROLES.CO_SUPERVISOR}>
					Co-Supervisor
				</ToggleButton>
				<ToggleButton name="role" value={USER_ROLES.SUPERVISOR}>
					Supervisor
				</ToggleButton>
				<ToggleButton name="role" value={USER_ROLES.PANEL_MEMBER}>
					Panel Member
				</ToggleButton>
			</ToggleButtonGroup>

			<TextField label="Research Area" />

			<FormControlLabel
				label="I agree to the given terms and conditions"
				control={<Checkbox />}
			/>

			<Box
				sx={{
					mt: 5,
					display: "flex",
					flexDirection: "column",
					rowGap: 2,
				}}
			>
				<Button variant="contained" type="submit">
					Sign Up
				</Button>
				<Button variant="outlined" color="secondary">
					Sign In
				</Button>
			</Box>
		</Box>
	);
};

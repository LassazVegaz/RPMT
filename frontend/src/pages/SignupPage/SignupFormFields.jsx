import {
	Box,
	FormControlLabel,
	Button,
	Checkbox,
	ToggleButton,
	ToggleButtonGroup,
} from "@mui/material";
import { FormikMUITextField } from "../../components/FormikMUITextField/FormikMUITextField";
import { ResearchFieldsSelector } from "../../components/ResearchFieldsSelector/ResearchFieldsSelector";
import { GENDERS } from "../../constants/genders.constants";
import { USER_ROLES } from "../../constants/user-roles.constants";
import { useNavigate } from "react-router-dom";

export const SignupFormFields = ({ form }) => {
	const navigate = useNavigate();

	const handleToggleButtonChange = (name) => (_, value) => {
		if (value) form.setFieldValue(name, value);
	};

	const displayFieldsSelector =
		form.values.role === USER_ROLES.CO_SUPERVISOR ||
		form.values.role === USER_ROLES.SUPERVISOR;

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
				<ToggleButton name="role" value={USER_ROLES.STUDENT}>
					Student
				</ToggleButton>
			</ToggleButtonGroup>

			{displayFieldsSelector && (
				<ResearchFieldsSelector
					selectedFieldIds={form.values.researchFieldIds}
					setSelectedFieldIds={(values) =>
						form.setFieldValue("researchFieldIds", values)
					}
					error={
						Boolean(form.errors.researchFieldIds) &&
						Boolean(form.touched.researchFieldIds)
					}
					errorMessage={form.errors.researchFieldIds}
				/>
			)}

			<FormControlLabel
				value={form.values.agree}
				name="agree"
				onChange={form.handleChange}
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
				<Button
					variant="contained"
					type="submit"
					disabled={!form.values.agree}
				>
					Sign Up
				</Button>
				<Button
					variant="outlined"
					color="secondary"
					onClick={() => navigate("/login")}
				>
					Sign In
				</Button>
			</Box>
		</Box>
	);
};

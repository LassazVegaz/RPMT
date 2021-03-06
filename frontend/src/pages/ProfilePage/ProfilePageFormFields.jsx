import { Box, Button, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { FormikMUITextField } from "../../components/FormikMUITextField/FormikMUITextField";
import { ResearchFieldsSelector } from "../../components/ResearchFieldsSelector/ResearchFieldsSelector";
import { USER_ROLES } from "../../constants/user-roles.constants";

export const ProfilePageFormFields = ({ form, staticData, onReset }) => {
	const auth = useSelector((s) => s.auth);

	const isSupervisorType =
		auth.role === USER_ROLES.CO_SUPERVISOR ||
		auth.role === USER_ROLES.SUPERVISOR;

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				mt: 8,
				rowGap: 5,
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<FormikMUITextField
					name="firstName"
					label="First Name"
					form={form}
				/>

				<FormikMUITextField
					name="lastName"
					label="Last Name"
					form={form}
				/>
			</Box>

			<FormikMUITextField name="phone" label="Phone" form={form} />

			{isSupervisorType && (
				<ResearchFieldsSelector
					selectedFieldIds={form.values.researchFieldIds}
					setSelectedFieldIds={(ids) =>
						form.setFieldValue("researchFieldIds", ids)
					}
					error={
						Boolean(form.touched.researchFieldIds) &&
						Boolean(form.errors.researchFieldIds)
					}
					errorMessage={form.errors.researchFieldIds}
				/>
			)}

			<TextField label="Email" value={staticData.email} />

			<TextField label="Gender" value={staticData.gender} />

			<TextField label="Role" value={staticData.role} />

			<Box
				sx={{
					display: "flex",
					justifyContent: "flex-end",
					columnGap: 5,
					mt: 3,
				}}
			>
				<Button variant="outlined" color="secondary" onClick={onReset}>
					Reset
				</Button>
				<Button variant="contained" type="submit">
					Save
				</Button>
			</Box>
		</Box>
	);
};

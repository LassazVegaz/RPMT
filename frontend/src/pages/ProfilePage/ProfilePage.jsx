import { useEffect, useState } from "react";
import {
	Box,
	Button,
	Container,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { ProfileNameDisplay } from "../../components/ProfileNameDisplay/ProfileNameDisplay";
import { ProfilePicture } from "../../components/ProfilePicture/ProfilePicture";
import { FormikMUITextField } from "../../components/FormikMUITextField/FormikMUITextField";
import { ResearchFieldsSelector } from "../../components/ResearchFieldsSelector/ResearchFieldsSelector";
import { useSupervisors } from "../../hooks/supervisors.hook";

const initialValues = {
	firstName: "",
	lastName: "",
	phone: "",
	researchFieldIds: [],
	photo: null,
};

export const ProfilePage = () => {
	const auth = useSelector((s) => s.auth);
	const { updateSupervisor } = useSupervisors();
	const [staticData, setStaticData] = useState({
		email: "",
		gender: "",
		role: "",
	});
	const [photoUrl, setPhotoUrl] = useState(null);

	const form = useFormik({
		initialValues,
		onSubmit: async (values) => {
			await updateSupervisor(auth.id, values);
		},
	});

	useEffect(() => {
		resetForm();

		let gender = auth.gender ?? auth.staffMember?.gender;
		gender = gender.charAt(0).toUpperCase() + gender.slice(1);
		const email = auth.staffMember?.user.email ?? auth.user.email;
		let role = auth.staffMember?.user.role ?? auth.user.role;
		role = role.charAt(0).toUpperCase() + role.slice(1);

		setStaticData({
			email,
			gender,
			role,
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [auth]);

	const resetForm = () => {
		form.setValues({
			firstName: auth.staffMember?.firstName ?? auth.firstName,
			lastName: auth.staffMember?.lastName ?? auth.lastName,
			phone: auth.staffMember?.phone ?? auth.phone,
			researchFieldIds: auth.researchFieldIds,
			photo: null,
		});
		setPhotoUrl(auth.photoUrl ?? auth.staffMember?.photoUrl);
	};

	return (
		<Container maxWidth="lg">
			<Paper
				onSubmit={form.handleSubmit}
				component="form"
				elevation={8}
				sx={{
					my: 10,
					p: 5,
					mx: 15,
				}}
			>
				<Typography variant="h4">
					Manager your beautiful account here...
				</Typography>

				<ProfilePicture
					controlName="photo"
					imageUrl={photoUrl}
					onChange={(data) => {
						const { url, ...formData } = data;
						setPhotoUrl(url);
						form.setFieldValue("photo", formData);
					}}
					sx={{
						mx: "auto",
						mt: 8,
					}}
				/>

				<ProfileNameDisplay
					firstName={form.values.firstName}
					lastName={form.values.lastName}
					gender={form.values.gender}
					sx={{
						mt: 4,
					}}
				/>

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

					<FormikMUITextField
						name="phone"
						label="Phone"
						form={form}
					/>

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
						<Button
							variant="outlined"
							color="secondary"
							onClick={resetForm}
						>
							Reset
						</Button>
						<Button variant="contained" type="submit">
							Save
						</Button>
					</Box>
				</Box>
			</Paper>
		</Container>
	);
};

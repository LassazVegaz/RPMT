import { useEffect, useState } from "react";
import { Box, Container, Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { ProfileNameDisplay } from "../../components/ProfileNameDisplay/ProfileNameDisplay";
import { ProfilePicture } from "../../components/ProfilePicture/ProfilePicture";
import { FormikMUITextField } from "../../components/FormikMUITextField/FormikMUITextField";

const initialValues = {
	firstName: "",
	lastName: "",
	phone: "",
	researchFieldIds: [],
	photo: null,
};

export const ProfilePage = () => {
	const auth = useSelector((s) => s.auth);
	const [staticData, setStaticData] = useState({
		email: "",
		gender: "",
		role: "",
	});

	const form = useFormik({
		initialValues,
		onSubmit: console.log,
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
			photo: auth.staffMember?.photo ?? auth.photo,
		});
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
					imageSrc=""
					onChange={() => {}}
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

					<TextField label="Email" value={staticData.email} />

					<TextField label="Gender" value={staticData.gender} />

					<TextField label="Role" value={staticData.role} />
				</Box>
			</Paper>
		</Container>
	);
};

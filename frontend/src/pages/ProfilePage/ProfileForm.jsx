import { useEffect, useState } from "react";
import { Paper, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { ProfileNameDisplay } from "../../components/ProfileNameDisplay/ProfileNameDisplay";
import { ProfilePicture } from "../../components/ProfilePicture/ProfilePicture";
import { useSupervisors } from "../../hooks/supervisors.hook";
import { ProfilePageFormFields } from "./ProfilePageFormFields";

const initialValues = {
	firstName: "",
	lastName: "",
	phone: "",
	researchFieldIds: [],
	photo: null,
};

const validationSchema = Yup.object({
	firstName: Yup.string().required("First name is required"),
	lastName: Yup.string().required("Last name is required"),
	phone: Yup.string().required("Phone is required"),
	researchFieldIds: Yup.array().min(
		1,
		"At least one research field is required"
	),
});

export const ProfileForm = () => {
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
		validationSchema,
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
				gender={staticData.gender.toLowerCase()}
				sx={{
					mt: 4,
				}}
			/>

			<ProfilePageFormFields
				form={form}
				onReset={resetForm}
				staticData={staticData}
			/>
		</Paper>
	);
};

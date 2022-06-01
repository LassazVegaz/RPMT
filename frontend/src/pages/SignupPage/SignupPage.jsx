import { Avatar, Container, Paper, Typography, styled } from "@mui/material";
import { SignupFormFields } from "./SignupFormFields";
import { useFormik } from "formik";
import * as Yup from "yup";
import { USER_ROLES } from "../../constants/user-roles.constants";

const validationSchema = Yup.object({
	firstName: Yup.string().required("First name is required"),
	lastName: Yup.string().required("Last name is required"),
	email: Yup.string().email("Email is invalid").required("Email is required"),
	password: Yup.string()
		.min(8, "Password must be at least 8 characters")
		.required("Password is required"),
	confirmPassword: Yup.string().oneOf(
		[Yup.ref("password"), null],
		"Passwords must match"
	),
	phone: Yup.string().required("Phone is required"),
	role: Yup.string().required("Role is required"),
	researchFieldIds: Yup.array().when("role", {
		is: (role) =>
			role === USER_ROLES.CO_SUPERVISOR || role === USER_ROLES.SUPERVISOR,
		then: Yup.array().min(1, "At least one research field is required"),
		otherwise: Yup.array().notRequired(),
	}),
});

const initialValues = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
	phone: "",
	gender: "male",
	role: "co-supervisor",
	researchFieldIds: [],
	agree: false,
};

const UnderlinedText = styled(Typography)(({ theme }) => ({
	"&:after": {
		content: '""',
		display: "block",
		width: "40%",
		margin: "auto",
		marginTop: theme.spacing(1),
		height: 2,
		background: "linear-gradient(180deg, #055a0e, #00bcd4)",
	},
}));

export const SignupPage = () => {
	const form = useFormik({
		initialValues,
		validationSchema,
		onSubmit: console.log,
	});

	return (
		<Container
			maxWidth="lg"
			sx={{
				my: 8,
			}}
		>
			<Paper
				elevation={8}
				component="form"
				onSubmit={form.handleSubmit}
				sx={{
					py: 3,
					mx: 20,
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Avatar
					sx={{
						width: 100,
						height: 100,
						mb: 3,
						mx: "auto",
					}}
				/>

				<UnderlinedText variant="h5" mb={8} textAlign="center">
					Mr. John Doe
				</UnderlinedText>

				<SignupFormFields form={form} />
			</Paper>
		</Container>
	);
};

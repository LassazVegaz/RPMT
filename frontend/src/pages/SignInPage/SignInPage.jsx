import { Button, Container, Paper, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormikMUITextField } from "../../components/FormikMUITextField/FormikMUITextField";
import { useAuth } from "../../hooks/auth.hook";
import { useApi } from "../../hooks/api.hook";

const validationSchema = Yup.object({
	email: Yup.string().email("Email is invalid").required("Email is required"),
	password: Yup.string().required("Password is required"),
});

const initialValues = {
	email: "",
	password: "",
};

export const SignInPage = () => {
	const navigate = useNavigate();
	const { login } = useAuth();
	const { showNotification } = useApi();

	const form = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async (values) => {
			const res = await login(values.email, values.password);
			if (!res) showNotification("Invalid email or password", "error");
		},
	});

	return (
		<Container
			maxWidth="lg"
			sx={{
				my: 10,
			}}
		>
			<Paper
				elevation={8}
				sx={{
					py: 3,
					mx: 20,
				}}
			>
				<Typography variant="h4" mb={10} textAlign="center">
					Get back to your Account!!
				</Typography>

				<Box
					onSubmit={form.handleSubmit}
					component="form"
					sx={{
						display: "flex",
						flexDirection: "column",
						mx: 4,
						rowGap: 4,
					}}
				>
					<FormikMUITextField
						name="email"
						label="Email"
						type="email"
						form={form}
					/>
					<FormikMUITextField
						name="password"
						label="Password"
						type="password"
						form={form}
					/>

					<Box
						sx={{
							my: 4,
							px: 20,
							display: "flex",
							flexDirection: "column",
							rowGap: 2,
						}}
					>
						<Button type="submit" variant="contained">
							Sign In
						</Button>
						<Button
							variant="outlined"
							color="secondary"
							onClick={() => navigate("/")}
						>
							Sign Up
						</Button>
					</Box>
				</Box>
			</Paper>
		</Container>
	);
};

import React from "react";
import { Button, Container, Paper, Typography, Box } from "@mui/material";
import { FileUpload } from "../../components/FileUpload/FileUpload";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useSubmissions } from "../../hooks/submit-document.hook";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
	name: Yup.string().required("Name is required"),
});

const initialValues = {
	name: "",
};

export const SubmitDocuments = () => {
	const navigate = useNavigate();
	const { createSumission } = useSubmissions();
	const form = useFormik({
		validationSchema,
		initialValues,
		onSubmit: async (values) => {
			console.log(values);
			await createSumission({
				name: values.name,
			});
			navigate("/download-templates");
		},
	});

	return (
		<Container
			maxWidth="lg"
			sx={{
				my: 10,
			}}
		>
			<Typography
				variant="h4"
				mb={10}
				textAlign="center"
				fontFamily={"areal"}
			>
				Submit the Document Topic Document
			</Typography>

			<Paper
				elevation={8}
				sx={{
					py: 3,
					mx: 20,
				}}
			>
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
					<FileUpload />

					<Box
						sx={{
							my: 4,
							px: 30,
							display: "flex",
							flexDirection: "column",
							rowGap: 2,
						}}
					>
						<Button variant="contained" type="submit">
							Submit
						</Button>
					</Box>
				</Box>
			</Paper>
		</Container>
	);
};

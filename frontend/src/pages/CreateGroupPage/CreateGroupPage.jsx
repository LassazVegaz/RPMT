import React from "react";
import { Button, Container, Paper, Typography, Box } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import { FormikMUITextField } from "../../components/FormikMUITextField/FormikMUITextField";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  leader: Yup.string().required("Leader is required"),
  member02: Yup.string().required("member02 is required"),
  member03: Yup.string().required("member03 is required"),
  member04: Yup.string().required("member04 is required"),
});

const initialValues = {
  name: "",
  leader: "",
  member02: "",
  member03: "",
  member04: "",
};

export const CreateGroups = () => {
  const form = useFormik({
    validationSchema,
    initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 10,
      }}
    >
      <Typography variant="h4" mb={10} textAlign="center" fontFamily={"areal"}>
        Create Student Groups ..
      </Typography>

      <Paper
        elevation={8}
        sx={{
          py: 3,
          mx: 20,
        }}
      >
        <br />
        <br />
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
          <Typography variant="h6" textAlign="left" fontFamily={"areal"}>
            Group Name :
          </Typography>

          <FormikMUITextField
            name="name"
            label="Enter Group Name"
            form={form}
          />

          <Typography variant="h6" textAlign="left" fontFamily={"areal"}>
            Group Members :
          </Typography>

          <Typography variant="h7" textAlign="left">
            Leader :
            <FormikMUITextField
              sx={{
                display: "flex",
                flexDirection: "column",
                mx: 14,
              }}
              name="leader"
              lable="Leader"
              form={form}
            ></FormikMUITextField>
          </Typography>

          <Typography variant="h7" textAlign="left">
            Member 02 :
            <FormikMUITextField
              sx={{
                display: "flex",
                flexDirection: "column",
                mx: 14,
              }}
              name="member02"
              lable="Member 02"
              form={form}
            ></FormikMUITextField>
          </Typography>

          <Typography variant="h7" textAlign="left">
            Member 03 :
            <FormikMUITextField
              sx={{
                display: "flex",
                flexDirection: "column",
                mx: 14,
              }}
              name="member03"
              lable="Member 03"
              form={form}
            ></FormikMUITextField>
          </Typography>

          <Typography variant="h7" textAlign="left">
            Member 04 :
            <FormikMUITextField
              sx={{
                display: "flex",
                flexDirection: "column",
                mx: 14,
              }}
              name="member04"
              lable="Member 04"
              form={form}
            ></FormikMUITextField>
          </Typography>

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

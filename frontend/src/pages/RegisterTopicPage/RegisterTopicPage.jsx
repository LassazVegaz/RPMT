import React from "react";
import { Button, Container, Paper, Typography, Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useFormik } from "formik";
import { FormikMUITextField } from "../../components/FormikMUITextField/FormikMUITextField";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useTopic } from "../../hooks/register-topic.hook";
import { useSelector } from "react-redux";

const validationSchema = Yup.object({
  researchFieldId: Yup.string().required("Research Feild is required"),
  topic: Yup.string().required("Topic is required"),
  supervisorId: Yup.string().required("supervisorId is required"),
});

const initialValues = {
  researchFieldId: "",
  topic: "",
  supervisorId: "",
};

export const Registertopic = () => {
  const navigate = useNavigate();
  const { registerTopic } = useTopic();
  const form = useFormik({
    validationSchema,
    initialValues,
    onSubmit: async (values) => {
      await registerTopic({
        researchFieldId: values.researchFieldId,
        topic: values.topic,
        supervisorId: values.supervisorId,
      });
      navigate("/requests");
    },
  });

  const researchFields = useSelector((s) => s.researchFields);

  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 10,
      }}
    >
      <Typography variant="h4" mb={10} textAlign="center" fontFamily={"areal"}>
        Register Your Topic ..
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
          <br />
          <Typography variant="h6" textAlign="left" fontFamily={"areal"}>
            Select Research Feild :
          </Typography>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Research Feild
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Research Feild"
                name="researchFieldId"
                value={form.values.researchFieldId}
                onChange={form.handleChange}
              >
                {researchFields.map((resField) => (
                  <MenuItem value={resField.id}>{resField.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Typography variant="h6" textAlign="left" fontFamily={"areal"}>
            Discussion / Topic :
          </Typography>

          <FormikMUITextField
            name="topic"
            lable="Discussion /Topic"
            form={form}
          ></FormikMUITextField>

          <Typography variant="h6" textAlign="left" fontFamily={"areal"}>
            Choose supervisor :
          </Typography>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                supervisorId
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="supervisorId"
                name="supervisorId"
                value={form.values.supervisorId}
                onChange={form.handleChange}
              >
                <MenuItem value={10}>MR Silva</MenuItem>
                <MenuItem value={20}>MS Perera</MenuItem>
                <MenuItem value={30}>MS Dilani Fonseka</MenuItem>
                <MenuItem value={40}>MR Rudrigu</MenuItem>
              </Select>
            </FormControl>
          </Box>
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

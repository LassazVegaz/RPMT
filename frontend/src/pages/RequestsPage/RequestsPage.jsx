import {
  Button,
  Container,
  Paper,
  Typography,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object({
  coSupervisorId: Yup.string().required("coSupervisor Id is required"),
});

const initialValues = {
  coSupervisorId: "",
};

export const Requests = () => {
  const navigate = useNavigate();
  const form = useFormik({
    validationSchema,
    initialValues,
    onSubmit: async (values) => {
      await Requests({
        coSupervisorId: values.coSupervisorId,
      });
      navigate("/requests");
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
        Request Co- Supervisor
      </Typography>

      <Paper
        elevation={8}
        sx={{
          py: 3,
          mx: 20,
        }}
      >
        <Box
          onClick={form.handleSubmit}
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
            Choose Co - Supervisor :
          </Typography>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Co-Supervisor{" "}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="supervisorId"
                name="coSupervisorId"
                value={form.values.coSupervisorId}
                onChange={form.handleChange}
              >
                <MenuItem value={10}>MR Silva</MenuItem>
                <MenuItem value={20}>MS Perera</MenuItem>
                <MenuItem value={30}>MS Dilani Fonseka</MenuItem>
                <MenuItem value={40}>MR Rudrigu</MenuItem>
              </Select>
            </FormControl>
            <br />
            <br />
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
            <Button variant="contained">Submit</Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

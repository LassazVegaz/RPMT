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
import { useSupervisors } from "../../hooks/supervisors.hook";
import { useState, useEffect } from "react";
import { useProject } from "../../hooks/project.hook";

const validationSchema = Yup.object({
  coSupervisorId: Yup.string().required("coSupervisor Id is required"),
});

const initialValues = {
  coSupervisorId: "",
};

export const Requests = () => {
  const navigate = useNavigate();
  const { getAllSupervisors } = useSupervisors();
  const { assignSupervisor } = useProject();
  const [supervisors, setSupervisors] = useState([]);

  const form = useFormik({
    validationSchema,
    initialValues,
    onSubmit: async (values) => {
      await assignSupervisor(
        localStorage.getItem("projectId"),
        values.coSupervisorId
      );
      navigate("/submit-documents");
    },
  });

  useEffect(() => {
    getAllSupervisors({
      coSupervisorsOnly: true,
    }).then((res) => {
      setSupervisors(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 5,
      }}
    >
      <Typography variant="h4" mb={5} textAlign="center" fontFamily={"areal"}>
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
                {supervisors.map((supervisor) => (
                  <MenuItem value={supervisor.id} key={supervisor.id}>
                    {supervisor.staffMember.firstName}{" "}
                    {supervisor.staffMember.lastName}
                  </MenuItem>
                ))}
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
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

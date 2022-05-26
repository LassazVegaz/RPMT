import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FileUpload } from "../../components/FileUpload/FileUpload";
export const CreateSubmissionTypePage = () => {
  return (
      <Container
    maxWidth="lg"
    sx={{
      my: 10,
    }}
  >
    <Typography variant="h4" mb={10} textAlign="center" fontFamily={"areal"}>
      Create Submission Type
    </Typography>

    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Document Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Supervisor"
        >
          <MenuItem value={10}>Final Thesis</MenuItem>
          <MenuItem value={20}>Proposal Document</MenuItem>
          <MenuItem value={30}>Topic Assessment forms</MenuItem>
          <MenuItem value={40}>Presentation slides</MenuItem>
        </Select>
      </FormControl>
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
  </Container>
  )
}

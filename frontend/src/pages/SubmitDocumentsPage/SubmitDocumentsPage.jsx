import React from "react";
import {
  Button,
  Container,
  Paper,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import { FileUpload } from "../../components/FileUpload/FileUpload";

export const SubmitDocumentsPage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 10,
      }}
    >
      <Typography variant="h4" mb={10} textAlign="center" fontFamily={"areal"}>
        Submit the Document ..
      </Typography>

      <Paper
        elevation={8}
        sx={{
          py: 3,
          mx: 20,
        }}
      >
        <Box
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
            Group Name :
          </Typography>

          <TextField></TextField>

          <Typography variant="h6" textAlign="left" fontFamily={"areal"}>
            Submit the document :
          </Typography>

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
            <Button variant="contained">Submit</Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

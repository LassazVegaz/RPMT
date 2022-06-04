import React, { useState } from "react";
import { Button, Container, Paper, Typography, Box } from "@mui/material";
import { FileUpload } from "../../components/FileUpload/FileUpload";
import { useNavigate } from "react-router-dom";
import { useProject } from "../../hooks/project.hook";

export const SubmitDocuments = () => {
  const navigate = useNavigate();
  const { createTopicDocSubmission } = useProject();
  const [document, setDocument] = useState(null);

  const handleSubmit = async () => {
    await createTopicDocSubmission({ document });
    navigate("/download-templates");
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 10,
      }}
    >
      <Typography variant="h4" mb={10} textAlign="center" fontFamily={"areal"}>
        Submit the Topic Document
      </Typography>

      <Paper
        elevation={8}
        sx={{
          py: 3,
          mx: 20,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mx: 4,
            rowGap: 4,
          }}
        >
          <FileUpload document={document} onChange={setDocument} />

          <Box
            sx={{
              my: 4,
              px: 30,
              display: "flex",
              flexDirection: "column",
              rowGap: 2,
            }}
          >
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={!Boolean(document)}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

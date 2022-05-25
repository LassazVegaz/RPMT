import React from "react";
import {
  Button,
  Container,
  Paper,
  Typography,
  Box,
  TextField,
} from "@mui/material";

export const CreateGroups = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 10,
      }}
    >
      <Typography variant="h4" mb={10} textAlign="center">
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

          <TextField label="Group Name" />

          <Typography variant="h6" textAlign="left" fontFamily={"areal"}>
            Group Members :
          </Typography>

          <Typography variant="h7" textAlign="left">
            Leader :
            <TextField
              sx={{
                display: "flex",
                flexDirection: "column",
                mx: 14,
                rowGap: 4,
              }}
            ></TextField>
          </Typography>

          <Typography variant="h7" textAlign="left">
            Member 02 :
            <TextField
              sx={{
                display: "flex",
                flexDirection: "column",
                mx: 14,
                rowGap: 4,
              }}
            ></TextField>
          </Typography>

          <Typography variant="h7" textAlign="left">
            Member 03 :
            <TextField
              sx={{
                display: "flex",
                flexDirection: "column",
                mx: 14,
                rowGap: 4,
              }}
            ></TextField>
          </Typography>

          <Typography variant="h7" textAlign="left">
            Member 04 :
            <TextField
              sx={{
                display: "flex",
                flexDirection: "column",
                mx: 14,
                rowGap: 4,
              }}
            ></TextField>
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
            <Button variant="contained">Submit</Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

import React from "react";
import {
  Button,
  Container,
  Paper,
  Typography,
  Box,
  TextField,
} from "@mui/material";

export const CreateMarkingScheme = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 10,
      }}
    >
      <Typography variant="h4" mb={10} textAlign="center" fontFamily={"areal"}>
        Create Marking Scheme
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
          }}>
              <Typography variant="h7" textAlign="left">
            Evaluation phase :
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
            Topic :
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
          Maximum Allocate Marks :
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
            Topic :
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
          Maximum Allocate Marks :
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
            Topic :
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
            Maximum Allocate Marks :
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
  )
}


import React from "react";
import {
  Button,
  Container,
  Paper,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Registertopic = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 10,
      }}
    >
      <Typography variant="h4" mb={10} textAlign="center">
        Register Your Topic ..
      </Typography>

      <Paper
        elevation={8}
        sx={{
          py: 3,
          mx: 20,
        }}
      >
        <Typography variant="h7" textAlign="left">
          Select Research Feild :
        </Typography>
      </Paper>
    </Container>
  );
};

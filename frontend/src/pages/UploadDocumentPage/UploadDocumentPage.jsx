import React from "react";
import { Button, Container, Typography, Box, IconButton } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Close as CloseIcon, Upload as UploadIcon } from "@mui/icons-material";

export const UploadDocumentPage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 10,
      }}
    >
      <Typography variant="h4" mb={10} textAlign="center" fontFamily={"areal"}>
        Upload Document
      </Typography>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Document Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Supervisor"
          >
            <MenuItem value={10}>pdf</MenuItem>
            <MenuItem value={20}>word</MenuItem>
            <MenuItem value={30}>ppt</MenuItem>
            <MenuItem value={40}>image</MenuItem>
          </Select>
        </FormControl>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={5}
          flexDirection="column"
        >
          <Box         
          display="flex"
          justifyContent="center"
          alignItems="center"
          >
            <Typography variant="body1"> Sample.pdf</Typography>
            <IconButton>
                <CloseIcon/>
            </IconButton>
          </Box>
          <IconButton>
            <UploadIcon/>
          </IconButton>
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
    </Container>
  );
};

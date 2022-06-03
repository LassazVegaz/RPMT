import { Container, ButtonBase, styled, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const images = [
  {
    url: "/groups.jpg",
    title: "Create Groups",
    width: "30%",
    link: "/create-group",
  },
  {
    url: "/feedback.jpg",
    title: "View Feedback",
    width: "30%",
    link: "/view-feedback",
  },
  {
    url: "/register.jpg",
    title: "Register Topic",
    width: "30%",
    link: "/register-topic",
  },
  {
    url: "/requests.webp",
    title: "Requests",
    width: "30%",
    link: "/requests",
  },
  {
    url: "/submitdoc.jpg",
    title: "Submit Documents",
    width: "30%",
    link: "/submit-documents",
  },
  {
    url: "/templatedownload.jpg",
    title: "Download Templates",
    width: "30%",
    link: "/download-templates",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  //styles of the images
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  //styles of image front buttons
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export const StudentHomePage = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Typography
        variant="h2"
        textAlign="center"
        fontFamily={"area"}
        sx={{ color: "#C70039 ", mb: 50, mt: 20 }}
      >
        I AM STUDENT
        <Box
          sx={{
            my: 3,
            px: 80,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success">
              View Student portal
            </Button>
          </Stack>
        </Box>
      </Typography>

      <Typography variant="h3" textAlign="center" fontFamily="Congenial Black">
        Student Portal
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          minWidth: 300,
          width: "100%",
          mt: 10,
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexWrap: "inherit",
            rowGap: 5,
            columnGap: 5,
            mb: 20,
          }}
        >
          {images.map(
            (
              image //1 st raw
            ) => (
              <ImageButton
                focusRipple
                key={image.title}
                style={{
                  width: image.width,
                }}
                onClick={() => navigate(image.link)}
              >
                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" /> <br />
                <Image>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                      //button styles
                      position: "relative",
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                  >
                    {image.title}
                    <ImageMarked className="MuiImageMarked-root" />
                  </Typography>
                </Image>
                <Image>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                      position: "relative",
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                  >
                    {image.title}
                    <ImageMarked className="MuiImageMarked-root" />
                  </Typography>
                </Image>
              </ImageButton>
            )
          )}
        </Container>
      </Box>
    </Box>
  );
};

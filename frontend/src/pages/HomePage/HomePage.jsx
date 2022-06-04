import { Container, ButtonBase, styled, Typography, Box } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UnderlinedText } from "../../components/ProfileNameDisplay/ProfileNameDisplay";
import { homeLinks } from "./home-links";

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

export const HomePage = () => {
	const [images, setImages] = useState([]);
	const auth = useSelector((s) => s.auth);

	useEffect(() => {
		setImages(homeLinks.filter((link) => link.roles.includes(auth.role)));
	}, [auth]);

	const navigate = useNavigate();
	return (
		<Box
			sx={{
				mt: 10,
				minHeight: "56.2vh",
			}}
		>
			<UnderlinedText mb={10} textAlign="center" variant="h4">
				Hi {auth?.firstName ?? auth?.staffMember?.firstName}! Welcome on
				board
			</UnderlinedText>

			<Container
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					rowGap: 5,
					columnGap: 5,
					mb: 6,
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
							<ImageSrc
								style={{ backgroundImage: `url(${image.url})` }}
							/>
							<ImageBackdrop className="MuiImageBackdrop-root" />{" "}
							<br />
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
										pb: (theme) =>
											`calc(${theme.spacing(1)} + 6px)`,
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
										pb: (theme) =>
											`calc(${theme.spacing(1)} + 6px)`,
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
	);
};

import { Typography, styled } from "@mui/material";
import { GENDERS } from "../../constants/genders.constants";

const buildDisplayName = (gender, firstName, lastName) => {
	const firstPart =
		firstName || lastName ? (gender === GENDERS.MALE ? "Mr." : "Mrs.") : "";
	return `${firstPart} ${firstName} ${lastName}`;
};

export const UnderlinedText = styled(Typography)(({ theme }) => ({
	"&:after": {
		content: '""',
		display: "block",
		width: "40%",
		margin: "auto",
		marginTop: theme.spacing(1),
		height: 2,
		background: "linear-gradient(180deg, #055a0e, #00bcd4)",
	},
}));

export const ProfileNameDisplay = ({
	gender,
	firstName,
	lastName,
	sx = {},
}) => {
	const displayName = buildDisplayName(gender, firstName, lastName);

	return (
		<UnderlinedText variant="h5" textAlign="center" sx={sx}>
			{displayName}
		</UnderlinedText>
	);
};

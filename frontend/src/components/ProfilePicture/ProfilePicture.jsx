import { Avatar } from "@mui/material";

export const ProfilePicture = ({
	controlName,
	onChange,
	imageSrc,
	sideLength = 180,
	sx = {},
}) => {
	return (
		<>
			<input
				accept="image/*"
				id="profile-picture-uploader"
				multiple
				type="file"
				hidden
				onChange={onChange}
				name={controlName}
			/>
			<label htmlFor="profile-picture-uploader">
				<Avatar
					sx={{
						width: sideLength,
						height: sideLength,
						cursor: "pointer",
						...sx,
					}}
					src={imageSrc}
				/>
			</label>
		</>
	);
};

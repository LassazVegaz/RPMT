import { Avatar } from "@mui/material";

export const ProfilePicture = ({
	onChange,
	imageUrl,
	sideLength = 180,
	sx = {},
}) => {
	const handlePhotoChange = (event) => {
		if (event.target.files.length > 0) {
			const reader = new FileReader();
			const fileExtension = event.target.files[0].name.split(".").pop();

			reader.onload = (e) => {
				const photo = {};
				photo.data = e.target.result;
				photo.fileExtension = fileExtension;
				photo.url = URL.createObjectURL(event.target.files[0]);
				onChange(photo);
			};
			reader.readAsDataURL(event.target.files[0]);
		}
	};

	return (
		<>
			<input
				accept="image/*"
				id="profile-picture-uploader"
				multiple
				type="file"
				hidden
				onChange={handlePhotoChange}
			/>
			<label htmlFor="profile-picture-uploader">
				<Avatar
					sx={{
						width: sideLength,
						height: sideLength,
						cursor: "pointer",
						...sx,
					}}
					src={imageUrl}
				/>
			</label>
		</>
	);
};

import { Typography, IconButton, Box } from "@mui/material";
import { Upload as UploadIcon, Close as CloseIcon } from "@mui/icons-material";
import { useState, useRef } from "react";

export const FileUpload = ({ onChange }) => {
	const [photo, setPhoto] = useState(null);
	const fileInputRef = useRef(null);

	const handlePhotoChange = (event) => {
		if (event.target.files.length > 0) {
			const reader = new FileReader();
			const fileExtension = event.target.files[0].name.split(".").pop();

			reader.onload = (e) => {
				const photo = {
					data: e.target.result,
					fileExtension,
					fileName: event.target.files[0].name,
				};

				setPhoto(photo);
				onChange(photo);
			};
			reader.readAsDataURL(event.target.files[0]);
		}
	};

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			mt={5}
			flexDirection="column"
		>
			{photo?.fileName && (
				<Box display="flex" justifyContent="center" alignItems="center">
					<Typography variant="body1">{photo.fileName}</Typography>
					<IconButton onClick={() => setPhoto(null)}>
						<CloseIcon />
					</IconButton>
				</Box>
			)}

			{!Boolean(photo) && (
				<>
					<input
						accept="image/*"
						id="document-uploader"
						type="file"
						hidden
						onChange={handlePhotoChange}
						ref={fileInputRef}
					/>

					<IconButton onClick={() => fileInputRef.current?.click()}>
						<UploadIcon />
					</IconButton>
				</>
			)}
		</Box>
	);
};

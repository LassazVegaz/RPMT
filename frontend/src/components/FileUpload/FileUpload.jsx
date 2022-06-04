import { Typography, IconButton, Box } from "@mui/material";
import { Upload as UploadIcon, Close as CloseIcon } from "@mui/icons-material";
import { useRef } from "react";

export const FileUpload = ({ document, onChange }) => {
	const fileInputRef = useRef(null);

	const handlePhotoChange = (event) => {
		if (event.target.files.length > 0) {
			const reader = new FileReader();
			const fileExtension = event.target.files[0].name.split(".").pop();

			reader.onload = (e) => {
				const _document = {
					data: e.target.result,
					fileExtension,
					fileName: event.target.files[0].name,
				};

				onChange(_document);
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
			{document?.fileName && (
				<Box display="flex" justifyContent="center" alignItems="center">
					<Typography variant="body1">{document.fileName}</Typography>
					<IconButton onClick={() => onChange(null)}>
						<CloseIcon />
					</IconButton>
				</Box>
			)}

			{!Boolean(document) && (
				<>
					<input
						accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
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

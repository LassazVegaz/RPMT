import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import mkdirp from "mkdirp";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

const getProfilePicturesURL = (fileName) =>
	`${process.env.APP_URL}/public/images/profile_pics/${fileName}`;

const getProfilePictureFolder = () =>
	path.join(__dirname, "../", "public", "images", "profile_pics");

const saveProfilePicture = async (base64, fileExt) => {
	const fileName = `${Date.now()}.${fileExt}`;
	const folder = getProfilePictureFolder();
	const filePath = path.join(folder, fileName);
	const base64Data = base64.replace(/^data:image\/(.*);base64,/, "");

	await mkdirp(folder);
	fs.writeFileSync(filePath, base64Data, "base64");

	return fileName;
};

export const mediaServices = {
	saveProfilePicture,
	getProfilePicturesURL,
	getProfilePictureFolder,
};

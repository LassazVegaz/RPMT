import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import mkdirp from "mkdirp";
import ip from "ip";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);
const serverAddress = ip.address();

const getPublicFileURL = (subFolder, fileName) => {
	return `http://${serverAddress}:${process.env.PORT}/${subFolder}/${fileName}`;
};

const getProfilePicturesURL = (fileName) => {
	return getPublicFileURL("images/profile_pics", fileName);
};

const getSubmissionsURL = (fileName) => {
	return getPublicFileURL("submissions", fileName);
};

const getProfilePictureFolder = () =>
	path.join(__dirname, "../", "public", "images", "profile_pics");

const getSubmissionsFolder = () =>
	path.join(__dirname, "../", "public", "submissions");

const saveBase64ToFile = async (base64, fileExt, folder) => {
	const fileName = `${Date.now()}.${fileExt}`;
	const filePath = path.join(folder, fileName);
	const base64Data = base64.replace(/^data:(.*);base64,/, "");

	await mkdirp(folder);
	fs.writeFileSync(filePath, base64Data, "base64");

	return fileName;
};

const saveProfilePicture = async (base64, fileExt) => {
	const folder = getProfilePictureFolder();
	const fileName = await saveBase64ToFile(base64, fileExt, folder);
	return fileName;
};

const saveSubmission = async (base64, fileExt) => {
	const folder = getSubmissionsFolder();
	const fileName = await saveBase64ToFile(base64, fileExt, folder);
	return fileName;
};

export const mediaServices = {
	saveProfilePicture,
	getProfilePicturesURL,
	getProfilePictureFolder,
	getSubmissionsURL,
	saveSubmission,
};

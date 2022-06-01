import endpoints from "../end-points.json";
import { axiosApp } from "./axios-app";

const isEmailAvailable = async (email) => {
	const url = `${endpoints.users.emailAvailable}/${email}`;
	const response = await axiosApp.get(url);
	return response.data;
};

export const usersHelper = {
	isEmailAvailable,
};

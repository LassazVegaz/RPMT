import endpoints from "../end-points.json";
import { axiosApp } from "./axios-app";

const TOKEN_KEY = "token";

const login = async (email, password) => {
	const data = { email, password };
	const res = await axiosApp.post(endpoints.auth.login, data);
	const token = res.data;

	storeToken(token);
	return token;
};

const logout = () => removeToken();

const getLoggedInUser = async () => {
	if (!getToken()) return null;

	const res = await axiosApp.get(endpoints.auth.loggedUser);

	return res.data;
};

const storeToken = (token) => localStorage.setItem(TOKEN_KEY, token);

const getToken = () => localStorage.getItem(TOKEN_KEY);

const removeToken = () => localStorage.removeItem(TOKEN_KEY);

export const authHelper = {
	login,
	logout,
	getLoggedInUser,
	storeToken,
	getToken,
	removeToken,
};

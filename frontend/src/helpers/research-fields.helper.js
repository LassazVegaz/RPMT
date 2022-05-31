import endpoints from "../end-points.json";
import { axiosApp } from "./axios-app";

const getResearchFields = async () => {
	const response = await axiosApp.get(endpoints.researchFields.common);
	return response.data;
};

export const researchFieldsHelpers = {
	getResearchFields,
};

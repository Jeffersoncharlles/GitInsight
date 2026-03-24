import { api } from "../libs/api";

export const getRepoDetails = async (fullName: string) => {
	const response = await api.get(`repos/${fullName}`);

	return response.data;
};

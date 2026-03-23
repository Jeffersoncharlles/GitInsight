import { api } from "../libs/api";
import { type Repo, reposSchema } from "./types";

export const getRepos = async (username: string): Promise<Repo[]> => {
	const response = await api.get(`/users/${username}/repos`);

	return reposSchema.parse(response.data);
};

import { api } from "../libs/api";
import { type User, userSchema } from "./types";

export const getUser = async (username: string): Promise<User> => {
	const response = await api.get(`/users/${username}`);

	return userSchema.parse(response.data);
};

import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../services/get-user";

export const useUserQuery = (username: string) => {
	return useQuery({
		queryKey: ["user", username],
		queryFn: () => getUser(username),
		select: (data) => ({
			avatarUrl: data.avatar_url,
			name: data.name,
			login: data.login,
			bio: data.bio,
			followers: data.followers,
			following: data.following,
			email: data.email,
		}),
	});
};

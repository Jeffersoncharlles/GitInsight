import { useQuery } from "@tanstack/react-query";
import { getRepoDetails } from "../../../services/get-repo-details";

export const useRepoDetailQuery = (fullName: string) => {
	return useQuery({
		queryKey: ["repo-detail", fullName],
		queryFn: () => getRepoDetails(fullName),
		enabled: !!fullName && fullName.includes("/"),
		retry: false,
	});
};

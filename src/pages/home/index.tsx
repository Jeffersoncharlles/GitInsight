import { Suspense } from "react";
import { useSearchParams } from "react-router";
import { RepositoryList } from "../../components/repositoryList";
import { UserProfileSkeleton } from "../../components/userProfileSkelton";
import { UserProfileContainer } from "./components/userProfileContainer";
import { WelcomeView } from "./components/welcomeView";
import { useReposQuery } from "./hooks/useReposQuery";

export const Home = () => {
	const [searchParams] = useSearchParams();
	const username = searchParams.get("q") || "";

	const {
		isLoading: reposIsLoading,
		isError: reposIsError,
		data: repos,
	} = useReposQuery(username, "stars");

	console.log({ reposIsLoading, reposIsError, repos });

	if (!username) return <WelcomeView />;

	return (
		<section className="container  py-5">
			<div className="row g-4">
				<div className="col-12 col-lg-4">
					<Suspense fallback={<UserProfileSkeleton />}>
						<UserProfileContainer username={username} />
					</Suspense>
				</div>
			</div>
			<div className="col-12 col-lg-8">
				<RepositoryList />
			</div>
		</section>
	);
};

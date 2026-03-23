import { lazy, Suspense } from "react";
import { useSearchParams } from "react-router";
import { RepositoryList } from "../../components/repositoryList";
import { UserProfileSkeleton } from "../../components/userProfileSkellton";
import { useReposQuery } from "./hooks/useReposQuery";
import { useUserQuery } from "./hooks/useUserQuery";

const UserProfile = lazy(() => import("../../components/userProfile"));

export const Home = () => {
	const [searchParams] = useSearchParams();
	const username = searchParams.get("q") || "";

	const { data: user, isLoading, isError } = useUserQuery(username);

	const {
		isLoading: reposIsLoading,
		isError: reposIsError,
		data: repos,
	} = useReposQuery(username, "stars");

	console.log({ reposIsLoading, reposIsError, repos });

	if (!username) {
		return (
			<section className="container py-5 text-center">
				<div className="py-5">
					<img src="/github.png" alt="logo do github" className="mb-4" />
					<h2 className="h4 text-secondary mb-3">Bem-vindo ao GitInsight</h2>
					<p className="text-muted">
						Digite um username do GitHub acima para começar a explorar
					</p>
				</div>
			</section>
		);
	}

	if (isError) {
		return (
			<div className="container py-5 text-center">
				<div className="alert alert-danger">
					Usuário não encontrado ou erro na API.
				</div>
			</div>
		);
	}

	return (
		<section className="container  py-5">
			<div className="row g-4">
				<div className="col-12 col-lg-4">
					<Suspense fallback={<UserProfileSkeleton />}>
						{isLoading ? (
							<UserProfileSkeleton />
						) : (
							user && <UserProfile user={user} />
						)}
					</Suspense>
				</div>
			</div>
			<div className="col-12 col-lg-8">
				<RepositoryList />
			</div>
		</section>
	);
};

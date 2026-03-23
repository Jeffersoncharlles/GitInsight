import { useSearchParams } from "react-router";

import { useUserQuery } from "./hooks/useUserQuery";

export const Home = () => {
	const [searchParams] = useSearchParams();
	const username = searchParams.get("q") || "";

	const { data: user, isLoading, isError } = useUserQuery(username);

	console.log(user, isLoading, isError);

	return (
		<section className="container mt-5">
			{!user && isLoading && (
				<div className="text-center py-5">
					<div className="py-5">
						<img src="/github.png" alt="logo do github" />
						<h2 className="h4 text-secondary mb-3">Bem-vindo ao GitInsight</h2>
						<p className="text-muted">
							Digite um username do GitHub acima para começar a explorar
						</p>
					</div>
				</div>
			)}
			<div className="text-center py-5"></div>
		</section>
	);
};

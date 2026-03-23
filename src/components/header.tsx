import { SearchHeader } from "./searchHeader";

export const Header = () => {
	return (
		<header className="bg-primary text-white py-4 shadow-sm">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1 className="text-center mb-4 fs-3 fw-semibold">GitInsight</h1>
						<SearchHeader />
					</div>
				</div>
			</div>
		</header>
	);
};

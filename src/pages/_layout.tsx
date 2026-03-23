import { Outlet } from "react-router";
import { SearchHeader } from "../components/searchHeader";

export const LayoutRoot = () => {
	return (
		<div className="min-h-screen w-full bg-gray-100">
			<SearchHeader />
			<main className="container mx-auto px-4">
				<Outlet />
			</main>
		</div>
	);
};

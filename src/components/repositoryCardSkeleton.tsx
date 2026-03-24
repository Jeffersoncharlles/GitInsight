import { Skeleton } from "./ui/skeleton";

export const RepositoryCardSkeleton = () => {
	return (
		<div className="card h-100 border shadow-sm p-4">
			<Skeleton width="60%" height="1.6rem" className="mb-3" />

			<div className="flex-grow-1 mb-4">
				<Skeleton width="100%" height="1rem" className="mb-2" />
				<Skeleton width="90%" height="1rem" className="mb-2" />
				<Skeleton width="75%" height="1rem" />
			</div>

			<div className="d-flex justify-content-between align-items-center mt-auto pt-2 border-top">
				<Skeleton width="80px" height="1.8rem" className="rounded-pill" />

				<Skeleton width="50px" height="1.8rem" className="rounded-pill" />
			</div>
		</div>
	);
};

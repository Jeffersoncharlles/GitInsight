import { Card } from "./ui/card";

export type UserProfileProps = {
	user: {
		avatarUrl: string;
		name: string | null;
		login: string;
		bio: string | null;
		followers: number;
		following: number;
		email: string | null;
		publicRepos: number;
	};
};

export const UserProfile = ({ user }: UserProfileProps) => {
	return (
		<Card.Root>
			<Card.Body>
				<img
					src={user?.avatarUrl}
					alt={user?.name || user?.login}
					className="rounded-circle mb-3 object-fit-cover "
					style={{ width: "120px", height: "120px" }}
				/>
				<h2 className="h4 mb-1 fw-semibold">{user?.name || user?.login}</h2>
				<p className="text-muted mb-3">@{user?.login}</p>

				<div className="d-flex justify-content-around align-items-center border-top pt-3">
					<div className="text-center">
						<p className="fw-semibold">{user?.followers}</p>
						<p className="text-muted">Seguidores</p>
					</div>
					<div className="text-center">
						<p className="fw-semibold">{user?.following}</p>
						<p className="text-muted">Seguindo</p>
					</div>
					<div className="text-center">
						<p className="fw-semibold">{user?.publicRepos}</p>
						<p className="text-muted">Repositórios</p>
					</div>
				</div>
			</Card.Body>
		</Card.Root>
	);
};

export default UserProfile;

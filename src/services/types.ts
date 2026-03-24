import { z } from "zod";

export const userSchema = z.object({
	login: z.string(),
	id: z.number(),
	node_id: z.string(),
	avatar_url: z.string(),
	gravatar_id: z.string(),
	url: z.string(),
	html_url: z.string(),
	followers_url: z.string(),
	following_url: z.string(),
	gists_url: z.string(),
	starred_url: z.string(),
	subscriptions_url: z.string(),
	organizations_url: z.string(),
	repos_url: z.string(),
	events_url: z.string(),
	received_events_url: z.string(),
	type: z.string(),
	user_view_type: z.string(),
	site_admin: z.boolean(),
	name: z.string().nullable(),
	company: z.string().nullable(),
	blog: z.string().nullable(),
	location: z.string().nullable(),
	email: z.string().nullable(),
	hireable: z.boolean().nullable(),
	bio: z.string().nullable(),
	twitter_username: z.string().nullable(),
	public_repos: z.number(),
	public_gists: z.number(),
	followers: z.number(),
	following: z.number(),
	created_at: z.string(),
	updated_at: z.string(),
});

export type User = z.infer<typeof userSchema>;

export const reposSchema = z.array(
	z.object({
		id: z.number(),
		name: z.string(),
		full_name: z.string(),
		description: z.string().nullable(),
		stargazers_count: z.number(),
		language: z.string().nullable(),
		html_url: z.string().url(),
	}),
);

export type Repo = z.infer<typeof reposSchema>[number];

export const repoDetailSchema = z.object({
	name: z.string(),
	full_name: z.string(),
	description: z.string().nullable(),
	stargazers_count: z.number(),
	forks_count: z.number(),
	language: z.string().nullable(),
	html_url: z.string().url(),
	owner: z.object({
		login: z.string(),
		avatar_url: z.string().url(),
	}),
	topics: z.array(z.string()),
	open_issues_count: z.number(),
	updated_at: z.string(),
});

export type RepoDetail = z.infer<typeof repoDetailSchema>;

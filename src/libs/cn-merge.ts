import { type ClassValue, clsx } from "clsx";

export function cn(...css: ClassValue[]) {
	const classes = clsx(css);

	if (!classes) {
		return "";
	}

	return Array.from(new Set(classes.split(/\s+/)))
		.filter(Boolean)
		.join(" ");
}

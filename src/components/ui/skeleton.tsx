import type { ComponentProps } from "react";

export interface SkeletonProps extends ComponentProps<"div"> {
	width?: string | number;
	height?: string | number;
	variant?: "rect" | "circle";
}

export const Skeleton = ({
	width,
	height,
	variant = "rect",
	className = "",
}: SkeletonProps) => {
	const customStyle = {
		"--bs-bg-opacity": ".15",
		width: width || "100%",
		height: height || "1rem",
	};

	return (
		<div
			className={`placeholder-glow d-inline-block ${className}`}
			style={customStyle}
			aria-hidden="true"
		>
			<span
				className={`placeholder w-100 h-100 ${variant === "circle" ? "rounded-circle" : "rounded"}`}
			></span>
		</div>
	);
};

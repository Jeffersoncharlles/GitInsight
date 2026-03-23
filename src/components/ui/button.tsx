import { cn } from "../../libs/cn-merge";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	variant?: "primary" | "secondary" | "danger";
	inputButton?: boolean;
}

export const Button = ({
	variant = "primary",
	inputButton = false,
	className,
	...props
}: ButtonProps) => {
	return (
		<button
			className={cn(
				"btn",
				`btn-${variant}`,
				`${inputButton ? "btn-light btn-lg h-100 flex-shrink-0 m-0 py-2 px-4 rounded-start-0 rounded-end-3 border-start" : ""}`,
				className,
			)}
			{...props}
		/>
	);
};

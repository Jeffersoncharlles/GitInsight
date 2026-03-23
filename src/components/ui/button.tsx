import { cn } from "../../libs/cn-merge";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	variant?: "primary" | "secondary" | "danger";
}

export const Button = ({
	variant = "primary",
	className,
	...props
}: ButtonProps) => {
	return (
		<button className={cn("btn", `btn-${variant}`, className)} {...props} />
	);
};

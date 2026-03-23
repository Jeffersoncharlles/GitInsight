import type { ComponentProps } from "react";
import { cn } from "../../libs/cn-merge";

export interface CardRootProps extends ComponentProps<"div"> {}

const cardRoot = ({ className, ...props }: CardRootProps) => {
	return <div className={cn("card shadow-sm h-100", className)} {...props} />;
};

export interface CardBodyProps extends ComponentProps<"div"> {}
const cardBody = ({ className, ...props }: CardBodyProps) => {
	return <div className={cn("card-body text-center", className)} {...props} />;
};

export const Card = {
	Root: cardRoot,
	Body: cardBody,
};

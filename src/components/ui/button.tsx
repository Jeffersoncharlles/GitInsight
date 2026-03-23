interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

export const Button = (props: ButtonProps) => {
	return <button className="btn btn-primary" {...props} />;
};

import style from "./Form.module.css";

type SignUpProps = {
  children: React.ReactNode;
  className?: string;
};

export const SignUp: React.FC<SignUpProps> = ({
  children,
  className = " ",
}) => {
  return <h1 className={`${style.title} ${className}`}>{children}</h1>;
};

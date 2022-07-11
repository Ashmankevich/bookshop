import style from "./Form.module.css";

type FormProps = {
  children: React.ReactNode;
  className?: string;
};

export const SignIn: React.FC<FormProps> = ({ children, className = " " }) => {
  return <h1 className={`${style.title} ${className}`}>{children}</h1>;
};

import Toggle from "react-toggle";
import "react-toggle/style.css";

type SwitcherProps = {};

export const Switcher: React.FC<SwitcherProps> = () => {
  return <Toggle icons={false} />;
};

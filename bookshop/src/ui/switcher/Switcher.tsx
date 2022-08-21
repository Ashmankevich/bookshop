import { useContext } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { AppContext } from "../../AppContext";

type SwitcherProps = {};

export const Switcher: React.FC<SwitcherProps> = () => {
  const appRef = useContext(AppContext);
  return (
    <Toggle
      icons={false}
      onChange={(event) => {
        const style = appRef?.current!.style!;
        if (event.target.checked) {
          style.setProperty("--primary-text-color", "white");
          style.setProperty("--background-color", "var(--ds-background-color)");
          style.setProperty(
            "--btn-background-color",
            "var(--ds-btn-background-color)"
          );
        } else {
          style.removeProperty("--primary-text-color");
          style.removeProperty("--background-color");
          style.removeProperty("--btn-background-color");
        }
      }}
    />
  );
};

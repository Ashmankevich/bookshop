import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import styles from "./Toggle.module.css";

export const Toggle: React.FC = () => {
  const appRef = useContext(AppContext);
  return (
    <div className={styles.root}>
      <label className={styles.switch} htmlFor="toggler">
        <input
          className={styles.inputToggle}
          id="toggler"
          type="checkbox"
          onChange={(event) => {
            const style = appRef?.current!.style!;
            if (event.target.checked) {
              style.setProperty("--primary-text-color", "white");
              style.setProperty(
                "--background-color",
                "var(--ds-background-color)"
              );
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
          readOnly
        />
        <span className={styles.slider} />
        <span className={styles.wave} />
      </label>
    </div>
  );
};

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
              style.setProperty(
                "--background-color",
                "var(--ds-background-color)"
              );
              style.setProperty(
                "--primary-title-color",
                "var(--ds-primary-color)"
              );
            } else {
              style.removeProperty("--background-color");
              style.removeProperty("--primary-title-color");
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

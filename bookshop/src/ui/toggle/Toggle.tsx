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
              style.setProperty("--background", "var(--ds-background)");
              style.setProperty("--primary-title", "var(--ds-primary-color)");
              style.setProperty("--main-item", " var(--ds-main-item)");
              style.setProperty("--border", "var(--ds-border)");
            } else {
              style.removeProperty("--background");
              style.removeProperty("--primary-title");
              style.removeProperty("--main-item");
              style.removeProperty("--border");
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

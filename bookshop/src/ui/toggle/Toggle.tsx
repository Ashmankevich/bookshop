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
              style.setProperty("--first-item", " var(--ds-first-item)");
              style.setProperty("--second-item", " var(--ds-second-item)");
              style.setProperty("--border", "var(--ds-border)");
              style.setProperty("--ui-item", "var(--ds-ui-item)");
              style.setProperty("--icon", "var(--ds-icon)");
              style.setProperty("--iconFav", "var(--ds-icon)");
            } else {
              style.removeProperty("--background");
              style.removeProperty("--primary-title");
              style.removeProperty("--first-item");
              style.removeProperty("--second-item");
              style.removeProperty("--border");
              style.removeProperty("--ui-item");
              style.removeProperty("--icon");
              style.removeProperty("--iconFav");
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

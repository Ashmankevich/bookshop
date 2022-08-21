import React from "react";
import styles from "./Toggle.module.css";

type ToggleProps = {
  onChange: React.MouseEventHandler<HTMLInputElement> | undefined;
};

export const Toggle: React.FC<ToggleProps> = ({ onChange }) => (
  <div className={styles.root}>
    <label className={styles.switch} htmlFor="toggler">
      <input
        className={styles.inputToggle}
        id="toggler"
        type="checkbox"
        onClick={onChange}
        readOnly
      />
      <span className={styles.slider} />
      <span className={styles.wave} />
    </label>
  </div>
);

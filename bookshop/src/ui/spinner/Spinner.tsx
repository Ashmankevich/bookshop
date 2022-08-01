import style from "./Spinner.module.css";

type SpinnerProps = {};

export const Spinner: React.FC<SpinnerProps> = () => {
  return (
    <div className={style.loading}>
      <div className={style.circle}></div>
      <div className={style.circle}></div>
      <div className={style.circle}></div>
      <div className={style.circle}></div>
    </div>
  );
};

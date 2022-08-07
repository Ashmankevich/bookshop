import { MutatingDots } from "react-loader-spinner";

type SpinnerProps = {};

export const Spinner: React.FC<SpinnerProps> = () => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#a8a8a8"
      secondaryColor="#a8a8a8"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
      wrapperClass=""
      visible={true}
    />
  );
};

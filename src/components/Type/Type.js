import Typical from "react-typical";

const Type = ({ text }) => {
  return (
    <Typical
      steps={[
        "Welcome to labmas !",
        1000,
        " Your number one laundry platform",
        1000,
        " Close to your door step !!!",
        1000,
      ]}
      loop={Infinity}
      wrapper="h1"
    />
  );
};

export default Type;

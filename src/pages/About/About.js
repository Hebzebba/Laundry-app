import { useSelector, useDispatch } from "react-redux";

const About = () => {
  const store = useSelector((stateStore) => stateStore);
  console.log(store);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </>
  );
};

export default About;

import { useDispatch } from "react-redux";
import { Action1 } from "./store/actions/exampleActions";
import { AppDispatch } from "./store/store";

function Home() {
  const dispatch: AppDispatch = useDispatch();
  const handleClick = () => {
    dispatch(Action1());
  };

  return (
    <div>
      Home
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default Home;

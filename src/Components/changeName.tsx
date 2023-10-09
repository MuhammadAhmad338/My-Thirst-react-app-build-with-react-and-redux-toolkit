import { ChangeEvent } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "../Store/store";
import { increment, decrement, changeName} from "../Services/changeNameService";

const ChangeName = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.changeName);

  const increaseButton = () => {
    dispatch(increment());
  };

  const decreaseButton = () => {
    dispatch(decrement());
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Please Enter Something"
      />
      <button onClick={increaseButton}>Increment Age</button>
      <button onClick={decreaseButton}>Decrement Age</button>
      <p>
        Hello! My age is this {state.age} and name is this {state.name}
      </p>
    </div>
  );
};

export default ChangeName;

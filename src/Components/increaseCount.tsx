import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";
import { incrementAge } from "../Services/incrementService";
import { RootState } from "../Store/store";

const IncreaseCount = () => {
  
  const dispatch = useDispatch();
  const age = useSelector((state: RootState) => state.age.age);
  
  return (
    <>
      <button
        onClick={() => {
         dispatch(incrementAge())
        }}
      >
        Increment Age
      </button>
      <p>Hello! My age is that {age}</p>
    </>
  );

};

export default IncreaseCount;

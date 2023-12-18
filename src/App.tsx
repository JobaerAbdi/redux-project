import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex items-center justify-center space-x-4 mt-10">
        <button
          id="decrementBtn1"
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          id="incrementBtn1"
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <span id="counter" className="text-xl font-bold">
          {count}
        </span>
        <button
          id="incrementBtn2"
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(incrementByAmount(3))}
        >
          incrementByAmount
        </button>
        <button
          id="decrementBtn2"
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => dispatch(decrementByAmount(3))}
        >
          decrementByAmount
        </button>
      </div>
    </>
  );
}

export default App;

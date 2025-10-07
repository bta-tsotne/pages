import { useDispatch, useSelector } from "react-redux";
import { decreament, increament, increaseByAmount, dabechde, reset } from "./counterSlice";
import type { RootState } from "../../app/store";
import { Button } from "./Button";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const room = useSelector((state: RootState) => state.magida.skami);
  const dispatch = useDispatch();

  return (
    <div className="w-2/3 mx-auto my-10">
      <p>Count: {count}</p>
      <p>{room}</p>
      <div className="flex gap-4">
        <Button variant="increament" onClick={() => dispatch(dabechde())}>მაგიდა და ...</Button>
        <Button variant="increament" onClick={() => dispatch(increament())}>+1</Button>
        <Button variant="increament" onClick={() => dispatch(reset())}>საწყისი</Button>
        <Button variant="decreament" onClick={() => dispatch(decreament())}>-1</Button>
        <Button variant="increamentByAmount" onClick={() => dispatch(increaseByAmount(5))}>+5</Button>
      </div>
    </div>
  )
}
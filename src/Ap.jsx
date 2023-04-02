import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "./features/counter/counterSlice";

function Ap() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  return (
    <div className="App">
     
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>+</button>
        <h3> count is {count}</h3>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div className="amount">
        <button onClick={() => dispatch(incrementByAmount(+amount))}>
          Add Amount
        </button>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={() => dispatch(incrementAsync(+amount))}>
        Add Async
      </button>
    </div>
  );
}

export default App;

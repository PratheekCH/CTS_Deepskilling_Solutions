import "./App.css";
import { useState } from "react";


function App() {

  const [count, setCount] = useState(5);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello! Member!");
  };

  const increase = () => {
    increment();
    sayHello();
  };

  const welcome = (msg) => {
    alert(msg);
  };

  const onPress = () => {
    alert("I was clicked");
  };

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const euro = parseFloat(amount) / 90;

    alert(
      "Converting to Euro Amount is " + euro.toFixed(2)
    );
  };

  return (

    <div style={{padding:"20px"}}>

      <h2>{count}</h2>

      <button onClick={increase}>
        Increment
      </button>

      <br/><br/>

      <button onClick={decrement}>
        Decrement
      </button>

      <br/><br/>

      <button onClick={() => welcome("Welcome")}>
        Say Welcome
      </button>

      <br/><br/>

      <button onClick={onPress}>
        Click on me
      </button>

      <br/><br/><br/>

      <h1 style={{color:"green"}}>
        Currency Convertor!!!
      </h1>

      <form onSubmit={handleSubmit}>

        <label>Amount : </label>

        <input
          type="number"
          value={amount}
          onChange={(e)=>setAmount(e.target.value)}
        />

        <br/><br/>

        <label>Currency : </label>

        <input
          type="text"
          value={currency}
          onChange={(e)=>setCurrency(e.target.value)}
        />

        <br/><br/>

        <button type="submit">
          Submit
        </button>

      </form>

    </div>

  );
}

export default App;
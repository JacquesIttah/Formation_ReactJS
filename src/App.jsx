import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/ui/Button/Button.js";

function App() {
  const [counter, setCounter] = useState(0);
  const [clicked, setClicked] = useState(false);

  // Changements d'état Asynchrones
  useEffect(() => {
    console.log(counter);
  }, [counter]);

  useEffect(() => {
    console.log(clicked);
  }, [clicked]);

  return (
    <div>
      Hello world!
      <br />
      <hr />
      <Button
        bgColor="green"
        style={{ textDecoration: "underline", boderColor: "blue" }}
        type="button"
        onButtonClick={(arg) => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      >
        UP {counter}
      </Button>
      <br />
      <Button
        bgColor="red"
        style={{ textDecoration: "underline", boderColor: "blue" }}
        type="submit"
        onButtonClick={(arg) => {
          setCounter(counter - 1);
          console.log(counter);
        }}
      >
        DOWN {counter}
      </Button>
      <br />
      <Button type="reset">
        <div>HELLO</div>
      </Button>
    </div>
  );
}

export default App;

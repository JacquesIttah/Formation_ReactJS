import "./App.css";
import Button from "./components/ui/Button/Button.jsx";

function App() {
  return (
    <div>
      Hello world!
      <br />
      <Button 
      bgColor="red"
      style={{textDecoration:'underline',boderColor:'blue'}}
      ></Button>
    </div>
  );
}

export default App;

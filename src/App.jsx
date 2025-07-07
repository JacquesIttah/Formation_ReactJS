import "./App.css";
import Button from "./components/ui/Button/Button.jsx";

function App() {
  return (
    <div>
      Hello world!
      <br /><hr />
      <Button 
      bgColor="green"
      style={{textDecoration:'underline',boderColor:'blue'}}
      ></Button>
      <br />
      <Button 
      bgColor="red"
      style={{textDecoration:'underline',boderColor:'blue'}}
      ></Button>
      <br />
      <Button><div>HELLO</div><p>mon bouton</p></Button>
    </div>
  );
}

export default App;

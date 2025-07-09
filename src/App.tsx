import "./App.css";
import FlexVerticalThirdGrow from "./components/layout/FlexVerticalThirdGrow/FlexVerticalThirdGrow";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import FlexHorizontalFirstGrow from "./components/layout/FlexHorizontalFirstGrow/FlexHorizontalFirstGrow";
import MemeForm from "./components/MemeForm/MemeForm.connected";
import MemeSVGViewer from "./components/ui/MemeSVGViewer/MemeSVGViewer.connected";

const App = () => {
  return (
    <div className="App">
      <FlexVerticalThirdGrow>
        <Header></Header>
        <Navbar></Navbar>
        <FlexHorizontalFirstGrow>
          <MemeSVGViewer />
          <MemeForm />
        </FlexHorizontalFirstGrow>
        <Footer />
      </FlexVerticalThirdGrow>
    </div>
  );
};

export default App;

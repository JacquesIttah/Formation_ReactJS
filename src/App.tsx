import "./App.css";
import FlexVerticalThirdGrow from "./components/layout/FlexVerticalThirdGrow/FlexVerticalThirdGrow";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import FlexHorizontalFirstGrow from "./components/layout/FlexHorizontalFirstGrow/FlexHorizontalFirstGrow";
import MemeForm from "./components/MemeForm/MemeForm.connected";
import MemeSVGViewer from "./components/ui/MemeSVGViewer/MemeSVGViewer.connected";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import Thumbnail from "./pages/Thumbnail";

const App = () => {
  return (
    <div className="App">
      <FlexVerticalThirdGrow>
        <Header></Header>
        <Navbar></Navbar>
        <FlexHorizontalFirstGrow>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/editor" Component={Editor} />
            <Route path="/editor/:id" Component={Editor} />
            <Route path="/thumbnail" Component={Thumbnail} />
          </Routes>
        </FlexHorizontalFirstGrow>
        <Footer />
      </FlexVerticalThirdGrow>
    </div>
  );
};

export default App;

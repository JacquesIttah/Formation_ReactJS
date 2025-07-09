import React, { useState } from "react";
import "./App.css";
import FlexVerticalThirdGrow from "./components/layout/FlexVerticalThirdGrow/FlexVerticalThirdGrow";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import FlexHorizontalFirstGrow from "./components/layout/FlexHorizontalFirstGrow/FlexHorizontalFirstGrow";
import { emptyMeme, MemeSVGViewer } from "orsys-tjs-meme";
import MemeForm from "./components/MemeForm/MemeForm";

const App = () => {
  const [meme, setMeme] = useState(emptyMeme);
  return (
    <>
      <div>{JSON.stringify(meme)}</div>
      <div className="App">
        <FlexVerticalThirdGrow>
          <Header></Header>
          <Navbar></Navbar>
          <FlexHorizontalFirstGrow>
            <MemeSVGViewer image={undefined} meme={emptyMeme} />
            <MemeForm meme={meme} onMemeChange={(m)=>{setMeme(m);}} />
          </FlexHorizontalFirstGrow>
          <Footer />
        </FlexVerticalThirdGrow>
      </div>
    </>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import FlexVerticalThirdGrow from "./components/layout/FlexVerticalThirdGrow/FlexVerticalThirdGrow";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import FlexHorizontalFirstGrow from "./components/layout/FlexHorizontalFirstGrow/FlexHorizontalFirstGrow";
import { emptyMeme, MemeSVGViewer, type ImageInterface } from "orsys-tjs-meme";
import MemeForm from "./components/MemeForm/MemeForm";

const App = () => {
  const [meme, setMeme] = useState(emptyMeme);
  const [images, setImages] = useState<Array<ImageInterface>>([])
  useEffect(() => {
    fetch('http://localhost:5679/images')
    .then(response => response.json())
    .then(arr => setImages(arr));
  }, []);

  return (
    <>
      <div>{JSON.stringify(images)}</div>
      <div className="App">
        <FlexVerticalThirdGrow>
          <Header></Header>
          <Navbar></Navbar>
          <FlexHorizontalFirstGrow>
            <MemeSVGViewer image={undefined} meme={meme} />
            <MemeForm images={images} meme={meme} onMemeChange={(m)=>{setMeme(m);}} />
          </FlexHorizontalFirstGrow>
          <Footer />
        </FlexVerticalThirdGrow>
      </div>
    </>
  );
};

export default App;

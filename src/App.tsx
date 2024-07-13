import "./App.css";
import { PhotographySection } from "./PhotographySection";
import { TextSection } from "./TextSection";
import { BioSection } from "./BioSection";
import React from "react";

function App() {
  return (
    <>
      <div className='main-container'>
        <BioSection />
        <TextSection />
        <PhotographySection />
      </div>
    </>
  );
}

export default App;

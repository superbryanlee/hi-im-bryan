import "./App.css";
import { PhotographySection } from "./PhotographySection";
import { TextSection } from "./TextSection";
import { BioSection } from "./BioSection";

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

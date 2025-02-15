import React, { useState } from "react";
import SheetMusic from "./components/SheetMusic";
import PitchDetector from "./components/PitchDetector";
import Controls from "./components/Controls";
import "./css/preface.css";
import "./css/sightreader.css";

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [tempo, setTempo] = useState(60);

  return (
    <div className="container">
      <h3>ABC Sightreader</h3>
      <Controls setSelectedFile={setSelectedFile} setTempo={setTempo} />
      <SheetMusic selectedFile={selectedFile} tempo={tempo} />
      <PitchDetector />
    </div>
  );
};

export default App;

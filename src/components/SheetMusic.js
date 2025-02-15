import React, { useEffect, useRef } from "react";
import ABCJS from "abcjs";

const SheetMusic = ({ selectedFile, tempo }) => {
  const notationRef = useRef(null);

  useEffect(() => {
    if (selectedFile) {
      fetch(`/music/${selectedFile}`)
        .then((res) => res.text())
        .then((abcString) => {
          ABCJS.renderAbc(notationRef.current, abcString, {
            responsive: "resize",
            scale: 1.5,
            add_classes: true,
          });
        });
    }
  }, [selectedFile, tempo]);

  return <div ref={notationRef}></div>;
};

export default SheetMusic;

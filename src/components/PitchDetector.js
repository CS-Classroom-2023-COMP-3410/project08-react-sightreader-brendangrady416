import React, { useState, useEffect } from "react";
import * as Pitchfinder from "pitchfinder";

const PitchDetector = () => {
  const [currentNote, setCurrentNote] = useState("-");
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    let audioContext, analyzer, microphone, pitchDetector;
    
    const startDetection = async () => {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      microphone = audioContext.createMediaStreamSource(stream);
      analyzer = audioContext.createAnalyser();
      microphone.connect(analyzer);

      pitchDetector = new Pitchfinder.YIN({ sampleRate: audioContext.sampleRate });

      const detectPitch = () => {
        const buffer = new Float32Array(analyzer.fftSize);
        analyzer.getFloatTimeDomainData(buffer);
        const pitch = pitchDetector(buffer);
        setCurrentNote(pitch ? Math.round(pitch) : "-");
      };

      setInterval(detectPitch, 100);
    };

    if (isListening) {
      startDetection();
    }

    return () => {
      audioContext?.close();
    };
  }, [isListening]);

  return (
    <div>
      <button onClick={() => setIsListening(!isListening)}>
        {isListening ? "Stop" : "Start"} Listening
      </button>
      <p>Current Note: {currentNote}</p>
    </div>
  );
};

export default PitchDetector;

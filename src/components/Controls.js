import React from "react";

const Controls = ({ setSelectedFile, setTempo }) => {
  return (
    <div className="controls">
      <label>File:</label>
      <select onChange={(e) => setSelectedFile(e.target.value)}>
        <option value="">-- Select ABC File --</option>
        <option value="beginner.pls">beginner</option>
        <option value="cecilio-lesson1-open-strings.abc">cecilio-lesson1-open-strings</option>
        <option value="cecilio-lesson2-first-position.abc">cecilio-lesson2-first-position.abc</option>
        <option value="cecilio-lesson2-twinkle-twinkle-little-star.abc">cecilio-lesson2-twinkle-twinkle-little-star</option>
        <option value="cecilio-lesson3-exercise-1.abc">cecilio-lesson3-exercise-1</option>
        <option value="cecilio-lesson3-exercise-2.abc">cecilio-lesson3-exercise-2</option>
        <option value="cecilio-lesson3-exercise-3.abc">cecilio-lesson3-exercise-3</option>
        <option value="cecilio-lesson3-exercise-4.abc">cecilio-lesson3-exercise-4</option>
        <option value="cecilio-lesson3-jingle-bells.abc">cecilio-lesson3-jingle-bells</option>
        <option value="cecilio-lesson3-mary-had-a-little-lamb.abc">cecilio-lesson3-mary-had-a-little-lamb</option>
        <option value="cecilio-lesson4-camptown-races.abc">cecilio-lesson4-camptown-races</option>
        <option value="cecilio-lesson4-lightly-row.abc">cecilio-lesson4-lightly-row</option>
        <option value="cecilio-lesson4-russian-dance-tune.abc">cecilio-lesson4-russian-dance-tune</option>
        <option value="cecilio-lesson5-eighth-notes.abc">cecilio-lesson5-eighth-notes.abc</option>
        <option value="cecilio-lesson5-hungarian-folk-song-1.abc">cecilio-lesson5-hungarian-folk-song-1</option>
        <option value="cecilio-lesson5-the-old-gray-goose.abc">cecilio-lesson5-the-old-gray-goose</option>
        <option value="cecilio-lesson6-first-position-d-string.abc">cecilio-lesson6-first-position-d-string</option>
        <option value="cecilio-lesson6-ode-to-joy.abc">cecilio-lesson6-ode-to-joy</option>
        <option value="cecilio-lesson6-scherzando.abc">cecilio-lesson6-scherzando</option>
        <option value="cecilio-lesson7-can-can.abc">cecilio-lesson7-can-can</option>
        <option value="cecilio-lesson7-country-gardens.abc">cecilio-lesson7-country-gardens</option>
        <option value="cecilio-lesson7-gavotte.abc">cecilio-lesson7-gavotte</option>
        <option value="cecilio-lesson8-dixie.abc">cecilio-lesson8-dixie</option>
        <option value="cecilio-lesson8-largo.abc">cecilio-lesson8-largo</option>
        <option value="hot-cross-buns.abc">hot-cross-buns</option>
        <option value="lesson1-open-string-exercise-1.abc">lesson1-open-string-exercise-1</option>
        <option value="lesson1-open-string-exercise-2.abc">lesson1-open-string-exercise-2</option>
        <option value="lesson1-open-string-exercise-3.abc">lesson1-open-string-exercise-3</option>
        <option value="lesson1-open-string-exercise-4.abc">lesson1-open-string-exercise-4</option>
        <option value="lesson1-open-string-exercise-5.abc">lesson1-open-string-exercise-5</option>
        <option value="lesson1-open-string-exercise-6.abc">lesson1-open-string-exercise-6</option>
        <option value="lesson2-1st-finger-exercise-1.abc">lesson2-1st-finger-exercise-1</option>
        <option value="lesson2-1st-finger-exercise-2.abc">lesson2-1st-finger-exercise-2</option>
        <option value="lesson2-1st-finger-exercise-3.abc">lesson2-1st-finger-exercise-3</option>
        <option value="lesson2-1st-finger-exercise-4.abc">lesson2-1st-finger-exercise-4</option>
        <option value="lesson2-1st-finger-exercise-5.abc">lesson2-1st-finger-exercise-5</option>
        <option value="lesson2-1st-finger-exercise-6.abc">lesson2-1st-finger-exercise-6</option>
      </select>

      <label>Tempo:</label>
      <select onChange={(e) => setTempo(Number(e.target.value))}>
        <option value="60">60 BPM</option>
        <option value="120">120 BPM</option>
        <option value="180">180 BPM</option>
      </select>
    </div>
  );
};

export default Controls;

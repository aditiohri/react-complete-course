import React from "react";
import "./CharComponent.css";

export default function CharComponent({ letter, deleteLetterHandler }) {
  return (
    <p>
      <button onClick={deleteLetterHandler}>{letter}</button>
    </p>
  );
}

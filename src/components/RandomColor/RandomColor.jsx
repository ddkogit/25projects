import React, { useEffect, useRef } from "react";
import { useState } from "react";

import "./RandomColor.css";
function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const [copyMessage, setCopyMessage] = useState("");

  const colorRef = useRef(null);
  const generateRandomColro = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleHex = () => {
    const colorCode = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += colorCode[generateRandomColro(colorCode.length)];
    }

    setColor(hexColor);
  };

  const handleRgb = () => {
    const r = generateRandomColro(256);
    const g = generateRandomColro(256);
    const b = generateRandomColro(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  const copyColorCode = () => {
    const colorCode = colorRef.current.textContent;

    navigator.clipboard.writeText(colorCode);

    setTimeout(()=>{
        setCopyMessage("Copied to Clipboard");
    },0);
    setTimeout(()=>{
        setCopyMessage("");
    },700);
  };
  useEffect(() => {
    typeOfColor === "hex" ? handleHex() : handleRgb();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <div
        className="random-color-button"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          gap: "20px",
        }}
      >
        <button
          style={{
            textDecoration: typeOfColor === "hex" ? "underline" : "",
          }}
          onClick={() => setTypeOfColor("hex")}
        >
          Create Hex
        </button>
        <button
          style={{
            textDecoration: typeOfColor === "rgb" ? "underline" : "",
          }}
          onClick={() => setTypeOfColor("rgb")}
        >
          Create RGB
        </button>
        <button onClick={typeOfColor === "hex" ? handleHex : handleRgb}>
          Generate Random
        </button>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "200px",
          margin: "0 auto",
          height:"150px",

          padding: "20px",
          textAlign: "center",
          borderRadius: "10px 10px 0 0",
        }}
      >
        <h1>Color Code:</h1>

        <h2
          ref={colorRef}
          onClick={copyColorCode}
          style={{
            cursor: "pointer",
          }}
        >
          {color}
        </h2>
        <h3>{copyMessage}</h3>
      </div>
    </div>
  );
}

export default RandomColor;

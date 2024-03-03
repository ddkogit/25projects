import React, { useEffect } from "react";
import { useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

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

  useEffect(() => {
    typeOfColor === "hex" ? handleHex() : handleRgb();
  }, [typeOfColor]);

  console.log(typeOfColor);
  console.log(color);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <div>
        <button onClick={() => setTypeOfColor("hex")}>Create Hex</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB</button>
        <button onClick={typeOfColor === "hex" ? handleHex : handleRgb}>
          Generate Random
        </button>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "200px",
          margin: "0 auto",

          padding: "20px",
          textAlign:"center",
          borderRadius:"10px 10px 0 0"
        }}
      >
        <h1>Color Code:</h1>
        <h2>{color}</h2>
      </div>
    </div>
  );
}

export default RandomColor;

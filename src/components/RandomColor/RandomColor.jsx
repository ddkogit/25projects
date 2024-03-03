import React from 'react'
import { useState } from 'react'

function RandomColor() {
    const [typeOfColor, setTypeOfColor]= useState("hex");
    const [color,setColor] = useState("#000000");
  return (
    <div style={{
        width:"100vw",
        height:"100vh",
        backgroundColor:color,
    }}>
        <button>Hex</button>
        <button>RGB</button>
        <button>Random</button>
    </div>
  )
}

export default RandomColor
import React, { useState } from "react";

import "./Accordion.css";
import data from "./data";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection,setEnableMultiSelection] = useState(false);

  console.log(enableMultiSelection);
  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };


  return (
    <div className="wrapper">
      <div className="accordion">

        <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)} className="multi-selection">
          Enable Multi-Selection
        </button>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id}>
              <div
                className="title"
                onClick={() => handleSingleSelection(item.id)}
              >
                <h3>{item.question}</h3>

                <span>+</span>
              </div>

              {selected === item.id ? <div>{item.answer}</div> : null}
            </div>
          ))
        ) : (
          <div>Data not found</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;

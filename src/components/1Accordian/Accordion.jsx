import React, { useState } from "react";

import "./Accordion.css";
import data from "./data";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelection = (id) => {
    const copyMultiple = [...multiple];

    if (copyMultiple.indexOf(id) === -1) {
      copyMultiple.push(id);
    } else {
      copyMultiple.splice(copyMultiple.indexOf(id), 1);
    }

    setMultiple(copyMultiple);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        <button
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          className="multi-selection"
        >
          Enable Multi-Selection
        </button>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id}
            onClick={() =>
              enableMultiSelection
                ? handleMultiSelection(item.id)
                : handleSingleSelection(item.id)
            }>
              <div
                className="title"
               
              >
                <h3>{item.question}</h3>
                <span>
                  {enableMultiSelection
                    ? multiple.includes(item.id)
                      ? "-"
                      : "+"
                    : selected === item.id
                    ? "-"
                    : "+"}
                </span>
              </div>

              {enableMultiSelection
                ? multiple.indexOf(item.id) !== -1 && <div>{item.answer}</div>
                : selected === item.id && <div>{item.answer}</div>}
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

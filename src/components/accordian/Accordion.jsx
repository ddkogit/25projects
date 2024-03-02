import React, { useState } from "react";

import "./Accordion.css";
import data from "./data";

function Accordion() {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (id) => {
    setSelected(id);
  };
  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="items" key={item.id}>
              <div 
              onClick={()=>handleSingleSelection(item.id)}
              className="question">
                <h3>

                {item.question}
                </h3>
                </div>
              <span>+</span>
            </div>

           
          ))

          

        ) : (
          <div> No data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;

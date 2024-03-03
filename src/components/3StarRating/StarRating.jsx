import React, { useState } from "react";
import "./StarRating.css";
import { FaStar } from "react-icons/fa";

function StarRating({ noOfStarts = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };
  const handleHover = (index) => {
    setHover(index);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };

  console.log(rating);

  return (
    <div>
      {[...Array(noOfStarts)].map((star, index) => {
        index += 1;

        return (
          <FaStar
          size={50}
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
}

export default StarRating;

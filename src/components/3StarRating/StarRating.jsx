import React, { useState } from "react";
import "./StarRating.css";
import { FaStar } from "react-icons/fa";

function StarRating({noOfStarts=5}) {

  const [rating,setRating]= useState(0);
  const [hover,setHover]= useState(0);

  const handleClick=()=>{
    
  }
  const handleHover=()=>{

  }
  const handleMouseLeave=()=>{

  }

  return(

    <div className="star-rating">

      {
        [...Array(noOfStarts)].map((star,index)=>(
          <FaStar key={index} 
          
          />
        ))
      }

      </div>
      ) 
}

export default StarRating;

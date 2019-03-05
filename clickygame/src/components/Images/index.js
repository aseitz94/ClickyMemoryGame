import React from "react";
import starTrek from "../StarTrek"


import "./style.css";

function Images(props) {
  console.log(starTrek)
  return (
    <div className="card">
      <div className="img-container">
          <img onClick={()=>{props.handleCardShuffle(starTrek)}} alt={props.name} src={props.image} />
        
        
      </div>
    </div>
  );
}

export default Images;

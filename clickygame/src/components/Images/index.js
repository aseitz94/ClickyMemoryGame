import React from "react";
import starTrek from "../StarTrek"

import "./style.css";

function Images(props) {
  console.log(starTrek)
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <span></span>
    </div>
  );
}

export default Images;

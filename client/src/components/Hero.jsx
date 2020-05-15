import React from "react";


const Hero = (props) => (
  <div className="heroDiv">
    
    <div className="heroChildren">{props.children}</div>
   
  </div>
);
export default Hero;
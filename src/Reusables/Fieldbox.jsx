import React from "react";
import "./Fieldbox.css"

function Fieldbox({width}) {
  return (
    <div className="fieldbox" style={{width:width}}>
      <input type="text" />
      <div
        style={{
          background: "rgba(7,142,255,1)",
          width: "20%",
          height: "100%",
        }}
      ></div>
    </div>
  );
}

export default Fieldbox;

import React from "react";
import "./squaredPressable.css";

const SquaredPressable = ({ icon, info, icon_color, background, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="icon-text"
      style={{ background: background, cursor: "pointer" }} // ✅ Fix background style
    >
      <div style={{ color: icon_color }}> {/* ✅ Apply icon color */}
        {icon}
      </div>
      <p>{info}</p>
    </div>
  );
};

export default SquaredPressable;

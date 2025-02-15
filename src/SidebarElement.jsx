import React from "react";
import "./SidebarElement.css";

function SidebarElement({ selected, Icon, title }) {
  return (
    <div className={`sidebarElement ${selected && "selected"}`}>
      <Icon className={"SidebarElement-icon"} />
      <h2 className="sidebarElement-title">{title}</h2>
    </div>
  );
}

export default SidebarElement;

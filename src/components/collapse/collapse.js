import React, { useState } from "react";
import topArrow from "../../assets/logo/topArrow.svg";
import bottomArrow from "../../assets/logo/bottomArrow.svg";

export default function Collapse(props) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse_container">
      <div className="button_container" onClick={toggle}>
        <div className="collapse_button">
          <p>{props.label}</p>
        </div>
        {open ? 
        (<img src={topArrow} className="topArrow" alt="topArrow" />) 
        : 
        (<img src={bottomArrow} className="bottomArrow" alt="bottomArrow" />)}
      </div>
      {open && <div className="collapse_content"> {props.content} </div>}
    </div>
  );
}

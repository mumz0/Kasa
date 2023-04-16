import React, { useState } from "react";
import bottomArrow from "../../assets/logo/bottomArrow.png";

export default function Collapse(props) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="collapse">
      <div className="collapse__button-container" onClick={toggle}>
        <div className="button-content">
          <p className="button-content__text">{props.label}</p>

          <img
            src={bottomArrow}
            className={`button-content__arrow ${open ? 'button-content__arrow-rotate' : ''}`}
            alt="bottomArrow"
          />
        </div>
      </div>
      {open && <div className="collapse__content">{props.content}</div>}
    </div>
  );
}
import React from "react";
import "./button.css";

export default function Button(props) {
  return (
    <div className="button">
      {props.icon && <props.icon />}
      {props.children}
    </div>
  );
}

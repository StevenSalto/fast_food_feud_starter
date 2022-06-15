import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, onclickFunc, oncloseFunc}) {
  let buttonClassName;
  if(isActive) {
    buttonClassName='chip active';
  } else {
    buttonClassName='chip';
  }
  return (
    <button className={buttonClassName} onClick={onclickFunc}>
      <p className="label">{label}</p>
      <span className="close" role="button" onClick={oncloseFunc}>{`X`}</span>
    </button>
  )
}

export default Chip

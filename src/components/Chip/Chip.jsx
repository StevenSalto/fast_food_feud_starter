import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false }) {
  let buttonClassName;
  const [status, setStatus] = React.useState(isActive)
  const handleBtnClick = () => {
    if(!status) {
      setStatus(true)
    } else {
      setStatus(false)
    }
  }

  if(status) {
    buttonClassName='chip active';
  } else {
    buttonClassName='chip';
  }

  return (
    <button className={buttonClassName} onClick={handleBtnClick}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip

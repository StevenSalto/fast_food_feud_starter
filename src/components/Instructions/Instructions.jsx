import * as React from "react"
import "./Instructions.css"

export function Instructions(props) {
  return (
    <aside className="instructions">
      <p>{
      //for (const prop in obj) {
        props.instructions.instructions['start']
        }
      </p>
    </aside>
  )
}

export default Instructions

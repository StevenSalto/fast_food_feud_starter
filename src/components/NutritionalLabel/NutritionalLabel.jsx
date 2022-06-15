import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>
      {console.log("nutritionalLabel props: ", props.item)}
      {console.log("Nut facts import array: ", nutritionFacts)}
      <h4 className="item-name">{props.item.item_name}</h4>

      <ul className="fact-list">{
        console.log("making facts.........")}{
      nutritionFacts.map(
        (elem) => ( 
        <NutritionalLabelFact key={elem.id} label={elem.label} attribute={elem.attribute} item={props.item}/>
        )
      )}</ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      {console.log("nutritionallabelfacts props: ", props)}
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.item[props.attribute]}</span>
    </li>
  )
}

export default NutritionalLabel

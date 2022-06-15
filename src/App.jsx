import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import "./App.css"
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import Chip from "./components/Chip/Chip"
import NutritionLabel from "./components/NutritionalLabel/NutritionalLabel"

import { act } from "react-dom/test-utils"
// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()


export function App() {
  const [category, setCategory] = React.useState("")
  const [restaurant, setRestaurant] = React.useState("")
  const [menuItem, setMenuItem] = React.useState("")
  
  const setCurrentCategory = (cat) => {
    setCategory(cat);
  }
  const setCurrentRestaurant = (rest) => {
    setRestaurant(rest);
  }
  const setCurrentMenuItem = (menItem) => {
    setMenuItem(menItem);
  } 
  function determineInstruction() {
    let inst = appInfo.instructions.start;
    console.log(inst)
    if(category!=''){
      if(restaurant!=''){
        if(menuItem!=''){
          inst = appInfo.instructions.allSelected;
        }else{
          inst = appInfo.instructions.noSelectedItem;
        }
      }else{
        inst = appInfo.instructions.onlyCategory;
      }
    }else{
      if(restaurant!=''){
        inst = appInfo.instructions.onlyRestaurant;
      }
    }
    console.log(inst)
    return inst;
  }
  var currentMenuItems = data.filter((elem) => {return (elem.food_category == category) && (elem.restaurant == restaurant)})
  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {
          categories.map((cat) => (
          <Chip label={cat} isActive={(cat==category ? true:false)} onclickFunc={()=>{
            setCurrentCategory(cat);
          }}/>
          ))}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {<Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description} />}

        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">{
          restaurants.map((rest) => (
          <Chip label={rest} isActive={(rest == restaurant ? true:false)} onclickFunc={()=>{
            setCurrentRestaurant(rest);
          }}/>))}
          </div>
        </div>
        
        {<Instructions instructions={determineInstruction()}/>}

        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {
            currentMenuItems.map(
              (item) => (<Chip label={item.item_name} isActive={(item==menuItem ? true:false)} onclickFunc={() => {
                setCurrentMenuItem(item);
              }}/>))
            }
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">{<NutritionLabel item={menuItem}/>}</div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App

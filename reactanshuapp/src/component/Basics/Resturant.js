import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi"
import MenuCard from "./MenuCard"
import Navbar from "./Navbar"


const uniqueList = [
  ...new Set(Menu.map((curElem)=> {
  return curElem.category
})),
 "All"
]

console.log(uniqueList)
const Resturant = () => {

  const [menuData, setMenuData] = React.useState(Menu)
  const [menuList, setMenuList] = React.useState(uniqueList)
  
  const FilterItem = (category) => {
    if(category==="All"){
      setMenuData(Menu);
      return
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category

    })
      setMenuData(updatedList)
  }
  return (
    <>

      
      <Navbar FilterItem={FilterItem} menuList={menuList}/>
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant;

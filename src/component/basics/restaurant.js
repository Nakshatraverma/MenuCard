import React, { useState } from "react";
import './style.css';
import menu from "./menuApi.js";
import MenuCard from "./menucard.js";
import Navbar from './navbar.js';

const uniquelist = [...new Set(menu.map((curElem) => curElem.category)),"All"];
console.log(uniquelist);

const Restaurant = () => {
  const [menuData, setmenuData] = useState(menu);
  const [menulist, setmenulist] = useState(uniquelist);

  const filteritem = (category) => {

    if(category==="All"){
      setmenuData(menu);
      return;
    }
    const updatedlist = menu.filter((curElem) => curElem.category === category);
    setmenuData(updatedlist);
  };

  return (
    <>
      <Navbar filteritem={filteritem} menulist={menulist} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;

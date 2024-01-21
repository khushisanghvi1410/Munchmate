import React from 'react'
import { useState } from "react";
import RestaurantMenu from './RestaurantMenu';
function RestaurantInnerHeader({data}) {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
      };
  return (
    <div className=" bg-gray-50 w-1/2 mx-auto my-4 p-4">
    <div
      className="flex justify-between cursor-pointer "
      onClick={handleClick}
    >
      <span>
        {data.title} {data.itemCards.length}
      </span>
      <span>⬇️</span>
    </div>
    {show && <RestaurantMenu cards={data.itemCards}></RestaurantMenu>}
  </div>
  )
}

export default RestaurantInnerHeader
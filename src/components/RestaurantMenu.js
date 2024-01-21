import React from "react";
import { images } from "../utils/contants";
function RestaurantMenu({ index, cards }) {
  return (
    <div className="bg-white rounded-lg p-5 m-2">
      {cards.map((data) => {
        return (
          <div
            key={data?.card?.info?.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
          >
            <div>
              <img
                src={images + data?.card.info.imageId}
                className="w-14 h-auto"
              ></img>
              <button className="p-2 bg-white shadow-lg absolute m-auto">
                Add+
              </button>
            </div>
            <div>
              <div className="py-12">
                <span>{data?.card.info.name}</span>
                <span>
                  -RS{" "}
                  {data?.card.info.price
                    ? data?.card.info.price / 100
                    : data?.card.info.defaultprice}
                </span>
                <p className="text-xs">{data?.card.info.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RestaurantMenu;

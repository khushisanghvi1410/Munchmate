import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { images } from "../utils/contants";
import useRestaurantDetail from "../utils/useRestaurantDetail";
import RestaurantInnerHeader from "./RestaurantInnerHeader";
import { useState } from "react";
function RestaurantDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const restaurantDetail = useRestaurantDetail(id);
  if (restaurantDetail === null) {
    return <Shimmer></Shimmer>;
  }
  const { name, avgRating, costForTwoMessage, cuisines, cloudinaryImageId } =
    restaurantDetail?.data?.cards[2]?.card?.card?.info;

  const { itemsArray } =
    restaurantDetail?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log(itemsArray);

  const categories =
    restaurantDetail?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (data) => {
        if (
          data?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          return data;
        }
      }
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6text-2xl"> {name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(" , ")} {costForTwoMessage}
      </p>

      {/* categories accordian */}

      {categories.map((category) => {
        return(

          <RestaurantInnerHeader
          data={category.card.card}
          ></RestaurantInnerHeader>
          )
        })}
    </div>
  );
}

export default RestaurantDetails;

import { images } from "../utils/contants";
import { Link } from "react-router-dom";
const RestCard = ({ resData }) => {
  console.log(resData);
  const id  = resData.info.id;
  return (
    <div className="res-card m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-slate-400 cursor-pointer">
      {/* {resData.info.promoted===true?<label className="font-bold">Promoted</label>:"" } */}
      <img
        className="res-logo rounded-lg"
        src={images + resData.info.cloudinaryImageId}
        alt="FoodImage"
      ></img>
      <h3 className="font-bold py-5 text-lg"> {resData.info.name}</h3>
      <h4>Cusines: {resData.info.cuisines.join(", ")}</h4>
      <h4>Avg Rating: {resData.info.avgRating} stars</h4>
      <h4>Delivery Time: {resData.info.sla.deliveryTime} minutes</h4>
      <Link to={`/restaurants/${id}`} >Read More</Link>
    </div>
  );
};

// Higher Order Component

export const RestaurantCardEnhanced = (RestCard) => {
  return ({ resData }) => {
    return (
      <div>
        <label className="absolute bg-black text-white font-bold rounded-lg m-5 p-2">
          Promoted
        </label>
        <RestCard resData={resData}></RestCard>
      </div>
    );
  };
};

export default RestCard;

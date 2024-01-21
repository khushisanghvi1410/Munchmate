import RestCard, { RestaurantCardEnhanced } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import resObj from "../data/data";
import { useState, useEffect } from "react";
import useStatus from "../utils/useStatus";
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [copylistOfRestaturant, setcopyListofRestaurant] = useState();
  const [value, setValue] = useState("");
  const status = useStatus();
  // const [online, setOnline] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const removeFilter = () => {
    setlistOfRestaurants(copylistOfRestaturant);
  };

  const searchClick = () => {
    const filterdata = copylistOfRestaturant.filter((data) => {
      if (data.info.name.includes(value)) return data;
    });

    setlistOfRestaurants(filterdata);
    setValue("");
  };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=19.216888&lng=72.843277"
    );
    const jsondata = await data.json();

    setlistOfRestaurants(
      jsondata.data.success.cards[1].gridWidget.gridElements.infoWithStyle
        .restaurants
    );

    setcopyListofRestaurant(
      jsondata.data.success.cards[1].gridWidget.gridElements.infoWithStyle
        .restaurants
    );
  };

  const handleClick = () => {
    const filterarray = listOfRestaurants.filter((resData) => {
      if (resData.info.avgRating > 4.2) {
        return resData;
      }
    });
    setlistOfRestaurants(filterarray);
  };

  if (status === false) return <h1>Looks Like you are Offline</h1>;
  const RestaurantCardEnhancedComponent = RestaurantCardEnhanced(RestCard);
  return (
    <div className="body">
      <div className="flex justify-between">
        <div className="flex">
          <button
            className="filter-btn mx-4 bg-gray-200 p-2"
            onClick={handleClick}
            onDoubleClick={removeFilter}
          >
            Top Rated Restaurant i.e {`>`} 4.1 Rating 🚀
          </button>
          <div className="mx-4 bg-gray-200 p-2 ">
            <button onClick={removeFilter}>
              To remove the filter click on it
            </button>
          </div>
        </div>
        <div className="border-black">
          <input
            placeholder="Search"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          ></input>
          <button className="bg-green-200 mx-5 px-2 py-4" onClick={searchClick}>
            Search
          </button>
        </div>
      </div>
      {listOfRestaurants.length === 0 && status === false ? (
        <Shimmer></Shimmer>
      ) : (
        <div className="flex flex-wrap justify-around">
          {listOfRestaurants.map((restData) => {
            return (
              <div>
                {restData.info.promoted === true ? (
                  <RestaurantCardEnhancedComponent
                    key={restData.info.id}
                    resData={restData}
                  ></RestaurantCardEnhancedComponent>
                ) : (
                  <RestCard
                    key={restData.info.id}
                    resData={restData}
                  ></RestCard>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;

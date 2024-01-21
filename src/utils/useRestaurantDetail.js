import { useState, useEffect } from "react";
const useRestaurantDetail = (id) => {
  const [object, setObject] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.216888&lng=72.843277&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsonData = await data.json();
    console.log(jsonData.data.cards[5]);
    setObject(jsonData);
  };

  return object;
};

export default useRestaurantDetail;

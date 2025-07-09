import RestrauntCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

//we want to show top rated restuarant but maine bad logic lagaya aise nahi hoga below answer dekho

//Jaise ki tumne dekha apply krwa diya tumne lekin change nhi hua filter iska mtlb react has super power

const Body = () => {
  //Local state varibale - Super powerful variable
  //remove the fake and add resObj
  // const [listOfRestaurants, setListOfRestaurants] = useState([{
  //   "id": 1,
  //   "name": "Spice Villa",
  //   "cuisines": ["North Indian", "Chinese"],
  //   "rating": 4.3,
  //   "deliveryTime": "30 mins",
  //   "image": "https://source.unsplash.com/600x400/?indian-food"
  // },
  // {
  //   "id": 2,
  //   "name": "Pizza Paradise",
  //   "cuisines": ["Italian", "Fast Food"],
  //   "rating": 3.6,
  //   "deliveryTime": "25 mins",
  //   "image": "https://source.unsplash.com/600x400/?pizza"
  // },])

  const [listOfRestaurants, setListOfRestaurants] = useState([]); //correct way
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5003144&lng=77.3781762&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //optional chaining
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="btn-search"
            onClick={() => {
              const filterSearchText = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filterSearchText);
            }}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant, index) => {
          return <RestrauntCard key={index} resData={restaurant?.info} />;
        })}
      </div>
    </div>
  );
};
export default Body;

//you have give error resObj is not defined to tum direct yaha pass kr doge object but this is not a good way

/** 6th Lecture
 * Approcahes
 * 1-Page Loads->API->Render
 * suppose API takes 500ms, so wait then render, yaha par page freeze ho jayega, tumko ye shi lg rha hoga but ye way shi nhi hai.
 *
 * 2-Loads->Render->API call->Render again -so we'll use this because this is a better approach, Better UX, Yha soch rhe ho Render twice hai, but no worry dost because React render too fast.
 *
 * --->so we will follow 2nd approach.
 *
 * all after implemented code is working fine, but taking sometime how to improve the expriences.
 * apply Loading-->but showing a screen loading is good way -not dude use instead of shimmer UI(uses fake page)
 *
 * -Render with Shimmer UI
 **/

//so use fetch for fetching the data which is given from browser not by JS

//when we have return the useEffect inside the body function like this when render the component then call the callback function then it renders.

//Arrow function is a callback function

//Hook is normal Js function which is given by the react.

//Normal Js variable
// let listOfRestaurants = [
//   {
//     "id": 1,
//     "name": "Spice Villa",
//     "cuisines": ["North Indian", "Chinese"],
//     "rating": 4.3,
//     "deliveryTime": "30 mins",
//     "image": "https://source.unsplash.com/600x400/?indian-food"
//   },
//   {
//     "id": 2,
//     "name": "Pizza Paradise",
//     "cuisines": ["Italian", "Fast Food"],
//     "rating": 3.6,
//     "deliveryTime": "25 mins",
//     "image": "https://source.unsplash.com/600x400/?pizza"
//   },
// ]

//its a normal variable so used the hooks instead of

/**
 * Whenever state variables update, react triggers a reconcilation cycle(re-render the component)
 */

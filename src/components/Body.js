import { resObj } from "../utils/mockData";
import RestrauntCard from "./RestaurantCard";
import { useState } from "react";

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

  const [listOfRestaurants, setListOfRestaurants] = useState(resObj) //correct way

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

  return (
    <div className='body'>
      <div className='filter'>
        <button className="filter-btn" onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => res.rating > 4);
          setListOfRestaurants(filteredList)
        }}>Top Rated Restaurants</button>
      </div>
      <div className='res-container'>
        {listOfRestaurants.map((restaurant) => (
          <RestrauntCard
            key={restaurant.id}
            resData={restaurant} />
        ))}

      </div>
    </div>
  )
}
export default Body;

//you have give error resObj is not defined to tum direct yaha pass kr doge object but this is not a good way
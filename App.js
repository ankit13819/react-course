import React from 'react';
import ReactDOM from 'react-dom/client';
import '/index.css'



//Steps -when building the project do plan with pen and paper

/**
 * Header 
 * -Logo
 * -Nav Items
 * Body
 * -Search
 * -RestaurantContainer
 *   -RestuarantCard
 *     -img
 *     -Name of Res, star Rating, cuisine etc.
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact

**/

/**
 * Components- A functions which the return the Jsx.
 **/

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img src='https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png' className='logo' alt='logo' style={{ backgroundColor: 'orange' }} />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>

      </div>
    </div>
  )
}

//Styles css - styles defined the js object 
//But inline css is not prefered mostly.

const styleCard = {
  backgroundColor: '#f0f0f0 '
}

const RestrauntCard = (props) => {
  const { resData } = props;

  const { name, cuisines, rating, deliveryTime } = resData

  return (
    <div className='res-card' style={styleCard}>
      <img className='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/097900ca-5d2d-4bb0-8e54-aede1e58dfd8_eab3796c-ac17-48fd-bfc7-6356c6f89783' alt='res-logo' />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  )
}

const resObj = [
  {
    "id": 1,
    "name": "Spice Villa",
    "cuisines": ["North Indian", "Chinese"],
    "rating": 4.3,
    "deliveryTime": "30 mins",
    "image": "https://source.unsplash.com/600x400/?indian-food"
  },
  {
    "id": 2,
    "name": "Pizza Paradise",
    "cuisines": ["Italian", "Fast Food"],
    "rating": 4.6,
    "deliveryTime": "25 mins",
    "image": "https://source.unsplash.com/600x400/?pizza"
  },
  {
    "id": 3,
    "name": "Healthy Bowl",
    "cuisines": ["Salads", "Healthy Food"],
    "rating": 4.2,
    "deliveryTime": "20 mins",
    "image": "https://source.unsplash.com/600x400/?salad"
  },
  {
    "id": 4,
    "name": "Biryani Kingdom",
    "cuisines": ["Biryani", "Mughlai"],
    "rating": 4.5,
    "deliveryTime": "35 mins",
    "image": "https://source.unsplash.com/600x400/?biryani"
  },
  {
    "id": 5,
    "name": "Street Wok",
    "cuisines": ["Chinese", "Thai"],
    "rating": 4.0,
    "deliveryTime": "28 mins",
    "image": "https://source.unsplash.com/600x400/?noodles"
  },
  {
    "id": 6,
    "name": "Burger Club",
    "cuisines": ["Burgers", "American"],
    "rating": 4.4,
    "deliveryTime": "22 mins",
    "image": "https://source.unsplash.com/600x400/?burger"
  },
  {
    "id": 7,
    "name": "Tandoori Nights",
    "cuisines": ["Tandoori", "Grill"],
    "rating": 4.1,
    "deliveryTime": "30 mins",
    "image": "https://source.unsplash.com/600x400/?tandoori"
  },
  {
    "id": 8,
    "name": "Café Bliss",
    "cuisines": ["Cafe", "Desserts", "Coffee"],
    "rating": 4.7,
    "deliveryTime": "18 mins",
    "image": "https://source.unsplash.com/600x400/?coffee"
  }
]



const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        {resObj.map((restaurant) => (
          <RestrauntCard
            key={restaurant.id}
            resData={restaurant} />
        ))}

      </div>
    </div>
  )
}

//card ko dynamic krne ki kosis kro jyada se jyada

/**
 * as we see hum upr use krne ja rhe hai aur dekho jime value define kroge, usi component ke andar props pass krke dekh lena console check krke.
 * Note - But some cool developer want to pass data in component like destructuring method this is good way also
 Ex- instead of props use - {resName,cuisine} like this
2- But some developer want to like this below 
   const {resName,cuisine}=props this is also good way and optimized also
 *  How to the data comes from the backend it is in Json form

   But You can see all the carosuel different for different location - this handle driven by data or config , this backend controlling the UI from backend API 
   
   I implemented fake data here from the API so this is config API data

   Note - we only explaing how to big project or work in production or introduction - Interviewer also asked please keep remember ,
   you can't be senior engineer when you don't communicate with backend developer for API how coming

* Dekha maine simple fake data obj restaurant component me call kiya ek var resData  naam dekar phirs isi component me pass kr diya 

iska mtlb object ko kisi varibale me store krke props ki trs same component function me maine call kr liya aur data easily mil gya.

 **/



const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />)


import "/index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";

//

/**
 * Components- A functions which the return the Jsx.
 **/

//Styles css - styles defined the js object
//But inline css is not prefered mostly.

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

* React Docs never recommend how to keep folder structure but you should be know how to keep the file and folder structure

 **/

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout



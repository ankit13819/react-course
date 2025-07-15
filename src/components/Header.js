import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnClickName, setBtnClickName] = useState("Logout")
  const onlineStatus = useOnlineStatus()


  return (
    <div className="flex justify-between bg-pink-100">
      <div className="logo-container">
        <img
          src={LOGO_URL}
          className="w-56"
          alt="logo"
          style={{ backgroundColor: "orange" }}
        />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li>{onlineStatus ? "online" : "offline"} {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>Contact Us</li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => btnClickName === 'logout' ? setBtnClickName('login') : setBtnClickName('logout')}>{btnClickName}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;

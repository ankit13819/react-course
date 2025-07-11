import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnClickName, setBtnClickName] = useState("Logout")

  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
          className="logo"
          alt="logo"
          style={{ backgroundColor: "orange" }}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => btnClickName === 'logout' ? setBtnClickName('login') : setBtnClickName('logout')}>{btnClickName}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;

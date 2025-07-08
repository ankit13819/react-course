const Header = () => {
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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;

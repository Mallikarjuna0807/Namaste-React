import { useState } from "react";
import { LOGO_URL } from "./utility/cdnlinks";
import { useState } from "react";
import { Link } from "react-router-dom";

const Head = () => {
  // let buttonName = "Login";
  const [btmName, setbtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <Link to="/about">
            <li>About</li>
          </Link>
          <li><Link to="/contact">contact Us</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btmName === "Login" ? setbtn("LogOut") : setbtn("Login");
            }}
          >
            {btmName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Head;

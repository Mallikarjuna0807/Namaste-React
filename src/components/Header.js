import { useState } from "react";
import { LOGO_URL } from "./utility/cdnlinks";
import { useState } from "react";

const Head = () => {
  // let buttonName = "Login";
  const [btmName, setbtn] = useState("Login")
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btmName === "Login" ? setbtn("LogOut") : setbtn("Login")
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

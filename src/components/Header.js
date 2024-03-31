import { useState } from "react";
import { LOGO_URL } from "./utility/cdnlinks";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "./utility/useOnline";

const Head = () => {
  // let buttonName = "Login";
  const [btmName, setbtn] = useState("Login");
  const online = useOnline();

  return (
    <div className="flex border-b-2 bg-gray-50 justify-between">
      <div className="">
        <img className="p-4 w-[150px]" src={LOGO_URL} />
      </div>
      <div className="">
        <ul className="flex p-4 m-6 text-xl">
          <li className="p-4">Online Status : {online ? "✅" :"🔴"}</li>
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <Link to="/about">
            <li className="p-4">About</li>
          </Link>
          <li className="p-4"><Link to="/contact">contact Us</Link></li>
          <li className="p-4">Cart</li>
          <button
            className="bg-green-100 px-4 m-2 py-2 items-center"
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

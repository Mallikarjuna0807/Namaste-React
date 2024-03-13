import { LOGO_URL } from "./utility/cdnlinks";

const Head = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src= {LOGO_URL}
          />
        </div>
        <div className="list">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Head;
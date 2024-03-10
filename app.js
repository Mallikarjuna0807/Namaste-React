import React from "react";
import ReactDOM from "react-dom/client";

const Head = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
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

const Rescards = () => {
  return (
    <div className="rescards">
      <img
        className="resimg"
        src="https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg"
        />
        <h4>lakshmi foods</h4>
      <h5>4.5 stars</h5>
      <h5>35 min</h5>
    </div>
  );
};
const Body = () => {
  return (
    <div className="res-container">
      <div className="res">
        <Rescards />
        <Rescards />
        <Rescards />
        <Rescards />
        <Rescards />
        <Rescards />
        <Rescards />
        <Rescards />
        <Rescards />
        <Rescards />
        <Rescards />
        <Rescards />
        <Rescards />
        <Rescards />
        <Rescards />
        <Rescards />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Head />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

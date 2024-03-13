import React from "react";
import ReactDOM from "react-dom/client";
import Head from "./components/Header";
import Body from "./components/body";





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

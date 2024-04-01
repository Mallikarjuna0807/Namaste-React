import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({ data, showItems, setShowIndex}) => {
  console.log(data);
  const handleClick = () => {
        setShowIndex();  
  }
  return (
    <div>
      {/* // heard category */}
      <div className="w-6/12 mx-auto my-4  bg-gray-100 shadow-lg p-3">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* // body of caregory */}
        {showItems && <ItemList item={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurentCategory;

import Rescards from "./Rescards";
import { useState } from "react";
import resList from "../utility/mokeData";

const Body = () => {

  const [listOfres, setresList] = useState([{resList}]);


  return (
    <div className="res-container">
      <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
          const resList1 = listOfres.filter((res) => res.info.avgRating > 4);
            setresList(resList1);
          }}
        >
          click the btn
        </button>
      </div>
      <div className="res">
        {resList.map((resList) => (
          <Rescards key={resList.info.id} resData={resList} />
        ))}
      </div>
    </div>
  );
};

export default Body;

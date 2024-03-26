import Rescards from "./Rescards";
import { useEffect, useState } from "react";
import resList from "./utility/mockData.js";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [listOfres, setlistOfres] = useState([]);
  const [filterRes, setfilterRes] = useState([])
  const [searchBox, setSearchbox] = useState("");


        
  useEffect(() => {
    // console.log("useEffect calls")
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=14.6862254&lng=77.5984758&apiKey=20240320160355"
    );
    const json = await data.json();
    console.log(
      // json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
      ?.restaurants
      );
    setlistOfres(
      // json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilterRes(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle
      ?.restaurants)

  };

  // return listOfres.length === 0 ?(
  //   <Shimmer/>)
  if (listOfres && listOfres.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="res-container">
      <div className="filter">
        <input
          placeholder="Search box"
          type="text"
          value={searchBox}
          onChange={(e) => {
            setSearchbox(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filterRes = listOfres.filter((res) =>
              res.info.name.toLowerCase().includes(searchBox.toLowerCase())
            );
            setfilterRes(filterRes);
          }}
        >
          Search
        </button>
        <button
          className="filter-button"
          onClick={() => {
            const filterList = listOfres.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfres(filterList);
          }}
        >
          Top Rating Button
        </button>
      </div>
      <div className="res">
        {/* {listOfres.map((resList1) => (
          <Rescards key={resList1.info.id} resData={resList1} />
        ))} */}
        {listOfres && filterRes.map((resList1) => (
            <Rescards key={resList1.info.id} resData={resList1} />
          ))}
      </div>
    </div>
  );
};

export default Body;

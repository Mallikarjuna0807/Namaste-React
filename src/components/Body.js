import Rescards from "./Rescards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";


const Body = () => {
  const [listOfres, setlistOfres] = useState([]);
  const [filterRes, setfilterRes] = useState([])
  const [searchBox, setSearchbox] = useState("");


        
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.6862254&lng=77.5984758&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json)
    console.log(
      // json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants
      );
    setlistOfres(
      // json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilterRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
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
          <Link key={resList1.info.id} to={"/restaurants/"+resList1.info.id}><Rescards resData={resList1} />
          </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;

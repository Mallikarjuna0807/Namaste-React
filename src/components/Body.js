import Rescards, {vegLabel} from "./Rescards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnline from "./utility/useOnline.js";

const Body = () => {
  const [listOfres, setlistOfres] = useState([]);
  const [filterRes, setfilterRes] = useState([]);
  const [searchBox, setSearchbox] = useState("");
  const ResVegPromote = vegLabel(Rescards);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.6862254&lng=77.5984758&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    console.log(
      // json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setlistOfres(
      // json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const online = useOnline();
  if (online === false) return <h1>check your network!!!</h1>;

  if (listOfres && listOfres.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="res-container">
      <div className="px-4">
        <input className="border border-solid border-black"
          placeholder="Search box"
          type="text"
          value={searchBox}
          onChange={(e) => {
            setSearchbox(e.target.value);
          }}
        />
        <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
          className="px-4 py-2 bg-gray-200 m-4 rounded-sm"
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
      <div className="flex flex-wrap">
        {/* {listOfres.map((resList1) => (
          <Rescards key={resList1.info.id} resData={resList1} />
        ))} */}
        {listOfres &&
          filterRes.map((resList1) => (
            <Link
              key={resList1.info.id}
              to={"/restaurants/" + resList1.info.id}
            >
              {resList1.info.veg ? (<ResVegPromote resData={resList1}/>) : (<Rescards resData={resList1} />)}
              
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;

import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resItem, setResItem] = useState(null);

  const param = useParams();
  console.log(param)

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=14.6862254&lng=77.5984758&restaurantId=669621&catalog_qa=undefined&submitAction=ENTER"
    );
    const josn = await data.json();
    console.log(josn?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    // console.log(josn?.data?.cards[2]?.card?.card?.info)
    console.log(josn?.data?.cards[2]?.card?.card?.info?.name)
    console.log(josn);
    // const {resItem} = josn?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    setResItem(josn.data);
  };

  if (resItem === null) return <Shimmer />;

  const {name,cuisines} = resItem?.cards[2]?.card?.card?.info;
  const {itemCards} = resItem?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log({itemCards})
  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join("-")}</p>
      <ul>
        {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name} - {"Rs."}{item.card.info.price/100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

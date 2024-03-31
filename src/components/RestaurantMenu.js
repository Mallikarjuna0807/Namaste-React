import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utility/useRestaurantMenu";
const RestaurantMenu = () => {

  const {resId} = useParams();  
  const resItem = useRestaurantMenu(resId);

console.log(resItem)
  if (resItem === null) return <Shimmer />;

  const {name,cuisines} = resItem?.cards[2]?.card?.card?.info;
  const {itemCards} = resItem?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
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

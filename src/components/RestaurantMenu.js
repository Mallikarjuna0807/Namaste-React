import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utility/useRestaurantMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resItem = useRestaurantMenu(resId);
const [showIndex, setShowIndex] = useState(null);


  // console.log(resItem);
  if (resItem === null) return <Shimmer />;

  const { name, cuisines } = resItem?.cards[2]?.card?.card?.info;
  // const { itemCards } =
  //   resItem?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const categories =
    resItem?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div className="text-center">
      <h1 className="my-4 font-bold text-xl">{name}</h1>
      <p className="text-center font-bold text-lg">{cuisines.join("-")}</p>
      {/* catagory titel */}
      {categories.map((catagory, index) => (
        <RestaurentCategory
          key={catagory?.card?.card?.title}
          data={catagory?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex= {() => setShowIndex(index)}
        />
      ))}
      {/*  */}
    </div>
  );
};

export default RestaurantMenu;

// <ul>
//         {itemCards.map((item) => (
//           <li key={item.card.info.id}>
//             {item.card.info.name} - {"Rs."}
//             {item.card.info.price / 100}
//           </li>
//         ))}
//       </ul>

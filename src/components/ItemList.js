import { CDN_URL } from "./utility/cdnlinks";

const ItemList = ({ item }) => {
  console.log(item);
  return (
    <div>
      {item.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >  
          <div className="w-[70%]">
            <div>
              <span className="py-2">{item.card.info.name}</span>
              <span> - ₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-xs ">{item.card.info.description}</p>
          </div>
          <div className="w-[20%]">
              <button className="wx-5 bg-white shadow-lg absolute mt-[78px] ml-10">Add +</button>
          <img
              src={CDN_URL + item.card.info.imageId}
            />
            </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

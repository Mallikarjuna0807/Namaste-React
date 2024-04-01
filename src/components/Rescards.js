import { CDN_URL } from "./utility/cdnlinks";

const Rescards = (props) => {
  const { resData } = props;
  // console.log(props);
  return (
    <div className="m-4 p-4 w-[200px] border bg-gray-100 rounded-sm h-[95%]">
      <img className="rounded-md h-36 w-[100%]" src={CDN_URL + resData.info.cloudinaryImageId} />
      <h4>{resData.info.name}</h4>
      <h5>{resData.info.avgRating}</h5>
      <h5>{resData.info.sla.deliveryTime}</h5>
    </div>
  );
};
export const vegLabel = (Rescards) =>{
  return (props) => {
    return(
      <div>
        <label>VEG</label>
        <Rescards {...props}/>
      </div>
    );
  };
};

export default Rescards;

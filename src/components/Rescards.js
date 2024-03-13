import { CDN_URL } from "./utility/cdnlinks";


const Rescards = (props) => {
    const { resData } = props;
    // console.log(props);
    return (
      <div className="rescards">
  
        <img
          className="resimg"
          src={
            CDN_URL +
            resData.info.cloudinaryImageId
          }
        />
        <h4>{resData.info.name}</h4>
        <h5>{resData.info.avgRating}</h5>
        <h5>{resData.info.sla.deliveryTime}</h5>
      </div>
    );
  };

  export default Rescards;
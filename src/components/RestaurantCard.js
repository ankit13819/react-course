import { styleCard } from "../utils/constants";

const RestrauntCard = (props) => {
  const { resData } = props;
  // const { name, cuisines, avgRating, cloudinaryImageId } = resData

  return (
    <div className='res-card' style={styleCard}>
      <img className='res-logo' src={`https://media-assets.swiggy.com/swiggy/image/upload/${resData?.cloudinaryImageId}`} alt='res-logo' />
      <h3>{resData?.name}</h3>
      <h4>{resData?.cuisines}</h4>
      <h4>{resData?.avgRating}</h4>
      <h4>deliveryTime</h4>
    </div>
  )
}

export default RestrauntCard
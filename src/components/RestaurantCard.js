import { styleCard } from "../utils/constants";

const RestrauntCard = (props) => {
  const { resData } = props;

  const { name, cuisines, rating, deliveryTime } = resData

  return (
    <div className='res-card' style={styleCard}>
      <img className='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2025/5/14/097900ca-5d2d-4bb0-8e54-aede1e58dfd8_eab3796c-ac17-48fd-bfc7-6356c6f89783' alt='res-logo' />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  )
}

export default RestrauntCard
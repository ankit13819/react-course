import { styleCard } from "../utils/constants";

const RestrauntCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, sla, costForTwo } = resData

  return (
    <div className='res-card' style={styleCard}>
      <img className='res-logo' src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`} alt='res-logo' />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  )
}

export default RestrauntCard

import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RetaurantMenu = () => {
  const { resId } = useParams()
  const resInfo = useRestaurantMenu(resId)

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")}- {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {item?.card?.info?.price}</li>
        ))}

        <li>Diet Coke</li>
      </ul>
    </div>
  );
};
export default RetaurantMenu;

import RestaurantCard from './RestaurantCard';
// named import
import {resList} from '../utils/mockData';
const Body = () => {
  // const data = fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
  return (
    <div className="container">
      <div className="cards">
        {/* Config driven UI */}
        {resList.map((res) => <RestaurantCard resName={res.resName}
          cuisine="Biryani, North Indian" key={res.id} />)}
      </div>
    </div>
  )
}

export default Body;
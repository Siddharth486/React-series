import RestaurantCard from './RestaurantCard'
const Body = () => {
  const resList = [
    {
      id: 1,
      resName: "Meghana Foods"
    },
    {
      id: 2,
      resName: "KFC"
    },
    {
      id: 3,
      resName: "McDonald's"
    },
    {
      id: 4,
      resName: "Dominos"
    }
  ];
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
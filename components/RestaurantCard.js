const RestaurantCard = ({resName,cuisine }) => {
  // console.log(props);
  return (
    <div
      className="card"
      style={{ background: '#f0f0f0' }}
    >
      <h3>{resName} </h3>
      <h6>{cuisine}</h6>
    </div>
  )
}

export default RestaurantCard;
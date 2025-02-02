const RestaurantCard = (props) => {
  console.log(props);
  return (
    <div
      className="card"
      style={{ background: '#f0f0f0' }}
    >
      <h3>{props.resName} </h3>
      <h6>{props.cuisine}</h6>
    </div>
  )
}

export default RestaurantCard;
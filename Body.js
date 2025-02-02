import RestaurantCard from './RestaurantCard'
const Body = () => {
  // const styleCard = { background: '#f0f0f0' };
  /***
  Introducing Props.
  Short form for properties. To dynamically send data to a
  component we use props. 
  Passing a prop to a function is like  passing an argument to a function.
  ** */
  return (
    <div className="container">
      <div className="cards">
        <RestaurantCard resName="Meghana Foods"
          cuisine="Biryani, North Indian" />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  )
}

export default Body;
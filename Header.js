const Header = () => {
  return (
    <header>
      <div className="icon">
        <h1>Zomato</h1>
        <input type="text" placeholder="Search"></input>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
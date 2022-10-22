import logo from "./images/react-logo.png";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <img src={logo}
             className="react-logo"
             alt="react-logo"
        />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import logo from "../images/react-logo.png";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <img src={logo}
             className="react-logo"
             alt="react-logo"
        />
        <ul className="nav-items">
          <li className="title">ReactFacts</li>
          <li className="subtitle">React Course - Project 1</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

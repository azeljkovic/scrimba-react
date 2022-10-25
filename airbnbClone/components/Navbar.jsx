import logo from "../images/airbnb-logo.png";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <img src={logo}
             className="airbnb-logo"
             alt="airbnb-logo"
        />
        {/*<ul className="nav-items">*/}
        {/*  <li className="title">ReactFacts</li>*/}
        {/*  <li className="subtitle">React Course - Project 1</li>*/}
        {/*</ul>*/}
      </nav>
    </header>
  );
}

export default Navbar;

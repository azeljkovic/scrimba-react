import {render} from "react-dom";
import logo from "./images/react-logo.png"

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


const Content = () => {
  return (
    <nav className="body">
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </nav>
  );
}

const Footer = () => {
  return (
    <footer>
      <div>
        © 2022 Aleksandar Zeljković
      </div>
    </footer>
  )
}

const Page = () => {
  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}


render(<Page/>, document.querySelector("#root"));

import {render} from "react-dom";
import logo from "./images/react-logo.png"

const Navbar = () => {
  return (
    <img
      className="navbar"
      alt="react-logo"
      src={logo}/>
  );
}


const Body = () => {
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

const Page = () => {
  return (
    <div>
      <Navbar/>
      <Body/>
    </div>
  );
}


render(<Page/>, document.querySelector("#root"));

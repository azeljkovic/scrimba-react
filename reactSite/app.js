import {render} from "react-dom";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

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

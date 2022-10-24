import image from "../images/image.png";

const Info = () => {
  return (
  <div>
    <img src={image}  alt="my-image"/>
    <h1 className="name">Laura Smith</h1>
    <h2 className="title">Frontend Developer</h2>
    <h3 className="website">laurasmith.website</h3>
  </div>
  );
}

export default Info;

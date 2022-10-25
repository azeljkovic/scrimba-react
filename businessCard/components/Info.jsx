import image from "../images/image.png";
import emailIcon from "../images/email-icon.png"
import linkedinIcon from "../images/linkedin-icon.png"

const Info = () => {
  return (
    <div>
      <img src={image} alt="my-image"/>
      <h1 className="name">Laura Smith</h1>
      <h2 className="title">Frontend Developer</h2>
      <h3 className="website">laurasmith.website</h3>
      <div className="buttons">
        <button className="email-button">
          <img src={emailIcon} alt="emailIcon"/>
          Email
        </button>
        <button className="linkedin-button">
          <img src={linkedinIcon} alt="linkedinIcon"/>
          LinkedIn
        </button>
      </div>
    </div>
  );
}

export default Info;

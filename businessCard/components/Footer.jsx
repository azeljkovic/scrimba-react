import twitterIcon from "../images/twitter-icon.svg"
import facebookIcon from "../images/facebook-icon.svg"
import instagramIcon from "../images/instagram-icon.svg"
import githubIcon from "../images/github-icon.svg"

const Footer = () => {
  return (
    <div className="footer">
      <img src={twitterIcon} alt="twitter-icon"/>
      <img src={facebookIcon} alt="facebook-icon"/>
      <img src={instagramIcon} alt="instagram-icon"/>
      <img src={githubIcon} alt="github-icon"/>
    </div>
  );
}

export default Footer;

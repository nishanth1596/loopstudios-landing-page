import facebookIcon from "/icon-facebook.svg";
import instagramIcon from "/icon-instagram.svg";
import twitterIcon from "/icon-twitter.svg";
import pinterestIcon from "/icon-pinterest.svg";

function SocialMediaNavBar() {
  return (
    <nav aria-label="Social Media links">
      <ul className="mt-12 mb-5 flex items-center gap-4 lg:mt-0 lg:mb-0">
        <li>
          <a href="#">
            <img src={facebookIcon} alt="Facebook Icon" />
          </a>
        </li>

        <li>
          <a href="#">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
        </li>

        <li>
          <a href="#">
            <img src={pinterestIcon} alt="Pinterest Icon" />
          </a>
        </li>

        <li>
          <a href="#">
            <img src={instagramIcon} alt="Instagram Icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SocialMediaNavBar;

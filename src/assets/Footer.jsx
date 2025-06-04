import { FaFacebookF, FaTwitter, FaYoutube, FaPinterestP, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="dc-footer">
      <div className="footer-main">
        <div className="footer-links">
          <div className="link-column">
            <h4>DC COMICS</h4>
            <ul>
              <li><a href="#">Characters</a></li>
              <li><a href="#">Comics</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">TV</a></li>
              <li><a href="#">Games</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Shop</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h4>DC</h4>
            <ul>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">Privacy Policy (New)</a></li>
              <li><a href="#">Ad Choices</a></li>
              <li><a href="#">Advertising</a></li>
              <li><a href="#">Subscriptions</a></li>
              <li><a href="#">CPSC Certificates</a></li>
              <li><a href="#">Ratings</a></li>
              <li><a href="#">Shop Help</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h4>SITES</h4>
            <ul>
              <li><a href="#">DC</a></li>
              <li><a href="#">MAD Magazine</a></li>
              <li><a href="#">DC Kids</a></li>
              <li><a href="#">DC Universe</a></li>
              <li><a href="#">DC Power Visa</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h4>SHOP</h4>
            <ul>
              <li><a href="#">Shop DC</a></li>
              <li><a href="#">Shop DC Collectibles</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-logo-bg">
        </div>
      </div>
      <div className="footer-bottom">
        <button className="sign-up-button">SIGN UP NOW!</button>
        <div className="social-media">
          <div className="icons">
            <div className="footer-content">
              <div className="sign-up">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaYoutube /></a>
                <a href="#"><FaPinterestP /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
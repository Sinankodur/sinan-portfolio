import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Sinan Kodur. All rights reserved.</p>
      </div>
      <div className="social-links">
        <a href="https://github.com/Sinankodur" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sinankodur/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/Sinankodur" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com/sinan.kodur/" target="_blank">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/sinan.k0dur/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

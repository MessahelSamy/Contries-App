import React from "react";
import "./FooterStyles.css";
import { SiInstagram, SiGmail } from "react-icons/si";
import { FiLinkedin, FiFacebook, FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <ul className="ul-footer">
          <li className="list-footer">
            <a
              rel="noreferrer"
              href="https://github.com/MessahelSamy"
              target="_blank"
              className="a-footer"
            >
              <FiGithub className="icon-footer" />
            </a>
          </li>
          <li className="list-footer">
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/messahel-samy-salaheddine/"
              target="_blank"
              className="a-footer"
            >
              <FiLinkedin className="icon-footer" />
            </a>
          </li>
          <li className="list-footer">
            <a
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100007043284445"
              target="_blank"
              className="a-footer"
            >
              <FiFacebook className="icon-footer" />
            </a>
          </li>
          <li className="list-footer">
            <a
              rel="noreferrer"
              href="https://www.instagram.com/samy_messahel/?hl=fr"
              target="_blank"
              className="a-footer"
            >
              <SiInstagram className="icon-footer" />
            </a>
          </li>
          <li className="list-footer list-footer-gmail">
            <a rel="noreferrer" href="/" target="_blank" className="a-footer">
              <SiGmail className="icon-footer" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import "./Footer.css";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import { SiFiverr } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />
      <Newsletter />
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer_logo" />
          <p className="p__opensans">
            &quot;The best way to find yourself is to lose yourself in the
            service of others.&quot;
          </p>
          <img
            src={images.spoon}
            className="spoon__img"
            style={{ marginTop: 15 }}
          />
          <div className="app__footer-links_icons">
            <a href="https://www.fiverr.com/atiqulislamwb">
              <FiFacebook color="#d1b652" />
            </a>
            <a href="https://twitter.com/atiqulislamwb">
              {" "}
              <FiTwitter color="#d1b652" />
            </a>
            <a href="https://www.instagram.com/atiqulislamwb/?hl=en">
              {" "}
              <FiInstagram color="#d1b652" />{" "}
            </a>
            <a href="https://web.whatsapp.com/">
              {" "}
              <BsWhatsapp color="#d1b652" />
            </a>
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am - 12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00 am - 11:00 pm</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">
          {year}{" "}
          <a
            style={{ color: "#d1b652" }}
            href="https://www.fiverr.com/atiqulislamwb"
            target="_blank "
            rel="noreffer noopenner"
          >
            <SiFiverr size={30} /> atiqulislamwb
          </a>
          <span> All Rights reserved.</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;

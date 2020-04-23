import React from "react";
import "./footer.css";
// Icons
import FacebookIcon from "../assets/icons/Facebook Icon.png";
import TwitterIcon from "../assets/icons/Twitter Icon.png";
import PinterestIcon from "../assets/icons/Pinterest Icon.png";

const styles = {
  icon: {
    width: 28,
    height: "auto",
  },
};

const SectionHeader = (props) => {
  return (
    <div className="footer-sectionheader-container">
      <p className="footer-sectionheader-title">{props.title}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <SectionHeader title="Contact Us" />
        <div style={{ marginLeft: 10 }}>
          <div style={{ display: "flex" }}>
            <p style={{ marginLeft: 0, marginTop: 10 }}>
              Email: support@8bitbyte.com <br />
              Phone: (732) 123-4567
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 20,
              }}
            >
              <img src={FacebookIcon} alt="Facebook Icon" style={styles.icon} />
              <img src={TwitterIcon} alt="Twitter Icon" style={styles.icon} />
              <img
                src={PinterestIcon}
                alt="Pinterest Icon"
                style={styles.icon}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <SectionHeader title="Useful Links" />
        <div className="footer-section-links">
          <p>Home</p>
          <p>My Profile</p>
          <p>All Recipes</p>
          <p>World View</p>
          <p>Contact Us</p>
          <p>Frequently Asked Questions</p>
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

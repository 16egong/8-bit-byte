import React from "react";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./social.css";

const SocialFollow = () => {
  return (
    <div className="social-container">
      <h1>Share</h1>
      <hr
        style={{
          border: "2px var(--byte-grey) solid",
          margin: "auto",
          width: "100%",
        }}
      />
      <div className="social-icons-container">
        <FA className="social-youtube" icon={faYoutube} size="2x" />
        <FA className="social-facebook" icon={faFacebook} size="2x" />
        <FA className="social-pinterest" icon={faPinterest} size="2x" />
        <FA className="social-instagram" icon={faInstagram} size="2x" />
      </div>
    </div>
  );
};

export default SocialFollow;

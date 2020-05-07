import React from "react";
import ByteLink from "../ByteButton";
import "./page.css";
import {Spring} from 'react-spring/renderprops';

const ContactPage = (props) => {
  console.log(props);
  return (
      <Spring
        from = {{ opacity: 0, marginTop: -500 }}
        to = {{ opacity: 1, marginTop: 0 }}
        config = {{ delay:300, duration: 500 }}
      >
        {props => <div style={props}>
          <div className="contact-container">
              <br/>
              <h2 style={{ textAlign: "center", marginTop: "50px" }}>We'd love to hear from you!</h2>
              <br/>
              <p className="contact-text">Mail us your delis😍:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Room 1317, Table 3, IRB, College Park, MD 20740</p>
              <p className="contact-text">Chat with the crew📧:&emsp;&emsp;&emsp;&emsp;support@8bitbyte.com</p>
              <p className="contact-text">Chat with the crew📞:&emsp;&emsp;&emsp;&emsp;(732) 123-4567</p>
          </div>
        </div>}
      </Spring>
  );
};

export default ContactPage;
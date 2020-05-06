import React from "react";
import ByteLink from "../ByteButton";
import "./page.css";
import {Spring} from 'react-spring/renderprops';

const AboutPage = (props) => {
  console.log(props);
  return (
      <Spring
        from = {{ opacity: 0, marginTop: -500 }}
        to = {{ opacity: 1, marginTop: 0 }}
        config = {{ delay:300, duration: 500 }}
      >
        {props => <div style={props}>
          <div className="contact-container">
              <h1 style={{ textAlign: "center"}}>8-bit-bite</h1>
              <br/>
              <p style={{ textAlign: "center", lineHeight: "40px"}}>8-bit-bite is a group project for CMSC434 Human Computer Interaction class at the University of Maryland, College Park.</p>
              <p style={{ textAlign: "center", lineHeight: "40px"}}>Cooking is a foundational resource to fulfilling your basic need to eat. The only alternative is to eat out, which, 
                                                                    as many people know, can be a high cost to your wallet and your health. However, if there is a way to reduce the 
                                                                    barrier to make cooking an appealing and fun activity, we may be able to guide people over the learning curve. </p>
              <p style={{ textAlign: "center", lineHeight: "40px"}}>Our target users are anyone who is new to cooking or find it difficult to bring oneself to cook. 
                                                                    This can consist of college students transitioning to apartments, adults, people with disabilities, and others. </p>
              <p className="contact-text">Created by 💗:&emsp;&emsp;Tony Baek, Kevin Beal, Emily Gong, Fan Jiang, Ryan Shriver</p>
          </div>
        </div>}
      </Spring>
  );
};

export default AboutPage;
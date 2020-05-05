import React, { useState }  from 'react';
import "./page.css";
import logo from '../../assets/icons/Loading.gif'
import { Redirect } from 'react-router-dom';



function LoadingPage(props) {
    const [toMap, setToMap]=useState(false);
    setTimeout(()=> setToMap(true), 2000);
    return (
    <div className="entire-page" style={{ backgroundColor: "#ffffff" }}>
        <div className="page-content-container">
            {toMap ? <Redirect to="/map" /> : null}
            <img className="load-icon" src={logo} alt="loading..."/>
            <h3 className="goblin-text" style={{ textAlign: "center" }}>
                Loading...
            </h3>
        </div>
    </div>
    );
};
  
  export default LoadingPage;
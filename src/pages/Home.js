import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';


function PageHome() {

    const [currentTime, setCurrentTime] = useState(0);
  
    useEffect(() => {
      fetch('/api/time').then(res => res.json()).then(data => {
        setCurrentTime(data.time);
      });
    }, []);
  
    return (
      <div className="main">
        <h2 className="main-header">This is a custon font, centered in flex div.<br/>The current time is {currentTime}</h2>
      </div>
    )
}

export default PageHome  
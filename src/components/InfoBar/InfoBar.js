import React from 'react';
import { FaArrowLeft, FaInfoCircle } from "react-icons/fa"

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room , users, setShowUserDetails, showUserDetails }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      {
        showUserDetails ?
          <FaArrowLeft className="mr-10 mobile-only" onClick={() => setShowUserDetails(false)} />
          :
          <FaInfoCircle className="mr-10 mobile-only" onClick={() => setShowUserDetails(true)} />

      }
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room} ({users.length} Online)</h3> 
    </div>
    <div className="rightInnerContainer">
      <a href="/"><img src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);

export default InfoBar;
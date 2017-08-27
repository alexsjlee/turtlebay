import React from 'react';
import { FaSearch, FaUser } from 'react-icons/lib/fa'
import minilogo from './images/minilogo.png';

const miniNav = () => {
  return (
    <div className="row miniNav text-white">
      <div className="col" />
      <div className="col-8">
        <div style={{marginTop: '.3vh'}}>
          <span className="hidden-lg-down miniBrand">
            <img src={minilogo} className='img-fluid minilogo' alt='minilogo' />
             TRAVISMATHEW IS RUNNING FOR PRESIDENT!
            <span className="findOut">FIND OUT MORE HERE ></span>
          </span>
          <span className="miniBtns">
            <button className="searchBtn">SEARCH <FaSearch /></button>
            <button className="accountBtn">MY ACCOUNT <FaUser /></button>
          </span>
        </div>
      </div>
      <div className="col" />
    </div>
  );
};

export default miniNav;

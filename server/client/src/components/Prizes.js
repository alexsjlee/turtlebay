import React from 'react';
import PrizesImg from './images/prizes.png';

const Prizes = () => {
  return (
    <div>
      <img className="img-fluid" src={PrizesImg} style={{ width: '100%' }} alt='prizes' />
    </div>
  );
};

export default Prizes;

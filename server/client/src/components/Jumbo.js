import React from 'react';
import JumboImg from './images/jumbo.png';

const Jumbo = () => {
  return (
    <div>
      <img className='img-fluid' src={JumboImg} style={{width: '100%'}} alt='jumbo' />
    </div>
  )
}

export default Jumbo;
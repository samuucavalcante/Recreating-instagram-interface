import React from 'react';


import Instagram from '../../../imgs/instagram.png';
import Search from './Search'

import Badges from '../MainHeader/Bagdes';

const MainHeader = () => {
  return(
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
        <img  src={Instagram} alt="Logo do Instagram" />
        <Search />
        <Badges />
      </div>
      </>
  );
}

export default MainHeader;
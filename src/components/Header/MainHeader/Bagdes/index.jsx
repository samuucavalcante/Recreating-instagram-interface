import React from 'react';
import { Badge } from '@material-ui/core'
import ExploreIcon from '@material-ui/icons/Explore';
import HomeIcon from '@material-ui/icons/Home';
import NearMeIcon from '@material-ui/icons/NearMe';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import { Link } from 'react-router-dom';

import { Container } from './styles';

const Badges = () => {
  return(
    <Container>
        <Badge >
      <Link to="/" style={{ color: 'black' }} >
        <HomeIcon />
      </Link>
        </Badge>
      

    <Badge >
      <Link to="/" style={{ color: 'black' }} >
      <NearMeIcon/>
      </Link>
    </Badge>

    <Badge >
      <Link to="/" style={{ color: 'black' }} >
      <ExploreIcon />
      </Link>
    </Badge>



    <Badge >
      <Link to="/" style={{ color: 'black' }} >
      <FavoriteIcon />
      </Link>
    </Badge>

    <Badge >
      <Link to="/" style={{ color: 'black' }} >
      <RadioButtonUncheckedIcon />
      </Link>
    </Badge>
    </Container>
  )
}

export default Badges;
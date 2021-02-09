import React from 'react';

import SearchIcon from '@material-ui/icons/Search';


import { Input, Hidden } from '@material-ui/core';
import { Search as SeachMUI } from '@material-ui/icons';

import { Container } from './styles'

const Search = () => {
  return (
    <Hidden only="xs" >

    <Container>
      <SeachMUI />
      <Input placeholder="Pesquisar" disable  />
    </Container>
    </Hidden>
  );
}

export default Search;
import React from 'react';

import SearchIcon from '@material-ui/icons/Search';

import { Input } from '@material-ui/core';
import { Search as SeachMUI } from '@material-ui/icons';

import { Container } from './styles'

const Search = () => {
  return (
    <Container>
      <SeachMUI />
      <Input placeholder="Pesquisar" disable  />
    </Container>
  );
}

export default Search;
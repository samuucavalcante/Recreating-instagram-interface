import React from 'react';

import { AppBar, Toolbar  } from '@material-ui/core';

import { Grid } from '@material-ui/core';

import MainHeader from './MainHeader';

const Header = () => {
  return(
    <AppBar style={{ border: '1px solid #d1d1d1', boxShadow: 'none' }} color="primary" position="fixed" >
      <Toolbar variant="dense" >
        <Grid container > 
          <Grid item xs={2} />
          <Grid item xs={8} >
             <MainHeader />
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Toolbar>
    </AppBar>

  );
}

export default Header;
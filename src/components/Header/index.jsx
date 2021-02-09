import React from 'react';

import { AppBar, Toolbar  } from '@material-ui/core';

import { Grid } from '@material-ui/core';

import MainHeader from './MainHeader';

const Header = () => {
  return(
    <AppBar style={{ border: '1px solid #d1d1d1', boxShadow: 'none' }} color="primary" position="fixed" >
      <Toolbar variant="dense" >
        <Grid container > 
          <Grid item xs={false} sm={1} mg={2} lg={2}  />
          <Grid item xs={12} sm={10} mg={8} lg={8}  >
             <MainHeader />
          </Grid>
          <Grid item xs={false} sm={1} mg={2} lg={2}  />
        </Grid>
      </Toolbar>
    </AppBar>

  );
}

export default Header;
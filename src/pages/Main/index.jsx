import React from 'react';

import { Grid } from '@material-ui/core'

import Header from '../../components/Header';

const Main = () => {
  return(
    <Grid container >
      <Grid item xs={12}  >
        <Header />
      </Grid>
      <Grid>
      <Grid item container >
        <Grid xs={2} />
        <Grid xs={8}>
          this is body
        </Grid>
        <Grid xs={2} />
      </Grid>


      </Grid>
    </Grid>
  );
}

export default Main;
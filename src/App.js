import React from 'react';

import Routes from './routes';

import { ThemeProvider } from '@material-ui/core/styles';

import theme from './settings/MaterialUI/theme';

const App = () => {
  return(
    <ThemeProvider theme={theme} >
      <Routes />
    </ThemeProvider>
  );
}
export default App;

import 'react-app-polyfill/ie11';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import store from './redux/reducer';
import App from './pages/App';
import * as serviceWorker from './services/serviceWorker';

import { Provider } from 'react-redux';
import './styles/index.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#667EEA',
    },
  },
});

//'#33ab9f',
/*ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App></App>
      </MuiThemeProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);*/
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App></App>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

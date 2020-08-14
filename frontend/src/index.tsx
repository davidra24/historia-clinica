import 'react-app-polyfill/ie11';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import store from './redux/reducer';
import App from './pages/App';
import * as serviceWorker from './services/serviceWorker';

import { ScrollToTop } from './components/ScrollTop';
import { Provider } from 'react-redux';
import { LangProvider, LOCALES } from './lang';
import './styles/index.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#33ab9f',
    },
  },
});

ReactDOM.render(
  <StrictMode>
    <LangProvider locale={LOCALES.SPANISH}>
      <Provider store={store}>
        <ScrollToTop>
          <MuiThemeProvider theme={theme}>
            <App></App>
          </MuiThemeProvider>
        </ScrollToTop>
      </Provider>
    </LangProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

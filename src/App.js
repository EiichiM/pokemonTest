import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';
import {
  createStyles,
  jssPreset,
  makeStyles,
  StylesProvider,
  ThemeProvider
} from '@material-ui/core';
import useSettings from './hooks/useSettings';
import { createTheme } from './theme';
import Routes from './Routes';
import ScrollReset from './components/ScrollReset';

const history = createBrowserHistory();
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = makeStyles(() => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%'
    },
    body: {
      height: '100%',
      width: '100%'
    },
    '#root': {
      height: '100%',
      width: '100%'
    }
  }
}));

const App = ({ store }) => {
  useStyles();

  const { settings } = useSettings();
  return (
    <ThemeProvider theme={createTheme(settings)}>
      <StylesProvider jss={jss}>
        <Provider store={store}>
          <Router history={history}>
            <ScrollReset />
            <Routes />
          </Router>
        </Provider>
      </StylesProvider>
    </ThemeProvider>
  )
};

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;

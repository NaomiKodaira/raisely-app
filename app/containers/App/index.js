import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import Login from '../Login';
import DefaultLayout from '../DefaultLayout';
import GlobalStyle from '../../global-styles';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './redux-saga/reducer';

function App() {
  useInjectReducer({ key: 'app', reducer });

  return (
    <>
      <Helmet
        titleTemplate="Raisely Application"
        defaultTitle="Raisely Application"
      >
        <meta
          name="description"
          content="A sample Sign Up app for Raisely Job application"
        />
      </Helmet>
      <DefaultLayout>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </DefaultLayout>
      <GlobalStyle />
    </>
  );
}

export default App;

import React from 'react';
import Header from '../../containers/Header';
import Footer from '../Footer';
import 'semantic-ui-css/semantic.min.css';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import routes from '../../routes';
import loginRoutes from '../../routes/user/routeLogin';
import FloatingMessage from '../../containers/FloatingMessage';
import Spacer from '../../components/Spacer';
import MainWrapper from '../../components/MainWrapper';
const history = createBrowserHistory();

const App: React.FC<any> = ({ isAuthenticated, message }) => {
  console.log('message', message);
  return (
    <Router history={history}>
      <Header history={history} />
      <MainWrapper>
        {message.message && <FloatingMessage message={message} />}
        {loginRoutes.map((route) => {
          return <Route component={route.component} path={route.path} exact />;
        })}

        <Switch>
          {isAuthenticated &&
            routes.map((route) => {
              return (
                <Route
                  component={route.component}
                  path={route.path}
                  exact
                  key={route.path}
                />
              );
            })}
        </Switch>
      </MainWrapper>
      <Footer />
    </Router>
  );
};

export default App;

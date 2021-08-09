import React from 'react';
import Header from '../../containers/Header';
import Footer from '../Footer';
import Wrapper from '../../components/Wrapper';
import 'semantic-ui-css/semantic.min.css';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import routes from '../../routes';
import loginRoutes from '../../routes/user/routeLogin';
import FloatingMessage from '../../components/FloatingMessage';
import Spacer from '../../components/Spacer';
const history = createBrowserHistory();

const App: React.FC<any> = ({ isAuthenticated, message }) => {
  console.log(message);
  return (
    <Router history={history}>
      <Wrapper>
        <Header />
        {message.message && <FloatingMessage message={message} />}
        <Spacer height='10px' />
        {!isAuthenticated &&
          loginRoutes.map((route) => {
            return (
              <Route component={route.component} path={route.path} exact />
            );
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
        <Footer />
      </Wrapper>
    </Router>
  );
};

export default App;

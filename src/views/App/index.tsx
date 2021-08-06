import React from "react";
import Header from "../../containers/Header";
import Footer from "../Footer";
import Wrapper from "../../components/Wrapper";
import "semantic-ui-css/semantic.min.css";
import "./styles.scss";
import { Route, Switch } from "react-router-dom";
import routes from "../../routes";
import loginRoutes from "../../routes/user/routeLogin";
import Error from "../Error";
const App: React.FC<any> = ({ isAuthenticated }) => {
  return (
    <Wrapper>
      <Header />
      {!isAuthenticated && (
        <Route
          component={loginRoutes.component}
          path={loginRoutes.path}
          exact
        />
      )}
      <Switch>
        {isAuthenticated &&
          routes.map((route) => (
            <Route
              component={route.component}
              path={route.path}
              exact
              key={route.path}
            />
          ))}
        <Route path='*' exact={true}>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Wrapper>
  );
};

export default App;

import React from "react";
import Dashboard from "../Dashboard";
import Header from "../../containers/Header";
import Footer from "../Footer";
import Wrapper from "../../components/Wrapper";
import "semantic-ui-css/semantic.min.css";
import "./styles.scss";
import Login from "../../containers/Login";
import { Route, Switch } from "react-router-dom";
import routes from "../../routes";
import loginRoutes from "../../routes/user/routeLogin";
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
        <Footer />
      </Switch>
    </Wrapper>
  );
};

export default App;

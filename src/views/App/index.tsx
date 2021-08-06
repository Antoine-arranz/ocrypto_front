import React from "react";
import Dashboard from "../Dashboard";
import Header from "../Header";
import Footer from "../Footer";
import Wrapper from "../../components/Wrapper";
import "semantic-ui-css/semantic.min.css";
import "./styles.scss";
import Login from "../../containers/Login";

const App: React.FC<any> = ({ isAuthenticated }) => {
  return (
    <Wrapper>
      {!isAuthenticated && <Login />}
      {isAuthenticated  && <><Header /><Dashboard /><Footer /></>} 
    </Wrapper>
  );
};

export default App;

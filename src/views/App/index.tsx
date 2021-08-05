import React from "react";
import Dashboard from "../Dashboard";
import Header from "../Header";
import Footer from "../Footer";
import Wrapper from "../../components/Wrapper";
import "semantic-ui-css/semantic.min.css";
import "./styles.scss";
import Login from "../Login";

const App: React.FC<any> = ({ isAuthenticated }) => {
  return (
    <Wrapper>
      <Login />
      {/**<Header />
 
      <Dashboard />
      <Footer />**/}
    </Wrapper>
  );
};

export default App;

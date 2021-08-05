import React from "react";
import Dashboard from "../Dashboard";
import Header from "../Header";
import Footer from "../Footer";
import Wrapper from "../../components/Wrapper";
import "semantic-ui-css/semantic.min.css";
import "./styles.scss";

const App:React.FC<any> = ({isAuthenticated}) => {
  return (
    <Wrapper>
      <Header />
      {isAuthenticated && <Footer />}
      <Dashboard />
      <Footer />
    </Wrapper>
  );
}

export default App;

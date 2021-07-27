import React from "react";
import Dashboard from "../Dashboard";
import Header from "../Header";
import Footer from "../Footer";
import "semantic-ui-css/semantic.min.css";
import "./styles.scss";

function App() {
  return (
    <div className='App'>
      <Header />

      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;

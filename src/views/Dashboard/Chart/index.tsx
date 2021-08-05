import React from "react";
import graph from "./graphique.png";
import Wrapper from "../../../components/Wrapper";
import "./styles.scss";
const Chart = () => {
  return (
    <Wrapper width='50em' textAlign='center'>
      <img src={graph} className='chart--img' />
    </Wrapper>
  );
};

export default Chart;

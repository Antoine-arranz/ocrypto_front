import React from "react";
import graph from "./graphique.png";
import "./styles.scss";
const Chart = () => {
  return (
    <div className='chart'>
      <img src={graph} className='chart--img' />
    </div>
  );
};

export default Chart;

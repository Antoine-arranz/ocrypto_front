import React, { FunctionComponent } from "react";

import { SpacerStyled } from "./SpacerStyled";

type SpacerProps = {
  height: string;
};

const Spacer: FunctionComponent<SpacerProps> = ({ height }) => {
  return <SpacerStyled height={height} />;
};

export default Spacer;

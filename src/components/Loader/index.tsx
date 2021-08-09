import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const Index = (props: any) => {
  return (
    <Dimmer active={props.active || true}>
      <Loader content='Loading' />
    </Dimmer>
  );
};

export default Index;

import React from 'react';

import { SegmentStyled } from './segmentStyled';

const Segment = (props: any) => {
  return (
    <SegmentStyled
      coreStyle={{
        margin: '2rem',
        padding: '10px',
        border: '1px solid',
        borderColor: 'segmentBorder',
        borderRadius: '1rem',
        backgroundColor: 'white',
        boxShadow: '0 1px 2px 0 rgba(34,36,38,.15)',
      }}
      props={props}
    >
      {props.children}
    </SegmentStyled>
  );
};

export default Segment;

import styled from '@emotion/styled';
import colors from '../../theme';
import { Button } from 'semantic-ui-react';
import { AnySrvRecord } from 'dns';

const applyColor = (props: any) => {
  switch (props.btncolor) {
    case 'blue':
      return colors.mainButton;
    case 'red':
      return colors.deleteButton;
    default:
      return colors.mainButton;
  }
};

const applyHoverColor = (props: any) => {
  switch (props.btncolor) {
    case 'blue':
      return colors.mainButtonHover;
    case 'red':
      return colors.deleteButtonHover;
    default:
      return colors.mainButtonHover;
  }
};

export const ButtonStyled: any = styled(Button)`
  &&& {
    background-color: ${(props) => applyColor(props)};
    border-radius: 2em !important;
    color: #ffff;
  }
  &&&:hover {
    background-color: ${(props) => applyHoverColor(props)};
    border-radius: 2em !important;
    color: #ffff;
  }
`;

import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { ButtonStyled } from './linkButtonStyled';

type LinkButtonProps = {
  color?: 'blue' | 'red';
  disabled?: boolean;
  type?: string;
  content: string;
  icon?: string;
  fluid?: boolean;
  labelPosition?: string;
  size?:
    | 'mini'
    | 'tiny'
    | 'small'
    | 'medium'
    | 'large'
    | 'big'
    | 'huge'
    | 'massive';
  path: string;
};

const LinkButton: FunctionComponent<LinkButtonProps> = ({
  color,
  disabled,
  type,
  content,
  icon,
  fluid,
  labelPosition,
  size,
  path,
}: any) => {
  return (
    <Link to={path}>
      <ButtonStyled
        fluid={fluid}
        icon={icon}
        labelPosition={labelPosition}
        disabled={disabled}
        type={type || 'button'}
        btncolor={color}
        content={content}
        size={size}
      />
    </Link>
  );
};

export default LinkButton;

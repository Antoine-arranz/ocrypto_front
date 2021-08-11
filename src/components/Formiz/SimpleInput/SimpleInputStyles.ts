import styled from '@emotion/styled';

import colors from '../../../theme';

export const InputWrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const InputStyled = styled.input(({ error }: InputStyledProps) => ({
  borderRadius: '10px',
  border: `1px solid ${error ? colors.borderError : 'rgb(204, 204, 204)'}`,
  padding: '1em',
  ...(error && { backgroundColor: colors.backgroundError }),
  ...(error && { color: colors.textError }),

  '&::placeholder': {
    ...(error && { color: colors.borderError }),
  },

  '&:focus': {
    outline: 'none',
    boxShadow: '0px 0px 3px #c5c5c5',
  },
}));

interface InputStyledProps {
  error?: string | false;
}

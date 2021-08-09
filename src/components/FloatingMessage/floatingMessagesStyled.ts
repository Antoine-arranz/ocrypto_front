import styled from '@emotion/styled';

import colors from '../../theme';

export const MessageWrapper = styled.div(({ error }: any) => ({
  position: 'fixed',
  zIndex: 3,
  margin: '2rem',
  padding: '1rem',
  minWidth: '10rem',
  borderRadius: '1rem',
  border: '1px solid',
  backgroundColor: error ? colors.backgroundError : colors.backgroundSuccess,
  borderColor: error ? colors.borderError : colors.borderSuccess,
  color: error ? colors.textError : colors.textSuccess,
}));

export const CloseButton = styled.span(({ error }: any) => ({
  position: 'absolute',
  right: '1.5rem',
  cursor: 'pointer',

  '&:before': {
    position: 'absolute',
    content: '""',
    height: '15px',
    width: '3px',
    borderRadius: '5px',
    backgroundColor: error ? colors.textError : colors.textSuccess,
    transform: 'rotate(45deg)',
  },
  '&:after': {
    position: 'absolute',
    content: '""',
    height: '15px',
    width: '3px',
    borderRadius: '5px',
    backgroundColor: error ? colors.textError : colors.textSuccess,
    transform: 'rotate(-45deg)',
  },
}));

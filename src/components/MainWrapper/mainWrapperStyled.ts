import styled from '@emotion/styled';

export const MainWrapper = styled.div((props: any) => {
  return {
    minHeight: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: `url(${props.backgroundImg}) no-repeat fixed center`,
    marginBottom: '100px',
  };
});

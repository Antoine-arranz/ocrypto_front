import styled from '@emotion/styled';
export const MainWrapper = styled.div((props: any) => {
  return {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background:
      'radial-gradient(circle, rgba(255,255,255,1) 40%, rgba(217,246,236,1) 100%)',
  };
});

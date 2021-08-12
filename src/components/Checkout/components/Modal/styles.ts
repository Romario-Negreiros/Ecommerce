import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  background: rgba(125, 125, 125, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Summary = styled.div`
  width: 100%;
  height: 50%;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  font-size: 1.2rem;
  text-align: center;
  @media screen and (min-width: 800px) {
    width: 80%;
  }
  @media screen and (min-width: 1200px) {
    width: 60%;
    height: 60%;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 5px;
`;

export const Info = styled.p`
  font-weight: 800;
`;

export const Shipping = styled.div`
  align-self: flex-end;
  width: 100%;
  padding: 5px;
`;

export const Alert = styled.div`
text-align: center;
  width: 100%;
  align-self: flex-start;
  background: ${({ theme: { backgrounds } }) => backgrounds.headerbg};
  padding: 5px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  @media screen and (min-width: 400px) {
    padding: 15px;
  }
`;

export const Message = styled.p`
  color: ${({theme: { common }}) => common.cyan };
  font-weight: bold;
`;

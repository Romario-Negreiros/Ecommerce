import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#f0f9ff+0,cbebff+47,a1dbff+100;Blue+3D+%2313 */
  background: #f0f9ff; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #f0f9ff 0%,
    #cbebff 47%,
    #a1dbff 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #f0f9ff 0%,
    #cbebff 47%,
    #a1dbff 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #f0f9ff 0%,
    #cbebff 47%,
    #a1dbff 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f0f9ff', endColorstr='#a1dbff',GradientType=0 ); /* IE6-9 */
  backdrop-filter: opacity(0.5);
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
  color: #fff;
`;

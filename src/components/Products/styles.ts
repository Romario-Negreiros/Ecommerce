import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    padding: 5px;
    display: flex;
    justify-content: center;
    @media screen and (min-width: 750px) {
      padding: 15px;
      align-items: flex-start;
    }
`;

export const OuterContainer = styled.ul`
    padding: 10px;
    width: 100%;
    background: #fff;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    @media screen and (min-width: 750px) {
      align-items: center;
      padding: 20px;
    }
`;

export const InnerContainer = styled.li`
    flex-basis: 100%;
    text-align: center;
    @media screen and (min-width: 750px) {
      flex-basis:  50%;
      align-self: stretch;
      text-align: unset;
      display: flex;
      justify-content: space-between;
      flex-flow: row wrap;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 250px;
    align-self: flex-start;
    @media screen and (min-width: 350px) {
      width: 80%;
      height: 270px;
    }
    @media screen and (min-width: 450px) {
      width: 70%;
      height: 290px;
    }
    @media screen and (min-width: 650px) {
      width: 55%;
      height: 300px;
    }
    @media screen and (min-width: 750px) {
      width: 80%;
      margin: auto;
    }
    @media screen and (min-width: 900px) {
      width: 70%;
    }
    @media screen and (min-width: 1200px) {
      width: 60%;
    }
    @media screen and (min-width: 1400px) {
      width: 50%;
    }
`;

export const TextContent = styled.p`
    font-size: 1.2rem;
    margin-top: 15px;
    line-height: 25px;
    @media screen and (min-width: 750px) {
      margin: 0;
    }
`;

export const Manage = styled.div`
    align-self: flex-end;
    width: 100%;
`;

export const Title = styled.h2`
    font-size: 1.4rem;
    line-height: 25px;
    @media screen and (min-width: 750px) {
      width: 100%;
      text-align: center;
    }
`;  



export const Circle = styled.div`
  background: transparent;
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.4s;
  :hover {
    background: ${({ theme: { common } }) => common.cyan};
  }
`;
export const CartIcon = styled.img`
  width: 25px;
  height: 25px;
  transform: translate(-2px, 1px);
`;

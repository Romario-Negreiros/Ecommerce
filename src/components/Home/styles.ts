import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.main`
    background: ${({ theme: { backgrounds } }) => backgrounds.gray};
    min-height: 100vh;
    position: relative;
`;

export const Container = styled.section`
  padding: 10px;
  background: ${({ theme: { backgrounds } }) => backgrounds.gray};
  @media screen and (min-width: 500px) {
    padding: 25px 10px;
  }
`;

export const Products = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1250px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Card = styled.li`
  padding: 10px;
  background: #fff;
  display: flex;
  flex-flow: row wrap;
  margin-top: 15px;
  border-radius: 2px;
  @media screen and (min-width: 500px) {
    margin: 10px;
  }
`;

export const Image = styled.img`
  width: 80%;
  margin-bottom: 30px;
  height: 200px;
  @media screen and (min-width: 400px) {
    width: 60%;
  }
  @media screen and (min-width: 500px) {
    width: 90%;
    height: 250px;
  }
`;

export const Info = styled.div`
  width: 100%;
  align-self: flex-start;
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 1.4rem;
  margin-bottom: 5px;
`;

export const Price = styled.p`
  font-weight: 800;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const Category = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const LinkTag = styled(Link)`
  color: #000;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  :hover {
    opacity: 0.5;
  }
`;

export const Manage = styled.div`
  align-self: flex-end;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
export const BookMarkIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const Error = styled.p`
  font-size: 1.5rem;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -100%);
  font-weight: bold;
`;
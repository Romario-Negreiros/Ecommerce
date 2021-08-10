import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  padding: 10px;
  background: ${({ theme: { backgrounds } }) => backgrounds.gray};
  @media screen and (min-width: 500px) {
    padding: 25px 10px;
  }
`;

export const Products = styled.ul`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const Card = styled.li`
  flex-basis: 100%;
  padding: 10px;
  background: #fff;
  display: flex;
  flex-flow: row wrap;
  margin-top: 30px;
  border-radius: 2px;
  @media screen and (min-width: 500px) {
    margin-bottom: 30px;
    margin-top: 0;
    flex-basis: 40%;
    align-self: stretch;
  }
  @media screen and (min-width: 800px) {
    flex-basis: 30%;
  }
  @media screen and (min-width: 1300px) {
    flex-basis: 23%;
  }
`;

export const Image = styled.img`
  width: 80%;
  margin-bottom: 30px;
  object-fit: contain;
  @media screen and (min-width: 400px) {
    width: 60%;
  }
  @media screen and (min-width: 1000px) {
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

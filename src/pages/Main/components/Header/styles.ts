import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  background: ${({ theme: { backgrounds } }) => backgrounds.headerbg};
  overflow: hidden;
  padding: 20px 2px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 400px) {
    flex-direction: row;
    height: 60px;
    padding: 10px 25px;
  }
`;

export const Left = styled.div``;

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme: { common } }) => common.cyan};
  @media screen and (min-width: 200px) {
    font-size: 1.4rem;
  }
  @media screen and (min-width: 500px) {
    font-size: 1.6rem;
  }
`;

export const Navigation = styled.nav`
  margin-top: 25px;
  @media screen and (min-width: 400px) {
    margin: 0;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  margin: 0 5px;
`;

export const LinkTag = styled(Link)`
  border-bottom: 2px solid transparent;
  transition: border 0.4s;
  padding: 17px 15px;
  position: relative;
  @media screen and (min-width: 400px) {
    padding: 16px 20px;
    :hover {
      border-color: ${({ theme: { common } }) => common.cyan};
    }
  }
  @media screen and (min-width: 600px) {
    padding: 13px 20px;
  }
`;

export const Icon = styled.img`
  width: 20px;
  object-fit: cover;
  @media screen and (min-width: 600px) {
    width: 25px;
  }
`;

export const Circle = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({theme: { common }}) => common.red };
  border-radius: 50%;
  @media screen and (min-width: 400px) {
    width: 20px;
    height: 20px;
    top: 0px;
    right: 0;
  }
  @media screen and (min-width: 600px) {
    top: -8px;
  }
`;

export const Number = styled.span`
  font-size: 1.1rem;
  color: #fff;
  display: block;
`;

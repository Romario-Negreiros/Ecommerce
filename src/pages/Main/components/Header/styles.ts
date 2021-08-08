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
  border-bottom: 1px solid ${({theme: { common }}) => common.cyan};
  @media screen and (min-width: 350px) {
    flex-direction: row;
    height: 60px;
    padding: 10px 25px;
  }
`;

export const Left = styled.div``;

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme: { common } }) => common.cyan};
  @media screen and (min-width: 200px) {
    font-size: 1.4rem;
  }
  @media screen and (min-width: 500px) {
    font-size: 1.6rem;
  }
`;

export const Navigation = styled.nav`
  margin-top: 15px;
  @media screen and (min-width: 350px) {
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
  border-bottom: 4px solid transparent;
  transition: border 0.4s;
  padding: 25px 15px;
  @media screen and (min-width: 350px) {
    :hover {
      border-color: ${({ theme: { common } }) => common.cyan};
    }
  }
  @media screen and (min-width: 600px) {
      padding: 22px 15px; 
  }
`;

export const Icon = styled.img`
  width: 20px;
  object-fit: cover;
  @media screen and (min-width: 600px) {
      width: 25px;
  }
`;

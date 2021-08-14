import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.main`
    min-height: 100vh;
    position: relative;
`;

export const Container = styled.section`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 700px) {
    flex-direction: row;
    align-items: initial;
  }
`;

export const Summary = styled.div`
  margin-bottom: 20px;
  width: 100%;
  background: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  @media screen and (min-width: 700px) {
    width: fit-content;
    padding: 20px;
    height: fit-content;
    margin: 0;
  }
`;

export const Infos = styled.div``;

export const SummaryTitle = styled.div`
  font-weight: bold;
  font-size: 1.4rem;
`;

export const SummaryItem = styled.p`
  font-size: 1.2rem;
  margin-top: 5px;
`;

export const SummaryButton = styled.button`
  margin-top: 5px;
  font-size: 1.1rem;
  font-weight: unset;
  color: ${({theme: { common }}) => common.cyan };
  padding: 10px 15px;
  background: ${({theme: { backgrounds }}) => backgrounds.headerbg };
  cursor: pointer;
  transition: opacity 0.4s;
  border: 0 none;
  border-radius: 2px;
  :hover {
    opacity: 0.5;
  }
  @media screen and (min-width: 700px) {
    width: 100%;
  }
`;

export const LinkTag = styled(Link)`
  margin-top: 5px;
  font-size: 1.1rem;
  border-radius: 2px;
  cursor: pointer;
  color: ${({theme: { common }}) => common.cyan };
  text-align: center;
  background: ${({theme: { backgrounds }}) => backgrounds.headerbg };
  padding: 10px 15px;
  transition: opacity 0.4s;
  border: 0 none;
  :hover {
    opacity: 0.5;
  }
  @media screen and (min-width: 700px) {
    width: 100%;
  }
`;

export const Options = styled.div`
  margin-top: 30px;
  flex-basis: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CartList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 700px) {
    width: fit-content;
    margin-left: 15px;
    display: grid;
    gap: 15px;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CartItem = styled.li`
  align-self: stretch;
  margin-top: 15px;
  background: #fff;
  border-radius: 2px;
  padding: 10px;
  @media screen and (min-width: 700px) {
    margin: 0;
    display: flex;
    flex-flow: row wrap;
  }
`;

export const ItemInfo = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 1.4rem;
  margin-bottom: 5px;
`;

export const Price = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const Quantity = styled.p`
  font-size: 1.2rem;
`;

export const ManageItem = styled.div`
  width: 100%;
  align-self: flex-end;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const ManagerButton = styled.button`
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;
  width: 100%;
  padding: 10px 15px;
  background: ${({ theme: { common } }) => common.cyan};
  transition: opacity 0.4s;
  border-radius: 2px;
  border: 0 none;
  :hover {
    opacity: 0.5;
  }
`;

export const QuantityButton = styled.button`
  font-size: 1rem;
  margin-top: 10px;
  color: #000;
  cursor: pointer;
  width: 48%;
  padding: 10px 15px;
  border-radius: 2px;
  background: ${({ theme: { common } }) => common.cyan};
  transition: opacity 0.4s;
  border: 0 none;
  :hover {
    opacity: 0.5;
  }
  @media screen and (min-width: 250px) {
    font-size: 1.2rem;
  }
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
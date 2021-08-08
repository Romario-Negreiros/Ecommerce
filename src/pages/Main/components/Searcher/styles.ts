import styled from "styled-components";

export const Container = styled.section`
  padding: 20px 5px;
  background: ${({ theme: { backgrounds } }) => backgrounds.underheader};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (min-width: 400px) {
      grid-template-columns: repeat(4, 1fr);
  }
`;

export const Category = styled.li`
  margin: 10px 5px;
  text-align: center;
  @media screen and (min-width: 300px) {
      margin: 10px 15px;
  }
  @media screen and (min-width: 800px) {
      margin: 10px 30px;
  }
`;

export const Wrapper = styled.div`
  margin: auto;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme: { backgrounds } }) => backgrounds.headerbg};
  border: 2px solid transparent;
  :hover {
    border-color: ${({ theme: { common } }) => common.cyan};
  }
  @media screen and (min-width: 800px) {
      width: 70px;
      height: 70px;
  }
`;

export const Legend = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme: { fonts } }) => fonts.white};
  @media screen and (min-width: 800px) {
      font-size: 1.2rem;
  }
`;

export const Input = styled.input`
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  border: 0 none;
  border-radius: 2px;
  padding: 10px;
  background: #fff;
  @media screen and (min-width: 400px) {
      width: 80%;
  }
  @media screen and (min-width: 1000px) {
      width: 60%;
  }
  :focus {
    caret-color: ${({theme: { common }}) => common.cyan};
    outline: 0;
  }
`;

export const Icon = styled.img`
  width: 15px;
  object-fit: cover;
  @media screen and (min-width: 800px) {
      width: 30px;
  }
`;

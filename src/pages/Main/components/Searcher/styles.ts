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
  @media screen and (min-width: 800px) {
      width: 70px;
      height: 70px;
  }
`;

export const Category = styled.li`
  margin: 10px 5px;
  text-align: center;
  cursor: pointer;
  @media screen and (min-width: 300px) {
      margin: 10px 15px;
  }
  @media screen and (min-width: 800px) {
      margin: 10px 30px;
  }
  :hover {
    opacity: 0.7;
  }
  :hover ${Wrapper} {
    border-color: ${({ theme: { common } }) => common.cyan};

  }
`;

export const Legend = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  @media screen and (min-width: 800px) {
      font-size: 1.2rem;
  }
`;

export const Input = styled.input`
  margin-top: 20px;
  width: 100%;
  text-align: center;
  font-weight: bold;
  border-radius: 2px;
  padding: 15px;
  border: 0 none;
  background: #fff;
  transition: .3s;
  font-size: 1.2rem;
  @media screen and (min-width: 400px) {
      width: 80%;
  }
  @media screen and (min-width: 1000px) {
      width: 60%;
  }
  ::placeholder {
    font-size: 1.2rem;
  }
  :hover {
    opacity: 0.5;
  }
  :focus {
    opacity: 1;
    caret-color: ${({theme: { backgrounds }}) => backgrounds.underheader};
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

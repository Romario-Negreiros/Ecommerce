import styled from "styled-components";

export const Container = styled.section`
border-top: 1px solid ${({theme: { common }}) => common.cyan};
  padding: 10px;
  background: ${({ theme: { backgrounds } }) => backgrounds.headerbg};
`;

export const Title = styled.h1`
  font-weight: 700;
  text-align: center;
  color: #ffffff;
`;

export const Products = styled.ul`
margin-top: 20px;
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
  flex-direction: column;
  align-items: flex-start;
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
  align-self: center;
  width: 80%;
  margin-bottom: 30px;
  object-fit: cover;
  @media screen and (min-width: 400px) {
    width: 60%;
  }
  @media screen and (min-width: 500px) {

  }
`;

export const Name = styled.h2`
  font-weight: 700;
  font-size: 1.4rem;
  margin-bottom: 5px;
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const Category = styled.small`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 10px;
`;

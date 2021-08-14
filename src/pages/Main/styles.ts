import styled from "styled-components";

export const Error = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { common } }) => common.cyan};
  font-size: 1.2rem;
  @media screen and (min-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const IsLoading = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { common } }) => common.cyan};
  font-size: 1.2rem;
  @media screen and (min-width: 600px) {
    font-size: 1.4rem;
  }
`;

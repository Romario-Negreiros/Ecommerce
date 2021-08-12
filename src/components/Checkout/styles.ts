import styled from 'styled-components';

export const Wrapper = styled.main`
  min-height: 100vh;
  padding: 10px;
  position: relative;
  @media screen and (min-width: 800px) {
    padding: 50px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #fff;
  border-radius: 2px;
  padding: 5px;
  @media screen and (min-width: 500px){
    padding: 20px;
  }
`;

export const InputWrapper = styled.div`
  margin-top: 20px;
  color: #000;
`;

export const Input = styled.input`
  border: 1px solid #666666;
  width: 100%;
  text-align: center;
  font-weight: bold;
  border-radius: 2px;
  padding: 10px;
  transition: 0.3s;
  font-size: 1.2rem;
  ::placeholder {
    font-size: 1.2rem;
  }
  :hover {
    opacity: 0.5;
  }
  :focus {
    opacity: 1;
    caret-color: ${({ theme: { backgrounds } }) => backgrounds.underheader};
    outline: 0;
  }
`;

export const InputLabel = styled.label`
  display: block;
  font-weight: bolder;
`;

export const Fieldset = styled.fieldset`
  border: 0 none;
  color: #000;
  padding: 5px;
  width: 100%;
  margin-top: 25px;
  @media screen and (min-width: 500px) {
    align-self: stretch;
    margin: 0;
    width: 48%;
  }
`;

export const Legend = styled.legend`
  font-size: 1.4rem;
  font-weight: bold;
`;

export const Button = styled.button`
  font-size: 1rem;
  margin-top: 10px;
  color: ${({theme: { common }}) => common.cyan };
  cursor: pointer;
  width: 100%;
  padding: 10px 15px;
  background: ${({theme: { backgrounds }}) => backgrounds.headerbg };
  transition: opacity 0.4s;
  border: 0 none;
  :hover {
    opacity: 0.5;
  }
  border-radius: 2px;
  @media screen and (min-width: 250px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 500px) {
    width: fit-content;
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

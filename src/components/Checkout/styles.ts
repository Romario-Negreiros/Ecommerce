import styled from 'styled-components';

export const Wrapper = styled.main`
    background: ${({theme: { backgrounds }}) => backgrounds.gray} ;
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
`;

export const InputWrapper = styled.div`
margin-top: 20px;;
`;

export const Input = styled.input`
  width: 100%;
  text-align: center;
  font-weight: bold;
  border-radius: 2px;
  padding: 10px;
  border: 0 none;
  background: #fff;
  transition: .3s;
  font-size: 1.2rem;
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
  @media screen and (min-width: 500px) {
    width: calc(100% - 300px)
  }
  @media screen and (min-width: 1100px) {
    width: calc(100% - 400px);
  }
`;

export const InputLabel = styled.label`
    display: block;
    font-weight: bolder;
`;

export const Fieldset = styled.fieldset`    
    border: 1px solid #fff;
    color: #fff;
    padding: 5px;
    width: 100%;
    text-align: center;
`;

export const Legend = styled.legend`
    font-size: 1.4rem;
    font-weight: bold;
`;

export const Button = styled.button`
 font-size: 1rem;
  margin-top: 10px;
  color: #000;
  cursor: pointer;
  width: 100%;
  padding: 10px 15px;
  background: ${({ theme: { common } }) => common.green};
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
    margin: 10px auto;
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
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
    background: ${({theme: { backgrounds }}) => backgrounds.gray };
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Summary = styled.div`
    margin-bottom: 20px;
    width: 100%;
    background: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const Infos = styled.div`

`;

export const SummaryItem = styled.p`
    font-weight: 700;
    font-size: 1.2rem;
    margin-top: 5px;
`;

export const Options = styled.div`
    margin-top: 30px;
`;

export const LinkTag = styled(Link)`
font-weight: 700;
font-size: 1.1rem;
    color: #000;
    padding: 7px 15px;
    background: ${({theme: { common }}) => common.cyan};
    transition: opacity .4s;
    :hover {
        opacity: 0.5;
    }
`;


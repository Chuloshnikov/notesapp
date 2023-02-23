import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Section = styled.section`


`;

export const NotesHeader = styled.header`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 2rem 2rem;
    justify-content: space-between;
    color: ${({theme}) => theme.colors. primaryTextColor};
    /* text-shadow: 0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00; */



    h2 {
        font-weight: 600;
        font-size: 2rem;
        
    }

    input {
        background-color: ${({theme}) => theme.colors. primaryAppBackground};
        padding: 0.5rem 0.2rem;
        border-radius: 0.5rem;
        color: ${({theme}) => theme.colors. thirdTextColor};
        border: 2px solid ${({theme}) => theme.colors. thirdTextColor};
    }

`;

export const Btn = styled.button`
    background-color: ${({theme}) => theme.colors. thirdTextColor};
    padding: 0.4rem;
    border-radius: 0.5rem;
    svg {
        font-size: 1.2rem;
        color: ${({theme}) => theme.colors. primaryTextColor};
    }

`;

export const NotesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 5px 10px;
`;

export const AddLink = styled(Link)`
    background-color: ${({theme}) => theme.colors. thirdTextColor};
    padding: 0.4rem;
    border-radius: 0.5rem;
    
    svg {
        font-size: 1.2rem;
        color: ${({theme}) => theme.colors. primaryTextColor};
    }


`;


export const EmptyNotes = styled.p`
color: ${({theme}) => theme.colors. primaryTextColor};
position: relative;
top: 50%;
left: 63%;

`
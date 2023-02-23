import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Section = styled.section`
    width: max-content;
    display: flex;
    flex-direction: column;
    

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    input {
        background-color: ${({theme}) => theme.colors. primaryAppBackground};
        padding: 1rem;
        border: 2px solid ${({theme}) => theme.colors. thirdTextColor};
        border-radius: 0.5rem;
        color: ${({theme}) => theme.colors.thirdTextColor};
    }

    textarea {
        background-color: ${({theme}) => theme.colors. primaryAppBackground};
        resize: none;
        border: 2px solid ${({theme}) => theme.colors.thirdTextColor};
        border-radius: 0.5rem;
        padding: 1rem;
        color: ${({theme}) => theme.colors.thirdTextColor};
    }

`;


export const CreateNodeHeader = styled.header`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;
    padding: 2rem 4rem;
    



`;

export const LinkBtn = styled(Link)`
padding: 0.5rem 0.8rem;
background-color: ${({theme}) => theme.colors. thirdTextColor};
border-radius: 0.5rem;

`;


export const SaveBtn = styled.button`
background-color: ${({theme}) => theme.colors.primaryNoteItemColor};
padding: 0.5rem 1rem;
border-radius: 0.5rem;


`;
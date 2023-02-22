import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NoteLink = styled(Link)`
display: block;
background-color: ${({theme}) => theme.colors.primaryNoteItemColor};
display: flex;
flex-direction: column;
padding: 3rem 1rem;
margin:0.2rem;
gap: 0.5rem;
transition: all .3s ease 0s;


h4 {
    font-size: 1rem;
}

p {
    font-size: 0.8rem;
    opacity: 0.8;
}

&:hover {
    opacity: 0.9;
}
`;
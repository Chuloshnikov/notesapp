import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NoteLink = styled(Link)`
background-color: ${({theme}) => theme.colors.primaryNoteItemColor};
display: flex;
flex-direction: column;
border-radius: 0.5rem;
padding: 3rem 1rem;
margin: 0.2rem;
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

&:nth-child(3) {
    grid-column: 1/3;
}

&:nth-child(4) {
    grid-row: 3/5;
}

&:nth-child(7) {
    grid-column: 1/3;
}
`;
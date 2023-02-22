import React from 'react';
import { Section, NotesHeader, Btn, NotesContainer, AddLink } from './Notes.styled';
import { CiSearch } from 'react-icons/ci';
import { BsPlusLg } from 'react-icons/bs';
import NodesItem from '../components/NodesItem';

import notes from '../data/data';

const Notes = () => {
  return (
    <Section>
      <NotesHeader>
        <h2>My Notes</h2>
        <input type="text" autoFocus placeholder='Search...'/>
        <Btn><CiSearch/></Btn>
      </NotesHeader>
      <NotesContainer>
        {notes.map((note) => (
          <NodesItem key={note.id} note={note}>

          </NodesItem>
        ))}
      </NotesContainer>
      <AddLink><BsPlusLg/></AddLink>
    </Section>
  )
}

export default Notes
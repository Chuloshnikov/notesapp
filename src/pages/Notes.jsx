import React, { useState } from 'react';
import { Section, NotesHeader, Btn, NotesContainer, AddLink } from './Notes.styled';
import { CiSearch } from 'react-icons/ci';
import { BsPlusLg } from 'react-icons/bs';
import NodesItem from '../components/NodesItem';



const Notes = ({ notes }) => {

  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState('');
  const [filteredNotes, setFilteredNotes] = useState(notes);

  return (
    <Section>
      <NotesHeader>
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && <input type="text" autoFocus placeholder='Search...' onChange={(event) => setText(event.target.value)}/>}  
        <Btn onClick={() => setShowSearch(!showSearch)}><CiSearch/></Btn>
        <AddLink to="/create-note"><BsPlusLg/></AddLink>
      </NotesHeader>
      <NotesContainer>
        {notes.map((note) => (
          <NodesItem key={note.id} note={note}>

          </NodesItem>
        ))}
      </NotesContainer>
      
    </Section>
  )
}

export default Notes
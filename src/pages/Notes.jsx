import React, { useState, useEffect } from 'react';
import { Section, NotesHeader, Btn, NotesContainer, AddLink, EmptyNotes } from './Notes.styled';
import { CiSearch } from 'react-icons/ci';
import { MdClose } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import NodesItem from '../components/NodesItem';



const Notes = ({ notes }) => {

  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState('');
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(notes.filter((note) => {
      if (note.title.toLowerCase().match(text.toLocaleLowerCase())){
        return note;
      }
    }))
  }

  useEffect(handleSearch, [text]);

  return (
    <Section>
      <NotesHeader>
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && <input type="text" autoFocus placeholder='Search...' onChange={(event) => {
          setText(event.target.value);
          handleSearch();
           }}/>}  
        <Btn onClick={() => setShowSearch(!showSearch)}>{showSearch ? <MdClose/> : <CiSearch/>}</Btn>
        <AddLink to="/create-note"><BsPlusLg/></AddLink>
      </NotesHeader>
      <NotesContainer>
        {filteredNotes.length === 0 && <EmptyNotes>No Notes found</EmptyNotes>}
        {filteredNotes.map((note) => (
          <NodesItem key={note.id} note={note}>

          </NodesItem>
        ))}
      </NotesContainer>
      
    </Section>
  )
}

export default Notes
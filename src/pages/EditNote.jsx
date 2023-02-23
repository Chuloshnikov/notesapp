import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Section, EditNoteHeader, BackLink, SaveButton, DeleteButton } from './EditNote.styled';
import { IoIosArrowBack } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';

import useCreateDate from '../components/useCreateDate';


const EditNote = ({ notes, setNotes}) => {

  const {id} = useParams();
  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleForm = (event) => {
    event.preventDefault();

    if(title && details) {
      const newNote = { ...note, title, details, date};

      const newNotes = notes.map((item) => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      })

      setNotes(newNotes);
    }

    //redirect to homepage
    navigate('/');
  };


  const handleDelete = () => {
    const newNotes = notes.filter((item) => item.id != id);
    setNotes(newNotes);
    navigate('/');
  }

  return (
    <Section>
      <EditNoteHeader>
        <BackLink to="/"><IoIosArrowBack/></BackLink>
        <SaveButton onClick={handleForm}>Save</SaveButton>
        <DeleteButton onClick={handleDelete}><RiDeleteBin6Line/></DeleteButton>
      </EditNoteHeader>
      <form onSubmit={handleForm}>
          <input type="text" 
            placeholder='title' 
            autoFocus 
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            />
            <textarea 
              rows="28" 
              placeholder='Note details...' 
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              >
            </textarea>
        </form>
    </Section>
  )
}

export default EditNote
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Section, CreateNodeHeader, LinkBtn, SaveBtn } from './CreateNode.styled';
import { IoIosArrowBack } from "react-icons/io";
import {v4 as uuid} from 'uuid';

import useCreateDate from '../components/useCreateDate';

const CreateNote = ({ setNotes }) => {

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title && details) {
      const note = {id: uuid(), title, details, date};
      //add notes in the notes arr
      setNotes(prevNotes => [note, ...prevNotes])

      //redirect to home page
      navigate('/');
    }
  }

  return (
    <Section>
      <CreateNodeHeader>
        <LinkBtn to="/"><IoIosArrowBack/></LinkBtn>
        <SaveBtn onClick={handleSubmit}>Save</SaveBtn>
      </CreateNodeHeader>
        <form onSubmit={handleSubmit}>
          <input type="text" 
            placeholder='title' 
            value={title} 
            autoFocus 
            onChange={(event) => setTitle(event.target.value)}/>
            <textarea 
              rows="28" 
              placeholder='Note details...' 
              value={details} 
              onChange={(event) => setDetails(event.target.value)}>
            </textarea>
        </form>
    </Section>
  )
}

export default CreateNote;
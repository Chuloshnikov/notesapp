import React from 'react';
import { Section, CreateNodeHeader, LinkBtn, SaveBtn } from './CreateNode.styled';
import { IoIosArrowBack } from "react-icons/io";

const CreateNote = () => {
  return (
    <Section>
      <CreateNodeHeader>
        <LinkBtn to="/"><IoIosArrowBack/></LinkBtn>
        <SaveBtn>Save</SaveBtn>
      </CreateNodeHeader>
        <form>
          <input type="text" placeholder='title' autoFocus/>
          <textarea rows="28" placeholder='Note details...'></textarea>
        </form>
    </Section>
  )
}

export default CreateNote;
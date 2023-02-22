import React from 'react';
import { NoteLink } from './NodeItem.styled';

const NodesItem = ({ note }) => {
  return (
    <NoteLink to={`/edit-note/${note.id}`}>
        <h4>{note.title.length > 50 ? (note.title.substr(0, 50)) + '...' : note.title}</h4>
        <p>{note.date}</p>
    </NoteLink>
  )
}

export default NodesItem;
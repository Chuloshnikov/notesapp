import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppWrapper, Main } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';
import Notes from './pages/Notes';

//import notes from './data/data';

const App = () => {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  
  useEffect(() => {
    //notes to Local Storage
      localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <Main id="app">
    <AppWrapper>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Notes notes={notes} />}/>
              <Route path="/create-note" element={<CreateNote setNotes={setNotes}/>}/>
              <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes}/>}/>
          </Routes>
      </BrowserRouter>
      </AppWrapper>
    <GlobalStyle/>
    </Main>
  )
}

export default App
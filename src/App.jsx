import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppWrapper, Main } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';
import Notes from './pages/Notes';

//import notes from './data/data';

const App = () => {

  const [notes, setNotes] = useState([]);
  console.log(notes);
  

  return (
    <Main id="app">
    <AppWrapper>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Notes notes={notes} />}/>
              <Route path="/create-node" element={<CreateNote setNotes={setNotes}/>}/>
              <Route path="/edit-note/:id" element={<EditNote/>}/>
          </Routes>
      </BrowserRouter>
      </AppWrapper>
    <GlobalStyle/>
    </Main>
  )
}

export default App
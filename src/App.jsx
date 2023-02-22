import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppWrapper, Main } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';
import Notes from './pages/Notes';

const App = () => {
  return (
    <Main id="app">
    <AppWrapper>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Notes/>}/>
              <Route path="/create-node" element={<CreateNote/>}/>
              <Route path="/edit-note/:id" element={<EditNote/>}/>
          </Routes>
      </BrowserRouter>
      </AppWrapper>
    <GlobalStyle/>
    </Main>
  )
}

export default App
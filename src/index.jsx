import React from 'react';
import {createRoot} from 'react-dom/client';
import { useState } from "react";
import uuid from "react-uuid";
import Main from './Main';
import Sidebar from './Sidebar';
import "./style.css"


const App = () => {

  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {id: uuid(),title: "Untitled Note", body: "", lastModified: Date.now()};
    setNotes([newNote, ...notes])
  };
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id ==activeNote) {
        return updatedNote
      }
      return note
    })
    setNotes(updatedNotesArray)
  };
  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id != idToDelete))
  };
  const getActiveNote = () => {
    return notes.find((note) => note.id == activeNote)
  };



  return(

  <div className="App">

    <Sidebar 
      notes={notes} 
      activeNote={activeNote} 
      setActiveNote={setActiveNote} 
      onAddNote={onAddNote} 
      onDeleteNote={onDeleteNote} />

    <Main 
      activeNote={getActiveNote()}
      onUpdateNote={onUpdateNote}/>

  </div>
  );
}


createRoot(document.getElementById('root')).render(<App />); 
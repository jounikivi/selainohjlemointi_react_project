import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="container">
      <h1>Muistiinpanosovellus</h1>
      <div className='form-container'>
        <NoteForm addNote={addNote} />
      </div>
      {notes.length > 0 && (
        <div className='note-list'>
          <NoteList notes={notes} deleteNote={deleteNote} />
        </div>
      )}
    </div>
  );
};

export default App;
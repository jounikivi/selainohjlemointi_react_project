import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div className="container">
      <h1>Muistiinpanosovellus</h1>
      <div className='form-container'>
        <NoteForm addNote={addNote} />
      </div>
      {notes.length > 0 && (
        <div className='note-list'>
          <NoteList notes={notes} />
        </div>
      )}
    </div>
  );
};

export default App;
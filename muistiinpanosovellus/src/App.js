import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div className="app">
      <h1>Muistiinpanosovellus</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} />
    </div>
  );
};

export default App;

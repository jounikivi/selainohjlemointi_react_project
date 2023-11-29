// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';


const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <NoteList notes={notes} deleteNote={deleteNote} />
        </Route>
        <Route path="/add">
          <NoteForm addNote={addNote} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;


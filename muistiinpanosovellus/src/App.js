// Tuodaan tarvittavat komponentit
import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import Note from './components/Note';
import './App.css';

const App = () => {
  // Tilamuuttujat
  const [notes, setNotes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({ id: '', text: '', category: '' });

  // Lisää uusi muistiinpano
  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  // Poistaa muistiinpanon
  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  // Muokkaa muistiinpanoa
  const editNote = (id, editedText, editedCategory) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          text: editedText,
          category: editedCategory,
        };
      }
      return note;
    });
    setNotes(updatedNotes);
    setIsEditing(false);
  };

  // Asettaa muokkaustilan päälle
  const startEditing = (note) => {
    setIsEditing(true);
    setEditedNote({
      id: note.id,
      text: note.text,
      category: note.category,
    });
  };

  // Peruuttaa muokkauksen
  const cancelEditing = () => {
    setIsEditing(false);
    setEditedNote({ id: '', text: '', category: '' });
  };

  // Renderöinti
  return (
    <div className="container">
      <h1>Muistiinpanosovellus</h1>
      <div className="form-container">
        <NoteForm addNote={addNote} /> {/* Lisää NoteForm-komponentti, jolla voi lisätä uusia muistiinpanoja */}
      </div>
      {/* Näyttää muistiinpanot */}
      {notes.length > 0 && (
        <div className="note-list">
          {notes.map((note) => (
            <div key={note.id} className="note">
              {/* Muokkausnäkymä, jos muokkaustila on päällä */}
              {isEditing && editedNote.id === note.id ? (
                <div>
                  <input
                    type="text"
                    value={editedNote.text}
                    onChange={(e) => setEditedNote({ ...editedNote, text: e.target.value })}
                  />
                  <input
                    type="text"
                    value={editedNote.category}
                    onChange={(e) => setEditedNote({ ...editedNote, category: e.target.value })}
                  />
                  <button onClick={() => editNote(editedNote.id, editedNote.text, editedNote.category)}>
                    Tallenna muutokset
                  </button>
                  <button onClick={cancelEditing}>Peruuta</button>
                </div>
              ) : (
                // Näyttää muistiinpanon, jos muokkaustila ei ole päällä
                <Note
                  note={note}
                  deleteNote={deleteNote}
                  editNote={startEditing}
                />
              )}
            </div>
          ))}
        </div>
      )}
      {/* Näyttää kaikki muistiinpanot listana */}
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;

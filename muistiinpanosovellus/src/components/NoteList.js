// NoteList.js
import React from 'react';
import Note from './Note';

// Luettelo kaikista muistiinpanoista
const NoteList = ({ notes, deleteNote }) => {
  return (
    <div>
      <h2>Muistiinpanot</h2>
      {notes.map((note) => (
        <div key={note.id}>
          {/* Yksittäinen muistiinpano listassa */}
          <Note note={note} deleteNote={deleteNote} />
        </div>
      ))}
    </div>
  );
};

export default NoteList;
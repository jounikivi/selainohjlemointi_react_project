// NoteList.js
import React from 'react';
import Note from './Note';

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div>
      <h2>Muistiinpanot</h2>
      {notes.map((note) => (
        <div key={note.id}>
          <Note note={note} deleteNote={deleteNote} />
        </div>
      ))}
    </div>
  );
};

export default NoteList;

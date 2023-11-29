// Note.js
import React from 'react';

const Note = ({ note, deleteNote }) => {
  return (
    <div>
      <p>{note.text}</p>
      <p>Kategoria: {note.category}</p>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default Note;

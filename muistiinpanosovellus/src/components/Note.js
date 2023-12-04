// Note.js
import React from 'react';

const Note = ({ note, deleteNote, editNote }) => {
  return (
    <div>
      <p>{note.text}</p>
      <p>Kategoria: {note.category}</p>
      <button onClick={() => deleteNote(note.id)}>Poista muistiinpano</button>
      <button onClick={() => editNote(note.id)}>Muokkaa</button>
    </div>
  );
};

export default Note;

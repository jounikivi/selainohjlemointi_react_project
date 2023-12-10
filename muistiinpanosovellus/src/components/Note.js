// Note.js
import React, { useState } from 'react';

const Note = ({ note, deleteNote, editNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);
  const [editedCategory, setEditedCategory] = useState(note.category);

  const handleEdit = () => {
    editNote(note.id, editedText, editedCategory);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <input
            type="text"
            value={editedCategory}
            onChange={(e) => setEditedCategory(e.target.value)}
          />
          <button onClick={handleEdit}>Tallenna muutokset</button>
        </div>
      ) : (
        <div>
          <p>{note.text}</p>
          <p>Kategoria: {note.category}</p>
          <button onClick={() => deleteNote(note.id)}>Poista muistiinpano</button>
          <button onClick={() => setIsEditing(true)}>Muokkaa</button>
        </div>
      )}
    </div>
  );
};

export default Note;

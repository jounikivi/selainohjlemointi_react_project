import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NoteForm = ({ addNote }) => {
  const [noteText, setNoteText] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim() === '' || category.trim() === '') return;
    addNote({ id: uuidv4(), text: noteText, category });
    setNoteText('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a note..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category..."
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
// NoteForm.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NoteForm = ({ addNote }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim() === '' || category.trim() === '') return;
    addNote({
      id: uuidv4(),
      title: noteTitle,
      text: noteText,
      category
    });
    setNoteTitle('');
    setNoteText('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Otsikko"
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
      />
      <textarea
        placeholder="Lisää muistiinpano..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="Kategoria..."
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Lisää muistiinpano</button>
    </form>
  );
};

export default NoteForm;
import React from 'react';
import Note from './Note';

const NoteList = ({ notes }) => {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <Note
          key={index}
          title={note.title}
          content={note.content}
          category={note.category}
        />
      ))}
    </div>
  );
};


export default NoteList;
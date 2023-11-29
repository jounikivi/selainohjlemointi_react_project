import React from 'react';

const Note = ({ title, content, category }) => {
  return (
    <div className="note">
      <h3>{title}</h3>
      <p>{content}</p>
      <p>Category: {category}</p>
    </div>
  );
};

export default Note;
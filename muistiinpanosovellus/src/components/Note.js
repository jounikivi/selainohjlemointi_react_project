import React from 'react';

const Note = ({ otsikko, muistiinpano, kategoria }) => {
  return (
    <div className="note">
      <h3>{otsikko}</h3>
      <p>{muistiinpano}</p>
      <p>Category: {kategoria}</p>
    </div>
  );
};

export default Note;
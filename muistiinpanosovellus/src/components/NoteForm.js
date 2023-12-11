import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NoteForm = ({ addNote }) => {
  // Tilamuuttujat
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [category, setCategory] = useState("");

  // Käsittele lomakkeen lähettäminen
  const handleSubmit = (e) => {
    e.preventDefault();
    // Tarkistetaan, etteivät tekstikentät ole tyhjiä
    if (noteText.trim() === "" || category.trim() === "") return;

    // Lisää uusi muistiinpano ja nollaa kentät
    addNote({
      id: uuidv4(),
      title: noteTitle,
      text: noteText,
      category,
    });
    setNoteTitle("");
    setNoteText("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Otsikkokenttä */}
      <input
        type="text"
        placeholder="Otsikko"
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
      />
      {/* Tekstikenttä muistiinpanon kirjoittamiseen */}
      <textarea
        placeholder="Lisää muistiinpano..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      ></textarea>
      {/* Kategorian syöttökenttä */}
      <input
        type="text"
        placeholder="Kategoria..."
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      {/* Lähetä-nappi */}
      <button type="submit">Lisää muistiinpano</button>
    </form>
  );
};

export default NoteForm;

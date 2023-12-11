import React, { useState } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({
    id: "",
    text: "",
    category: "",
  });

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const editNote = (id, editedText, editedCategory) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          text: editedText,
          category: editedCategory,
        };
      }
      return note;
    });
    setNotes(updatedNotes);
    setIsEditing(false);
  };

  const startEditing = (note) => {
    setIsEditing(true);
    setEditedNote({
      id: note.id,
      text: note.text,
      category: note.category,
    });
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setEditedNote({ id: "", text: "", category: "" });
  };

  return (
    <div className="container">
      <h1>Muistiinpanosovellus</h1>
      <div className="form-container">
        <NoteForm addNote={addNote} />
      </div>
      {notes.length > 0 && (
        <div className="note-list">
          {notes.map((note) => (
            <div key={note.id} className="note">
              {isEditing && editedNote.id === note.id ? (
                <div>
                  <input
                    type="text"
                    value={editedNote.text}
                    onChange={(e) =>
                      setEditedNote({ ...editedNote, text: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    value={editedNote.category}
                    onChange={(e) =>
                      setEditedNote({ ...editedNote, category: e.target.value })
                    }
                  />
                  <button
                    onClick={() =>
                      editNote(
                        editedNote.id,
                        editedNote.text,
                        editedNote.category
                      )
                    }
                  >
                    Tallenna muutokset
                  </button>
                  <button onClick={cancelEditing}>Peruuta</button>
                </div>
              ) : (
                <Note
                  note={note}
                  deleteNote={deleteNote}
                  editNote={startEditing}
                />
              )}
            </div>
          ))}
        </div>
      )}
      <NoteList notes={notes} deleteNote={deleteNote} />{" "}
      {/* Lisää NoteList tässä */}
    </div>
  );
};

export default App;

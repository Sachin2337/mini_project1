import React from 'react';
import { Link } from 'react-router-dom';

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div className="container mt-5">
      <h2>Notes</h2>
      <ul className="list-group">
        {notes.map((note) => (
          <li className="list-group-item" key={note.id}>
            <Link to={`/edit-note/${note.id}`}>{note.title}</Link>
            <button
              className="btn btn-danger btn-sm float-right"
              onClick={() => deleteNote(note.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Link to="/edit-note/new" className="btn btn-primary mt-3">
        Create New Note
      </Link>
    </div>
  );
};

export default NoteList;

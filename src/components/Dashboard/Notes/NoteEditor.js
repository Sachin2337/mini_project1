import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const NoteEditor = ({ notes, updateNote }) => {
  const { id } = useParams();
  const history = useHistory();
  const [note, setNote] = useState({ id: '', title: '', content: '' });

  useEffect(() => {
    if (id === 'new') {
      setNote({ id: '', title: '', content: '' });
    } else {
      const selectedNote = notes.find((n) => n.id === parseInt(id));
      if (selectedNote) {
        setNote(selectedNote);
      } else {
        history.push('/');
      }
    }
  }, [id, notes, history]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const handleSave = () => {
    if (note.title.trim() === '' || note.content.trim() === '') {
      alert('Title and content cannot be empty.');
      return;
    }

    if (note.id === '') {
      const newId = Math.max(...notes.map((n) => n.id), 0) + 1;
      const newNote = { ...note, id: newId };
      updateNote(newNote);
      history.push('/');
    } else {
      updateNote(note);
      history.push('/');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit Note</h2>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={note.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          className="form-control"
          id="content"
          name="content"
          rows="6"
          value={note.content}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default NoteEditor;

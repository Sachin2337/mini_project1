import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Common/Header';
import NoteList from './components/Dashboard/Notes/NoteList';
import NoteEditor from './components/Dashboard/Notes/NoteEditor';
import PasswordList from './components/Dashboard/PasswordMnanager/PasswordList';
import PasswordEditor from './components/Dashboard/PasswordMnanager/PasswordEditor';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

function App() {
  // Define the initial notes array
  const [notes, setNotes] = useState([
    // Add more initial notes as needed
  ]);

  // Function to add a new note
  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  // Function to delete a note by ID
  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  // Define the initial passwords array
  const [passwords, setPasswords] = useState([
    // Add more initial passwords as needed
  ]);

  // Function to add a new password
  const addPassword = (newPassword) => {
    setPasswords([...passwords, newPassword]);
  };

  return (
    <Router>
      <Header />
      <div className="app-container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <NoteList notes={notes} deleteNote={deleteNote} />}
          />
          <Route
            path="/edit-note/:id"
            render={() => <NoteEditor notes={notes} addNote={addNote} />}
          />
          <Route
            exact
            path="/passwords"
            render={() => <PasswordList passwords={passwords} />}
          />
          <Route
            path="/create-password"
            render={() => <PasswordEditor addPassword={addPassword} />}
          />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

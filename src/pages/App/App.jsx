import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import Dashboard from '../Dashboard/Dashboard';
import DetailsPage from '../Details/DetailsPage';
import Notes from '../Notes/Notes';
import AddHabit from '../AddHabit/AddHabit';
import UpdateHabit from '../AddHabit/UpdateHabit';
import AddNote from '../Notes/AddNote';
import NotesDetails from '../Notes/NotesDetails';
import HomePage from '../HomePage/HomePage';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" element={<Dashboard user={user} />} />
              <Route path="/details" element={<DetailsPage />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/add-habit" element={<AddHabit />} />
              <Route path="/add-note" element={<AddNote />} />
              <Route path="/notes/:id" element={<NotesDetails />} />
              <Route path="/update" element={<UpdateHabit />} />
            </Routes>
          </>
          :
          <>
          
          <Routes>
            <Route path='/' element={<HomePage setUser={setUser}/>} />
            <Route path='/sign-up' element={<SignUpForm setUser={setUser} />} />
            <Route path='/login' element={<LoginForm setUser={setUser} />} />
          </Routes>
          </>
      }
    </main>
  );
}

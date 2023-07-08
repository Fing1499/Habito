import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import Dashboard from '../Dashboard/Dashboard';
import DetailsPage from '../Details/DetailsPage';
import Notes from '../Notes/Notes';
import AddHabit from '../AddHabit/AddHabit';
import AddNote from '../Notes/AddNote';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/details" element={<DetailsPage />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/add-habit" element={<AddHabit />} />
              <Route path="/add-note" element={<AddNote />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}

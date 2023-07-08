import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';



export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null)
  }

  return (
    <>
      <nav>
        <Link to="/dashboard">Dashboard</Link>

        <Link to="/details">Details</Link>

        <Link to="/notes">Notes</Link>
 
        <span>Welcome, {user.name}</span>

        <Link to="" onClick={handleLogOut}>Log Out</Link>
      </nav>
    </>
  );
}
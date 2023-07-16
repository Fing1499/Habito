import './NavBar.css'
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
        <Link to="/dashboard"><i class="fa-solid fa-grip fa-2xl"></i></Link>

        <Link to="/details"><i class="fa-solid fa-chart-line fa-2xl"></i></Link>

        <Link to="/notes"><i class="fa-solid fa-note-sticky fa-2xl"></i></Link>

        <Link to="" onClick={handleLogOut}><i class="fa-solid fa-arrow-right-from-bracket fa-2xl"></i></Link>
      </nav>
    </>
  );
}
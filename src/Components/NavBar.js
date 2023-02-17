import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navBar">
        <h1>
            <Link to="/">Home</Link>
        </h1>
        <h1>
            <Link to="/drip">Sha's Closet</Link>
        </h1>
        <button className="addNewDrip">
            <Link to="/drip/new">New Drip</Link>
        </button>
    </nav>
  );
}
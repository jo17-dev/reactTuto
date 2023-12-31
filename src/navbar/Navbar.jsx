import {Link} from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="nav-bar">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
            <Link to="/meteo" className="nav-item">Meteo</Link>
            <Link to="/form" className="nav-item" >Form</Link>
        </div>
    )
}

export default Navbar;
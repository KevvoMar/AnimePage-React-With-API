import React, { useState } from 'react'
import AniKevLogo from "../assets/AniKevLogo.png"
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className="row">
            <div className='navbar'>
                <Link to="/">
                    <div className="logo--wrapper">
                        <figure>
                            <img src={AniKevLogo} alt="" className="logo" />
                        </figure>
                        <h1>Ultra Anime</h1>
                    </div>
                </Link>
                <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? (
                        <FaTimes className="burger-icon" />
                    ) : (
                        <FaBars className="burger-icon" />
                    )}
                </button>

                <div className={`nav__links--mobile ${menuOpen ? "open" : ""}`}>
                    <ul className="nav__links">
                        <li className="click"><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li className="click"><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                        <li className="click"><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                        <li className="click"><Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar;

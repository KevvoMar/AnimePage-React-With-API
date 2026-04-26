import React from 'react'
import AniKevLogo from "../assets/AniKevLogo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="row">
            <div className='navbar'>
                <div className="logo--wrapper">
                    <figure>
                        <img src={AniKevLogo} alt="" className="logo" />
                    </figure>
                    <h1>Ultra Anime</h1>
                </div>
                <ul className="nav__links">
                    <li className="click"><Link to="/" className="nav__link">Home</Link></li>
                    <li className="click"><Link to="/" className="nav__link">About</Link></li>
                    <li className="click"><Link to="/" className="nav__link">Contact</Link></li>
                    <li className="click"><Link to="/" className="nav__link">Profile</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;

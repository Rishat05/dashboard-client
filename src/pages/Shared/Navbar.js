import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>

            <div className='nav-link container'>
                <div className='title'>
                    <p className='full-site-title'><span className='site-title'>My</span>Book</p>
                </div>

                <nav className="link-container">
                    <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/home'>Home</NavLink>

                    <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/dashboard'>Dashboard</NavLink>

                    {user ? (
                        <NavLink style={{ 'textDecoration': 'none' }} onClick={() => signOut(auth)} className={({ isActive }) => isActive ? "active-link" : "link"}
                            to="/login"
                        >
                            Logout
                        </NavLink>) : (
                        <NavLink style={{ 'textDecoration': 'none' }} className={({ isActive }) => isActive ? "active-link" : "link"}
                            to="/login"
                        >
                            Login
                        </NavLink>
                    )

                    }

                </nav>


            </div >
        </div>
    );
};

export default Header;
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
        localStorage.removeItem("accessToken")
    }

    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to)
        let match = useMatch({ path: resolved.pathname, end: true })

        return (
            <Link
                style={{ color: match ? '#FFFFFF' : '#000000', background: match ? '#3A4256' : 'transparent' }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        )
    }

    const menuItem = <>
        <li><CustomLink to='/'>Home</CustomLink></li>
        <li><CustomLink to='/appoinment'>Appoinment</CustomLink></li>
        <li><CustomLink to='/review'>Review</CustomLink></li>
        <li><CustomLink to='/contact'>Contact</CustomLink></li>
        <li><CustomLink to='/about'>About</CustomLink></li>
        {
            user && <li><CustomLink to='/dashboard'>Dashboard</CustomLink></li>
        }
        <li>
            {
                user ? <button className="btn btn-ghost" onClick={handleSignOut}>Sign Out</button> : <CustomLink to='/login'>Login</CustomLink>
            }
        </li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div >
    );
};

export default Navbar;
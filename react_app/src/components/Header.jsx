import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><NavLink to="/addstudent">Addstudent</NavLink></li>
                        <li className="nav-item"><NavLink to="/showstudent">ShowStudent</NavLink></li>
                    </ul>
                
                </div>
        </nav>
    )
}

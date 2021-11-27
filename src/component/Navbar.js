import React, { useState } from "react"
import "./css/navbar.css"
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom"
import {languajesMain} from './js/data'
const Navbar = () => {
    const location  = useLocation()
    const [languajes, setLanguajes] = useState(window.localStorage.getItem('languajes'))
    const selectLanguajes = (e) => {
        setLanguajes(e.target.value)
        window.localStorage.setItem('languajes', e.target.value)
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="collapse navbar-collapse container" id="navbarNavDropdown">
                {languajesMain.map((dato) => (<li>
                    <div className={`sidebar__link ${ location.pathname === dato.link ? "sidebar__link active_menu_link":''}`}>
                        <Link to={dato.link}>{dato.icon} {languajes === 'SPANISH' ? dato.titles.Spanish : dato.titles.English}</Link>
                    </div>
                </li>))}
                <li>
                    <div className="mt-2 container">
                        <div className="input-group input-group-lg container">
                            <select className="input-group-select" value={languajes} onChange={selectLanguajes}>
                                <option value='ENGLISH'>ENGLISH</option>
                                <option value='SPANISH'>SPANISH</option>
                            </select>
                        </div>
                    </div>
                </li>
            </div>
        </nav>
    )

}

export default Navbar;
import React, { useState } from "react"
import "./css/navbar.css"
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom"
import {languagesMain} from './js/data'
const Navbar = () => {
    const location  = useLocation()
    const [languages, setlanguages] = useState(window.localStorage.getItem('languages'))
    const selectlanguages = (e) => {
        setlanguages(e.target.value)
        window.localStorage.setItem('languages', e.target.value)
    }
    return(
        <nav>
			<h1 class="logo">Pro<span>file</span></h1>
			<ul>
                {languagesMain.map((dato) => (<li>
                    <div className={`sidebar__link ${ location.pathname === dato.link ? "sidebar__link active_menu_link":''}`}>
                        <Link to={dato.link}>{dato.icon} {languages === 'SPANISH' ? dato.titles.Spanish : dato.titles.English}</Link>
                    </div>
                </li>))}
                <li>
                    <div className="mt-2 container">
                        <div className="input-group input-group-lg container">
                            <select className="input-group-select" value={languages} onChange={selectlanguages}>
                                <option value='ENGLISH'>ENGLISH</option>
                                <option value='SPANISH'>SPANISH</option>
                            </select>
                        </div>
                    </div>
                </li>
			</ul>
		</nav>
    )

}

export default Navbar;
import React from "react"
import "./css/navbar.css"
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom"
import { FaHome, FaChartBar, FaChartPie, FaUserAlt } from "react-icons/fa"
const Navbar = () => {
    const location  = useLocation()
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="collapse navbar-collapse container" id="navbarNavDropdown">
                <li>
                    <div className={`sidebar__link ${ location.pathname === '/perfilReactJS' ? "sidebar__link active_menu_link":''}`}>
                        <Link to="/perfilReactJS"><FaHome style={{fontSize:'40px'}}/> INICIO</Link>
                    </div>
                </li>
                <li>
                    <div className={`sidebar__link ${ location.pathname === '/perfilReactJS/Skill' ? "sidebar__link active_menu_link":''}`}>
                        <Link to="/perfilReactJS/Skill"><FaChartPie style={{fontSize:'40px'}}/> HABILIDADES</Link>
                    </div>
                </li>
                <li>
                    <div className={`sidebar__link ${ location.pathname === '/perfilReactJS/Experience' ? "sidebar__link active_menu_link":''}`}>
                        <Link to="/perfilReactJS/Experience"><FaChartBar style={{fontSize:'40px'}}/> EXPERIENCIA</Link>
                    </div>
                </li>
                <li>
                    <div className={`sidebar__link ${ location.pathname === '/perfilReactJS/AboutMe' ? "sidebar__link active_menu_link":''}`}>
                        <Link to="/perfilReactJS/AboutMe"><FaUserAlt style={{fontSize:'40px'}}/>ACERCA DE MI</Link>
                    </div>
                </li>
            </div>
        </nav>
    )

}

export default Navbar;
import React, { useState, useEffect } from "react"
import {languagesFooter} from './js/data'
import "./css/App.css"
const Footer = () => {
    const [languages, setlanguages] = useState(localStorage.getItem('languages'))
    useEffect(() => {
        window.addEventListener('change', () => {
            setlanguages(window.localStorage.getItem('languages'))
        })
    }, [])
    return(
        <footer id="footer">
            <h4 style={{}}> &copy; {languages === 'SPANISH' ? languagesFooter.Spanish : languagesFooter.English}</h4>
        </footer>
    );
}
export default Footer;
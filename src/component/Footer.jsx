import React, { useState, useEffect } from "react"
import {languagesFooter} from './js/data'
const Footer = () => {
    const [languages, setlanguages] = useState(localStorage.getItem('languages'))
    useEffect(() => {
        window.addEventListener('change', () => {
            setlanguages(window.localStorage.getItem('languages'))
        })
    }, [])
    return(
        <footer id="footer">
            <div className="bg-light mt-3">
                <p style={{textAlign:'center', fontSize:'20px', margin:'10px'}} className="text-dark">
                    &copy; {languages === 'SPANISH' ? languagesFooter.Spanish : languagesFooter.English}
                </p>
            </div>
        </footer>
    );
}
export default Footer;
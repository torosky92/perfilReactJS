import React, { useState, useEffect } from "react"
import {languajesFooter} from './js/data'
const Footer = () => {
    const [languajes, setLanguajes] = useState(localStorage.getItem('languajes'))
    useEffect(() => {
        window.addEventListener('change', () => {
            setLanguajes(window.localStorage.getItem('languajes'))
        })
    }, [])
    return(
        <footer id="footer">
            <div className="bg-light mt-3">
                <p style={{textAlign:'center', fontSize:'20px', margin:'10px'}} className="text-dark">
                    &copy; {languajes === 'SPANISH' ? languajesFooter.Spanish : languajesFooter.English}
                </p>
            </div>
        </footer>
    );
}
export default Footer;
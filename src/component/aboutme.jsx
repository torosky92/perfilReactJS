import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './css/App.css'
import Footer from './Footer.jsx'
const AboutMeProcess = props => {
    return(
        <div className="AboutMe">
            <form className="container-fluid" onSubmit={(e) => e.preventDefault()}>
            {props.Whatsapp}
                <Footer/>
            </form>
        </div>
    );
}
export default AboutMeProcess;
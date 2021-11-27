import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './css/App.css'
import Footer from './Footer.jsx'
export const ExperienceProcess = props => {
    return(
        <div className="Experience">
            <form className="container-fluid" onSubmit={(e) => e.preventDefault()}>
                {props.Whatsapp}
                <Footer/>
            </form>
        </div>
    );
}
export default ExperienceProcess;
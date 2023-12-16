import React from "react"
import { Toaster } from 'react-hot-toast'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './css/Home.css'
import {HomeInformation} from './js/home'
const HomeProcess = props => {
    return(
        <div className="Home" onSubmit={(e) => e.preventDefault()}>
            <div className="container-fluid">
                <div className="row">
                    <div className="content container col-lg-7">
                        <h3>{props.languages === 'SPANISH' ? HomeInformation.Title.Spanish: HomeInformation.Title.English}</h3>
                        <p className="col-sm-9 container">{props.languages === 'SPANISH' ? HomeInformation.Description.Spanish: HomeInformation.Description.English}</p>
                    </div>
                    <div className="image container col-auto">
                        {HomeInformation.Photo}
                    </div>
                </div>
                <div className="row container mt-3">
                    <div className="content col-sm-4">
                        <h3>{props.languages === 'SPANISH' ? <>Links de <span>Contacto</span></>: <>Link <span>Contact</span></>}</h3>
                    </div>
                    <div className="mt-4 col-sm-8 container">
                        <div className="row container">
                            {HomeInformation.Contact.map((dato) => <div className="col pb-5">
                                    <a className="" href={dato.text}>
                                        {dato.icon}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
            <Toaster position="bottom-right"/>
            {props.whatsapp}
        </div>
    );
}
export default HomeProcess;
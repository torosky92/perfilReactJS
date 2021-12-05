import React from "react"
import toast, { Toaster } from 'react-hot-toast'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './css/Home.css'
import {HomeInformation} from './js/home'
const HomeProcess = props => {
    return(
        <div className="Home" onSubmit={(e) => e.preventDefault()}>
            <div className="image">{HomeInformation.Photo}</div>
            <div className="content">
                <h3>{props.languages === 'SPANISH' ? HomeInformation.Title.Spanish: HomeInformation.Title.English}</h3>
                <p className="col-sm-9 container">{props.languages === 'SPANISH' ? HomeInformation.Description.Spanish: HomeInformation.Description.English}</p>
            </div>
            <div className="container">
                {HomeInformation.Contact.map((dato) => <a href={dato.text}>{dato.icon}</a>)}
                    {HomeInformation.WT.map((dato) => <button 
                        onClick={() => 
                            toast(dato.text, 
                                {
                                    icon: dato.icon,
                                    style: {
                                        borderRadius: '10px',
                                        background: '#333',
                                        color: '#fff',
                                    }
                                }
                            )}>{dato.icon}</button>)}
            </div>
            
            <Toaster position="bottom-right"/>
            {props.whatsapp}
        </div>
    );
}
export default HomeProcess;
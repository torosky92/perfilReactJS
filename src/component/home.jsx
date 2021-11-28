import React from "react"
import toast, { Toaster } from 'react-hot-toast'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './css/Home.css'
import {HomeInformation} from './js/home'
const HomeProcess = props => {
    return(
        <div className="Home">
            <form className="container-fluid" onSubmit={(e) => e.preventDefault()}>
                <div>{HomeInformation.Photo}</div>
                <h1>{props.languages === 'SPANISH' ? HomeInformation.Title.Spanish: HomeInformation.Title.English}</h1>
                <label>{props.languages === 'SPANISH' ? HomeInformation.Description.Spanish: HomeInformation.Description.English}</label>
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
                <Toaster position="bottom-right"/>
            </form>
        </div>
    );
}
export default HomeProcess;
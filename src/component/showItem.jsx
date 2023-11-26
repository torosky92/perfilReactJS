import React, {useState} from "react"
import './css/showItem.css'
const ShowItem = props => {
    const [showPopup, setShowPopup] = useState(false)
    const togglePopup = () => {
        setShowPopup(!showPopup);
    }
    return(
        <>
            {props.hasLibrary && showPopup && <div 
                className="popup"
            >
                <div className="popup-inner">
                    <h2 className="modalh2">{props.textLibrary}</h2>
                    {props.library.map((dato) => (<li className="modalLib popup-content">
                        <span>{dato.library}:</span> 
                        {props.languages === 'SPANISH' ? 'FECHA' : 'DATE'}: <i>{dato.day}/{dato.month}/{dato.year}</i>
                    </li>))}
                    <button className="popup-button" onClick={togglePopup}>Cerrar</button>
                </div>
            </div>}
            <div onClick={togglePopup} className={"box-container"}>
                <div className="row">
                    <div className="circle-icon">
                        <i>{props.icon}</i>
                        <p>{props.title}</p>
                    </div>
                    <div className="info">
                        <h3>{props.value}</h3>
                        {props.textValue !== '' && <label>{props.textValue}</label>}
                    </div>
                </div>
            </div>
        </>
    );
}
export default ShowItem
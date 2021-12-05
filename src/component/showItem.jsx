import React, {useState} from "react"
import './css/showItem.css'
const ShowItem = props => {
    const [showList, setShowList] = useState(false)
    const showModal = () => {
        if(props.library.length > 0)setShowList(true)
    }
    return(
        <>
            {props.hasLibrary === true && <div 
                className="modal fade"
                aria-hidden={showList} 
                toggle={() => setShowList(false)}
                role="dialog"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                    <h2 className="modalh2">{props.textLibrary}</h2>
                    {props.library.map((dato) => <li className="modalLib"><span>{dato.library}:</span> {props.languages === 'SPANISH' ? 'FECHA' : 'DATE'}: <i>{dato.day}/{dato.month}/{dato.year}</i></li>)}
            </div>}
            <div onClick={() => showModal()} className={"box-container"}>
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
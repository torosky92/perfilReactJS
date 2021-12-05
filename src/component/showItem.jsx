import React, {useState} from "react"
import './css/showItem.css'
import { Modal } from "reactstrap"
const ShowItem = props => {
    const [showList, setShowList] = useState(false)
    const showModal = () => {
        if(props.library.length > 0)setShowList(true)
    }
    return(
        <>
            {props.hasLibrary === true && <Modal 
                    isOpen={showList} 
                    toggle={() => setShowList(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                <h2 className="modalh2">{props.textLibrary}</h2>
                {props.library.map((dato) => <li className="modalLib"><span>{dato.library}:</span> {props.languages === 'SPANISH' ? 'FECHA' : 'DATE'}: <i>{dato.day}/{dato.month}/{dato.year}</i></li>)}
            </Modal>}
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
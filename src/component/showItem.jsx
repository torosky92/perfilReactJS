import React, {useState} from "react"
import './css/showItem.css'
import { Modal } from "reactstrap"
const ShowItem = props => {
    const [showList, setShowList] = useState(false)
    return(
        <>
            {props.hasLibrary === true && <Modal className="boxModal" isOpen={showList} toggle={() => setShowList(false)}>
                <h1>{props.textLibrary}</h1>
                {props.library.map((dato) => <li><b>{dato.library}:</b> {props.languages === 'SPANISH' ? 'FECHA' : 'DATE'}: <i>{dato.day}/{dato.month}/{dato.year}</i></li>)}
            </Modal>}
            <div onClick={() => setShowList(true)} style={{'background-color':(props.BoxIconColor)}} className={"boxShow mt-2 container"}>
                <div className="row">
                    <div className="boxValue2">
                        <h1 className="boxIcon">{props.icon}</h1>
                        <label className="boxText2">{props.title}</label>
                    </div>
                    <div className="boxValue mt-3">
                        <h1 className='boxText'>{props.value}</h1>
                        <label className='boxText2'>{props.textValue}</label>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ShowItem
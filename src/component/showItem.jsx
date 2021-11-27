import React from "react";
import './css/showItem.css'
const ShowItem = props => {
    return(
        <div style={{'background-color':(props.BoxIconColor)}} className={"boxShow mt-2 container"}>
            <div className="row">
                <div className="boxValue2">
                    <h1 className="boxIcon">{props.icon} </h1>
                    <label className="boxText2">{props.title}</label>
                </div>
                <div className="boxValue mt-3">
                    <h1 className='boxText'>{props.value}</h1>
                    <label className='boxText2'>{props.textValue}</label>
                </div>
            </div>
        </div>
    );
}
export default ShowItem
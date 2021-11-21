import React from "react";
import './css/showItem.css'
const ShowItem = props => {
    return(
        <div style={{margin:'2%', marginBottom:'70px', boxShadow:'0px 14px 80px rgba(34, 35, 58, 0.2)'}} className={props.size + " mt-5 bg-light container"}>
            <div className="row">
                <div style={props.styleBoxIcon}  className={Number(props.colorText) === 1 ? 'bg-danger container boxIcon': Number(props.colorText) === 2 ? 'bg-warning container boxIcon': Number(props.colorText) === 3 ? 'bg-success container boxIcon': "container boxIcon"}>
                    <h3 style={props.styleIcon} className="text-white boxText">{props.icon} </h3>
                    <label className="text-white boxText container" fontSize={props.sizeTextlabel}>{props.title}</label>
                </div>
                <div style={props.styleBeforeValue} className="mt-3 container">
                    <h1 style={props.styleValue} className={Number(props.colorText) === 1 ? 'text-danger boxText': Number(props.colorText) === 2 ? 'text-warning boxText': 'text-dark boxText'}>{props.value}</h1>
                    <label className={Number(props.colorText) === 1 ? 'text-danger boxText container': Number(props.colorText) === 2 ? 'text-warning boxText container': 'text-dark boxText container'}>{props.textValue}</label>
                </div>
            </div>
        </div>
    );
}
export default ShowItem;
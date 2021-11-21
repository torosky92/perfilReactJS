import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './css/App.css'
import Footer from './Footer'
import ShowItem from "./showItem"
import { FaReact, FaCss3, FaHtml5, FaPython } from "react-icons/fa"
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
export const SkillsProcess = () => {
    return(
        <div className="Skill">
            <form className="container-fluid" onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                    <ShowItem size={'col-sm-3'} styleBoxIcon={{marginLeft:'10px', width:'50%', marginBottom:'30px', background:'#FFCC00'}} 
                        styleIcon={{fontSize:'60px', marginTop:'30px', textAlign:'center'}} icon={<FaPython/>} title={'Python'} 
                        styleBeforeValue={{marginLeft:'-20px', marginTop:'30px', width:'40%', marginBottom:'20px'}}
                        styleValue={{fontSize:'50px', marginTop:'10px'}} value={'5 AÑOS'}
                        colorText={0} textValue={'Avanzado'}/>
                    <ShowItem size={'col-sm-3'} styleBoxIcon={{marginLeft:'10px', width:'50%', marginBottom:'30px', background:'#3B5998'}} 
                        styleIcon={{fontSize:'60px', marginTop:'30px', textAlign:'center'}} icon={<FaCss3/>} title={'CSS3'} 
                        styleBeforeValue={{marginLeft:'-20px', marginTop:'30px', width:'40%', marginBottom:'20px'}}
                        styleValue={{fontSize:'50px', marginTop:'10px'}} value={'3 AÑOS'}
                        colorText={0} textValue={'Avanzado'}/>
                    <ShowItem size={'col-sm-3'} styleBoxIcon={{marginLeft:'10px', width:'50%', marginBottom:'30px', background:'#F65314'}} 
                        styleIcon={{fontSize:'60px', marginTop:'30px', textAlign:'center'}} icon={<FaHtml5/>} title={'HTML5'} 
                        styleBeforeValue={{marginLeft:'-20px', marginTop:'30px', width:'40%', marginBottom:'20px'}}
                        styleValue={{fontSize:'50px', marginTop:'10px'}} value={'3 AÑOS'}
                        colorText={0} textValue={'Avanzado'}/>
                    <ShowItem size={'col-sm-3'} styleBoxIcon={{marginLeft:'10px', width:'50%', marginBottom:'30px', background:'#00A1F1'}} 
                        styleIcon={{fontSize:'60px', marginTop:'30px', textAlign:'center'}} icon={<FaReact/>} title={'ReactJs'} 
                        styleBeforeValue={{marginLeft:'-20px', marginTop:'30px', width:'40%', marginBottom:'20px'}}
                        styleValue={{fontSize:'50px', marginTop:'10px'}} value={'3 AÑOS'}
                        colorText={0} textValue={'Avanzado'}/>
                </div>
                <WhatsAppWidget phoneNumber='573008850830' textReplyTime="" companyName="HABLAR CON DAVID" sendButton="Enviar" message='¿En que te puedo ayudar?'/>
                <Footer/>
            </form>
        </div>
    );
}
export default SkillsProcess;
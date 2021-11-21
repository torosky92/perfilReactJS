import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './css/App.css'
import Footer from './Footer'
import ShowItem from "./showItem"
import { SiMysql, SiArduino, SiAngular, SiFlask, SiLess, SiTypescript, SiLabview, SiSiemens, SiMitsubishi } from "react-icons/si"
import { FaReact, FaCss3, FaHtml5, FaPython, FaGithubSquare, FaJs, FaBootstrap, FaSass } from "react-icons/fa"
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
export const SkillsProcess = () => {
    return(
        <div className="Skill">
            <form className="container-fluid" onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                    <ShowItem size={'col-sm-3'} styleBoxIcon={{marginLeft:'10px', width:'40%', marginBottom:'10px', background:'#00b33c'}} 
                        styleIcon={{fontSize:'60px', marginTop:'10px', textAlign:'center'}} icon={<FaPython/>} title={'Python'} 
                        styleBeforeValue={{marginLeft:'-20px', marginTop:'30px', width:'50%'}}
                        styleValue={{fontSize:'30px', marginTop:'10px'}} value={'5 AÑOS'}
                        colorText={0} textValue={'Avanzado'}/>
                    <ShowItem size={'col-sm-3'} styleBoxIcon={{marginLeft:'10px', width:'40%', marginBottom:'10px', background:'black'}} 
                        styleIcon={{fontSize:'60px', marginTop:'10px', textAlign:'center'}} icon={<SiFlask/>} title={'Flask'} 
                        styleBeforeValue={{marginLeft:'-20px', marginTop:'30px', width:'50%'}}
                        styleValue={{fontSize:'30px', marginTop:'10px'}} value={'3 AÑOS'}
                        colorText={0} textValue={'Avanzado'}/>
                    <ShowItem size={'col-sm-3'} styleBoxIcon={{marginLeft:'10px', width:'40%', marginBottom:'10px', background:'#3B5998'}} 
                        styleIcon={{fontSize:'60px', marginTop:'10px', textAlign:'center'}} icon={<FaCss3/>} title={'CSS3'} 
                        styleBeforeValue={{marginLeft:'-20px', marginTop:'30px', width:'50%'}}
                        styleValue={{fontSize:'30px', marginTop:'10px'}} value={'3 AÑOS'}
                        colorText={0} textValue={'Avanzado'}/>
                    <ShowItem size={'col-sm-3'} styleBoxIcon={{marginLeft:'10px', width:'40%', marginBottom:'10px', background:'#F65314'}} 
                        styleIcon={{fontSize:'60px', marginTop:'10px', textAlign:'center'}} icon={<FaHtml5/>} title={'HTML5'} 
                        styleBeforeValue={{marginLeft:'-20px', marginTop:'30px', width:'50%'}}
                        styleValue={{fontSize:'30px', marginTop:'10px'}} value={'3 AÑOS'}
                        colorText={0} textValue={'Avanzado'}/>

                    <ShowItem size={'col-sm-3'} styleBoxIcon={{marginLeft:'10px', width:'40%', marginBottom:'10px', background:'#00A1F1'}} 
                        styleIcon={{fontSize:'60px', marginTop:'10px', textAlign:'center'}} icon={<FaReact/>} title={'ReactJs'} 
                        styleBeforeValue={{marginLeft:'-20px', marginTop:'30px', width:'50%'}}
                        styleValue={{fontSize:'30px', marginTop:'10px'}} value={'3 AÑOS'}
                        colorText={0} textValue={'Avanzado'}/>
                    <ShowItem size={'col-sm-3'} styleBoxIcon={{marginLeft:'10px', width:'40%', marginBottom:'10px', background:'black'}} 
                        styleIcon={{fontSize:'60px', marginTop:'10px', textAlign:'center'}} icon={<FaGithubSquare/>} title={'GITHUB'} 
                        styleBeforeValue={{marginLeft:'-20px', marginTop:'30px', width:'50%'}}
                        styleValue={{fontSize:'30px', marginTop:'10px'}} value={'3 AÑOS'}
                        colorText={0} textValue={'Intermedio'}/>
                    <ShowItem size={'col-sm-3'} styleBoxIcon={{marginLeft:'10px', width:'40%', marginBottom:'10px', background:'#ffcc00'}} 
                        styleIcon={{fontSize:'60px', marginTop:'10px', textAlign:'center'}} icon={<FaJs/>} title={'JAVASCRIPT'} 
                        styleBeforeValue={{marginLeft:'-20px', marginTop:'30px', width:'50%'}}
                        styleValue={{fontSize:'30px', marginTop:'10px'}} value={'3 AÑOS'}
                        colorText={0} textValue={'Avanzado'}/>
                    <ShowItem size={'col-sm-3'} styleBoxIcon={{marginLeft:'10px', width:'40%', marginBottom:'10px', background:'#8000ff'}} 
                        styleIcon={{fontSize:'60px', marginTop:'10px', textAlign:'center'}} icon={<FaBootstrap/>} title={'BOOTSTRAP'} 
                        styleBeforeValue={{marginLeft:'-20px', marginTop:'30px', width:'50%'}}
                        styleValue={{fontSize:'30px', marginTop:'10px'}} value={'3 AÑOS'}
                        colorText={0} textValue={'Avanzado'}/>

                    <ShowItem size={'col-sm-3'} styleBoxIcon={{marginLeft:'10px', width:'40%', marginBottom:'10px', background:'#ff4db8'}} 
                        styleIcon={{fontSize:'80px', textAlign:'center'}} icon={<FaSass/>} title={''} 
                        styleBeforeValue={{marginLeft:'-20px', marginTop:'30px', width:'50%'}}
                        styleValue={{fontSize:'30px', marginTop:'10px'}} value={'1 AÑOS'}
                        colorText={0} textValue={'Intermedio'}/>
                    <ShowItem size={'col-sm-3'} styleBoxIcon={{marginLeft:'10px', width:'40%', marginBottom:'10px', background:'#3333ff'}} 
                        styleIcon={{fontSize:'80px', textAlign:'center'}} icon={<SiMysql/>} title={''} 
                        styleBeforeValue={{marginLeft:'-20px', marginTop:'30px', width:'50%'}}
                        styleValue={{fontSize:'30px', marginTop:'10px'}} value={'3 AÑOS'}
                        colorText={0} textValue={'Avanzado'}/>
                    <ShowItem size={'col-sm-3'} styleBoxIcon={{marginLeft:'10px', width:'40%', marginBottom:'10px', background:'#009973'}} 
                        styleIcon={{fontSize:'60px', marginTop:'10px', textAlign:'center'}} icon={<SiArduino/>} title={'ARDUINO'} 
                        styleBeforeValue={{marginLeft:'-20px', marginTop:'30px', width:'50%'}}
                        styleValue={{fontSize:'30px', marginTop:'10px'}} value={'5 AÑOS'}
                        colorText={0} textValue={'Avanzado'}/>
                    <ShowItem size={'col-sm-3'} styleBoxIcon={{marginLeft:'10px', width:'40%', marginBottom:'10px', background:'#ff0000'}} 
                        styleIcon={{fontSize:'60px', marginTop:'10px', textAlign:'center'}} icon={<SiAngular/>} title={'ANGULAR'} 
                        styleBeforeValue={{marginLeft:'-20px', marginTop:'30px', width:'50%'}}
                        styleValue={{fontSize:'30px', marginTop:'10px'}} value={'2 AÑOS'}
                        colorText={0} textValue={'Intermedio'}/>
                    
                    <ShowItem size={'col-sm-3'} styleBoxIcon={{marginLeft:'10px', width:'40%', marginBottom:'10px', background:'#000099'}} 
                        styleIcon={{fontSize:'80px', textAlign:'center'}} icon={<SiLess/>} title={''} 
                        styleBeforeValue={{marginLeft:'-20px', marginTop:'30px', width:'50%'}}
                        styleValue={{fontSize:'30px', marginTop:'10px'}} value={'1 AÑOS'}
                        colorText={0} textValue={'Intermedio'}/>
                    <ShowItem size={'col-sm-3'} styleBoxIcon={{marginLeft:'10px', width:'40%', marginBottom:'10px', background:'#000080'}} 
                        styleIcon={{fontSize:'60px', marginTop:'10px', textAlign:'center'}} icon={<SiTypescript/>} title={'TYPESCRIPT'} 
                        styleBeforeValue={{marginLeft:'-20px', marginTop:'30px', width:'50%'}}
                        styleValue={{fontSize:'30px', marginTop:'10px'}} value={'2 AÑOS'}
                        colorText={0} textValue={'Intermedio'}/>
                    <ShowItem size={'col-sm-3'} styleBoxIcon={{marginLeft:'10px', width:'40%', marginBottom:'10px', background:'Orange'}} 
                        styleIcon={{fontSize:'80px', textAlign:'center'}} icon={<SiLabview/>} title={''} 
                        styleBeforeValue={{marginLeft:'-20px', marginTop:'30px', width:'50%'}}
                        styleValue={{fontSize:'30px', marginTop:'10px'}} value={'4 AÑOS'}
                        colorText={0} textValue={'Intermedio'}/>
                    
                    <ShowItem size={'col-sm-3'} styleBoxIcon={{marginLeft:'10px', width:'40%', marginBottom:'10px', background:'#34A853'}} 
                        styleIcon={{fontSize:'60px', marginTop:'10px', textAlign:'center'}} icon={<SiSiemens/>} title={'TIA PORTAL'} 
                        styleBeforeValue={{marginLeft:'-20px', marginTop:'30px', width:'50%'}}
                        styleValue={{fontSize:'30px', marginTop:'10px'}} value={'4 AÑOS'}
                        colorText={0} textValue={'Intermedio'}/>
                    <ShowItem size={'col-sm-3'} styleBoxIcon={{marginLeft:'10px', width:'40%', marginBottom:'10px', background:'#E50914'}} 
                        styleIcon={{fontSize:'60px', marginTop:'10px', textAlign:'center'}} icon={<SiMitsubishi/>} title={'PLC'} 
                        styleBeforeValue={{marginLeft:'-20px', marginTop:'30px', width:'50%'}}
                        styleValue={{fontSize:'30px', marginTop:'10px'}} value={'2 AÑOS'}
                        colorText={0} textValue={'Intermedio'}/>
                </div>
                <WhatsAppWidget phoneNumber='573008850830' textReplyTime="" companyName="HABLAR CON DAVID" sendButton="Enviar" message='¿En que te puedo ayudar?'/>
                <Footer/>
            </form>
        </div>
    );
}
export default SkillsProcess;
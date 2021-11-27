import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './css/App.css'
import Footer from './Footer.jsx'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
const HomeProcess = () => {
    return(
        <div className="Home">
            <form className="container-fluid" onSubmit={(e) => e.preventDefault()}>
                <WhatsAppWidget phoneNumber='573008850830' textReplyTime="" companyName="HABLAR CON DAVID" sendButton="Enviar" message='¿En que te puedo ayudar?'/>
                <Footer/>
            </form>
        </div>
    );
}
export default HomeProcess;
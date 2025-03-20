import React, { useState } from "react";

import { ContactValue, SendEmailURL } from "./data/data.jsx"; 
import "./Contact.css";

const Contact = props => {
    const [submitted, setSubmitted] = useState(false);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        const formData = new FormData(form);
        const response = await fetch(SendEmailURL, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            setSubmitted(true);
            form.reset();
        }
    };

    return (
        <div id="contact" className="contact">
            <h2>{props.translations[props.language]['contacto_titulo']}</h2>
            {submitted ? (
                <p className="success-message">
                    {props.translations[props.language]['enviado']}
                </p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder={props.translations[props.language]['nombre_placeholder']} 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder={props.translations[props.language]['email_placeholder']} 
                        required 
                    />
                    <textarea 
                        name="message" 
                        placeholder={props.translations[props.language]['mensaje_placeholder']} 
                        required></textarea>
                    <button type="submit">
                        {props.translations[props.language]['enviar']}
                    </button>
                </form>
            )}
            
            <div className="links-container">
                {ContactValue.map((dato) => <div className="links-item">
                    <a className="links-contact" href={dato.text} target="_blank" rel="noreferrer" >
                        {dato.icon}
                    </a>
                </div>
                )}
            </div>
        </div>
    );
};

export default Contact;
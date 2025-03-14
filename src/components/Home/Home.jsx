import React from "react";
import "./Home.css";

const Home = props => {
    return (
        <div id="home" className="home">
            <h1>{props.translations[props.language]['descripcion']}</h1>
            <h3>{props.translations[props.language]['lema']}</h3>
            <h3 className="cursive">{props.translations[props.language]['mensaje']}</h3>
        </div>
    );
};

export default Home;
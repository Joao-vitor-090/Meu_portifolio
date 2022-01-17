import React, { Component } from "react";

import html from "./IMG/logo-html-5-256.png";
import css from "./IMG/logo-css-3-256.png";
import JS from "./IMG/logo-javascript-icon-256.png";
import react from "./IMG/logo-react-256.png";
import php from "./IMG/logo-php-256.png";
import python from "./IMG/logo-python-256.png";
import mysql from "./IMG/mysql-256.png";
import postgresql from "./IMG/postgresql-256.png";

import "./style/tec.css"


class Tec extends Component { 
    render(){
        return(
        <div className="Tecnologias">
                    <h1>Tecnologias</h1>
                <div className="Fileiras">
                    <div className="dupla">
                        <div className="Logo">
                            <img src = {html}/>
                            <label>html</label>
                        </div>
                        <div className="Logo">
                            <img src = {css}/>
                            <label>CSS3</label>
                        </div>
                     </div>
                     <div className="dupla">
                        <div className="Logo">
                            <img src = {JS}/>
                            <label>JavaScript</label>
                        </div>
                        <div className="Logo">
                            <img src = {react}/>
                            <label>React</label>
                        </div>
                     </div>
                     <div className="dupla">
                        <div className="Logo">
                            <img src = {python}/>
                            <label>Python</label>
                        </div>
                        <div className="Logo">
                            <img src = {php}/>
                            <label>PHP</label>
                        </div>
                     </div>
                     <div className="dupla">
                        <div className="Logo">
                            <img src = {mysql} />
                            <label>MySQL</label>
                        </div>
                        <div className="Logo">
                            <img src = {postgresql} className="postgre"/>
                            <label>PostgreSQL</label>
                        </div>
                     </div>
                </div>
        </div>
        );
    }
}
export default Tec;
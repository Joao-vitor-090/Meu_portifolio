import React, {Component} from "react";
import image from "./IMG/felon 236x410.png";
import "./style/estilo.css";
import Sobre from "./sobre";
import Tec from "./Tec";

class Main extends Component{
    render(){
        return(
            <div className="Pagina-principal">
                <div className="inicio">
                
                    <div className="Texto-apresentação">
                        <p>
                        Olá, bem vindxs ao meu portfólio! Aqui você vai conhecer um pouco mais de quem é João Vitor e a paixão dele.
                        </p>
                
                    </div>
                    <div className="Pintura">
                    <img src = {image}/>
                    </div>
                </div>
                <div className="Sobre">
                <Sobre></Sobre>
                </div>
                <Tec></Tec>
            </div>
        );
    }
}
export default Main;
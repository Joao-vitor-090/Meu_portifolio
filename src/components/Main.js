import React, {Component} from "react";
import image from "./IMG/felon 236x410.png";
import "./style/estilo.css";
import Sobre from "./sobre";
import Tec from "./Tec";
import Footer from "./Footer";
import Experience from "./Experience.tsx";


class Main extends Component{
 

    render(){
   /*      var content = ' Olá, bem vindos ao meu portfólio! Aqui você vai conhecer um pouco mais de quem é João Vitor e a paixão dele.';
        const text = document.querySelector('.text');
        const speed = 190;
        const cont = 0; 
        function typeWriter(){
            if(cont < content.length){
                text.textContent += content.charAt(cont);
                cont++
                setTimeout(typeWriter, speed);
            }else{
                text.textContent = ''; 
                cont = 0;
                typeWriter();
            }
        }
        const funcy = typeWriter(); */
        return(
            <div className="Pagina-principal">
                <div className="inicio">
                
                    <div className="Texto-apresentação">

                        <p className="text">
                        Olá, bem vindos ao meu portfólio! Aqui você vai conhecer um pouco mais de quem é João Vitor e a paixão dele.
                        </p>
                
                    </div>
                    <div className="Pintura">
                    <img src = {image}/>
                    </div>
                </div>
                <div className="Sobre">
                <Sobre></Sobre>
                </div>
                <div>
                    <Experience></Experience>
                </div>
                <Tec></Tec>
                <div className="FooterImport">
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}
export default Main;
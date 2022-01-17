import React, { Component } from "react";
import "./style/estilo.css"


class Navtop extends Component{ 
    render(){
        return(
            <div className="Container">
               
                <div className="Nome">
                    João Vitor
                </div>
                <div className="Redes-Sociais">
                    {/*Whatsapp*/}                   
                <a href="https://wa.me/+5521964826064?text=Olá,vamos%20bater%20um%20papo?" target="_blank"><img src="https://img.icons8.com/clouds/50/000000/whatsapp.png"/></a>
                {/*Instagram*/}
                <a href="https://www.instagram.com/joao_felon/"><img src="https://img.icons8.com/clouds/50/000000/instagram-new--v3.png"/></a>
                {/*Número de Celular*/}
                <a href="tel:021964826064"><img src="https://img.icons8.com/clouds/50/000000/apple-phone.png"/></a>
                {/* Email*/}
                <a href="mailto:olibeira88@hotmail.com?Subject=Olá,quero%20entrar%20em%20contato"><img src="https://img.icons8.com/clouds/50/000000/find-email.png"/></a>
                {/*Linkedin*/}
                <a href="https://www.linkedin.com/in/joao-vitor-ferreira090/"><img src="https://img.icons8.com/clouds/50/000000/linkedin.png"/></a>
                {/*GitHub*/}
                <a href="https://github.com/Joao-vitor-090"> <img src="https://img.icons8.com/clouds/50/000000/github.png"/> </a>
                </div>
            </div>
        );
    }
}
export default Navtop;
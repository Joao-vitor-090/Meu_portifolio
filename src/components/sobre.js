import React, { Component} from "react";
import "./style/sobre.css"

class Sobre extends Component {
    render(){
        return(
            <div className="Pagina-sobre">
                <h1>Sobre</h1>
                <article>
                    <p>
                        Meu nome é João Vitor de Oliveira Ferreira, Nasci em Nova iguaçu e resido aqui até hoje. Minha tragetória com a tecnologia se iniciou desde bem cedo, porém estou à desenvolvendo agora.
                        No momento estou estágiando com Web Designer e tenho o conhecimento de algumas tecnologias. Sendo elas HTML5,CSS3,JavaScript em Nível intermediário e PHP, Python, MySQL, PostgreSQL,GIT Microsoft Azure e React em Nível Básico. Baixe o meu currículo abaixo.
                    </p>
                </article>
                <a href="https://drive.google.com/file/d/1MJ6_uN-f7acUYLDYS0R7Mz9HGOFa-vrd/view?usp=sharing" >
                    <button >
                        Baixar aqui
                    </button>
                </a>
            </div>
        );
    }
}
export default Sobre;
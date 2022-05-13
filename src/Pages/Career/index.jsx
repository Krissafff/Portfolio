import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Carreira(){

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, [])

    return(
        <div className="container carreira">
        <div className="row">
            <div className="grid-6" data-aos="fade-down">
              <h2 className="color-gradient" id="Sobre">Minha carreira...</h2>
              <p>Sempre pronto para um novo desafio, trabalhei como desenvolvedor front-end na SanPaolo,
                onde atuei na criação dos designs e dos códigos dos sites da empresa.
                A experiência adquirida nesse projeto me levou a ter mais agilidade na entrega das 
                demandas, aprendendo a trabalhar sobre pressão com deadlines apertados.
                 A partir daí, comecei a fazer projetos como free-lancer, desenvolvendo sites, 
                 aplicativos e UI designs.
              </p>

                <a href="#Projeto" className="btn-secundary mt-4">Ver trabalhos</a>
            </div>

            <div className="grid-6 card-habilidade mt-5" data-aos="fade-up">
                <ul className="lista">
                    <li className="linha"><p>React.Js</p></li>
                    <li className="linha mt-1"><p>UI/UX DESIGN</p></li>
                    <li className="linha mt-1"><p>HTML/CSS</p></li>
                    <li className="linha mt-1"><p>React Native</p></li>
                    <li className="linha mt-1"><p>Sass</p></li>
                    <li className="linha mt-1"><p>Firebase</p></li>
                    <li className="linha mt-1"><p>JavaScript</p></li>
                    <li className="linha mt-1"><p>BootStrap</p></li>
                </ul>
            </div>
        </div>
    </div>
    );
}
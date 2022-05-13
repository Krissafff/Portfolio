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
                    <li className="linha">React.Js</li>
                    <li className="linha mt-1">UI/UX DESIGN</li>
                    <li className="linha mt-1">HTML/CSS</li>
                    <li className="linha mt-1">React Native</li>
                    <li className="linha mt-1">Sass</li>
                    <li className="linha mt-1">Firebase</li>
                    <li className="linha mt-1">JavaScript</li>
                    <li className="linha mt-1">BootStrap</li>
                </ul>
            </div>
        </div>
    </div>
    );
}
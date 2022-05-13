import React, {useEffect} from 'react';

import Perfil from '../../img/Perfil2.jpeg';
import Fundo from '../../svg/Component1.svg';
import Aos from 'aos';
import "aos/dist/aos.css";


export default function Home(){

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
    return(
     <div className="container">
        <div className="row">
          <div className="img-fundo">
            <img src={Fundo} alt="" width="100%" />
          </div>

        <div className="grid-6 p-0" data-aos="fade-right">
              <img src={Perfil} alt="" className="img-perfil" />
        </div>

        <div className="grid-6 mt-9">
         <div className="texto-principal" data-aos="fade-left">
            <h1 className="color-gradient titulo">Olá, Bem vindo!</h1>
            <h5 className="color-black">Sou um Dev.Front-end alimentado por uma paixão de projetar produtos atraentes, tenho
               um profundo desejo de me destacar e melhorar continuamente em meu trabalho. 
               Saiba mais sobre minha jornada abaixo.</h5>
        </div>
      </div>

        </div>
    </div>

   
    
    );
}
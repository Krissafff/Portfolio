import React, {useEffect} from 'react';

import Aos from 'aos';
import "aos/dist/aos.css";

import git from '../../img/github.png';
import instagram from '../../img/instagram.png';
import linkedin from '../../img/linkedin.png'


export default function Footer(){

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])


    return(
        <footer>
        <div className="grid-12" data-aos="fade-right">

        <div class="wrapper flex-start-row">
        <a href='https://github.com/Krissafff' target="_blank"><img className="card-icon"  src={git} alt=""/></a>
          <a href='https://www.instagram.com/henrique_r74/' target="_blank"><img className="card-icon" src={instagram} alt=""/></a>
          <a href='https://www.linkedin.com/in/henrique-rodrigues-1937451a4/' target="_blank"><img className="card-icon" src={linkedin} alt=""/></a>
          <p className="text-center">Copyright © 2022 Henrique Rodrigues.Todos direitos reservados.</p>

        </div>
          
        </div>
        </footer>
    );
}
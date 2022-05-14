import React, {useEffect} from 'react';

import Aos from 'aos';
import "aos/dist/aos.css";

import card1 from '../../img/js.png';
import card2 from '../../img/react.png';
import card3 from '../../img/github.png';
import principal from '../../img/project.png';

import pg1 from '../../img/site-oficina.png';
import pg2 from '../../img/site-atendimento.png';
import pg3 from '../../img/site-nubank.png';
import pg4 from '../../img/site-blog.png';






export default function Project() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

    return(
        <div class="container">
        <div class="row">

        <div class="grid-8" >
        <h1 class="color-gradient tipo-projeto" id="Projeto" >Projetos</h1>

          <a href="https://site-oficina-fortaleza.vercel.app/" target="_blank"><img src={pg1} alt="" class="img-projeto"/></a>
          <a href="https://sistema-de-chaamdos.vercel.app/dashboard" target="_blank"><img src={pg2} alt="" class="img-projeto"/></a>
          <br/>
          <a href="https://nubank-beta.vercel.app/" target="_blank"><img src={pg3} alt="" class="img-projeto"/></a>
          <a href="https://site-blog-two.vercel.app/" target="_blank"><img src={pg4} alt="" class="img-projeto"/></a>
          <a href="https://github.com/Krissafff?tab=repositories" class="btn-project" target="_blank"><strong class="color-gradient">+</strong> Veja mais</a>
        </div>
  
      <div class="grid-4 flex-start-row" data-aos="fade-left">
              <div class="flex-center flex-item-4 div-card">
                <img src={card2} class="icon-react dropshadow" loading="lazy" onload="SVGInject(this)" />
                <img src={card1} class="icon-js dropshadow" loading="lazy"
                    onload="SVGInject(this)" />
                <img src={card3} class="icon-github dropshadow" loading="lazy"
                    onload="SVGInject(this)" />
                <img src={principal} alt="" class="img-project"/>
                </div>    
      </div>
  
    </div>
  </div>
    );
}
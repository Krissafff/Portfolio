import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

import certificado1 from '../../certificados/Certificado1.jpg';
import certificado2 from '../../certificados/certificado2.jpg';
import certificado3 from '../../certificados/certificado3.jpg';
import certificado4 from '../../certificados/certificado4.jpg';
import certificado5 from '../../certificados/certificado5.png';
import certificado6 from '../../certificados/certificado6.png';
import certificado7 from '../../certificados/certificado7.png';
import certificado8 from '../../certificados/certificado8.png';
import certificado9 from '../../certificados/certificado9.png';
import certificado10 from '../../certificados/certificado10.png';
import certificado11 from '../../certificados/certificado11.png';
import certificado12 from '../../certificados/certificado12.png';
import certificado13 from '../../certificados/certificado13.png';
import certificado14 from '../../certificados/certificado16.png';
import certificado15 from '../../certificados/certificado17.png';
import certificado16 from '../../certificados/certificado18.png';


export default function Certificate(){

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, [])


    return(
        <div class="bg-gray"> 
        <div class="container ">
            <div class="row">
    
                <div class="grid-6" data-aos="fade-left">
                    <h1 class="color-gradient">Certificados</h1>
                    <ul class="lista">
                        <li class="linha"><strong class="color-gradient">+</strong> Alura</li>
                        <hr/>
                        <li class="linha"><strong class="color-gradient">+</strong> Udemy</li>
                        <hr/>
                        <li class="linha"><strong class="color-gradient">+</strong> FrontPush</li>
                        <hr/>
                        <li class="linha"><strong class="color-gradient">+</strong> Sujeito Programador</li>
                        <hr/>
                        <li class="linha"><strong class="color-gradient">+</strong> Rocketseat</li>
                        <hr/>
                    </ul>
                    
                </div>

                <div class="grid-6 galeria" data-aos="fade-left">
                 
                    <img src={certificado1} alt="" width="250px"/>                 
                    <img src={certificado5} alt="" width="250px"/>
                    <img src={certificado12} alt="" width="250px"/>
                    <img src={certificado3} alt="" width="250px"/>
                  
                  
                </div>
    
            </div>
        </div>
    </div>
    );
}
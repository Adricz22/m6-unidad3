import '../../src/styles/components/pages/Servicios.css'
import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Image1 from '../imagen/saludo.png';
import Image2 from '../imagen/ventosas.png';
import Image3 from '../imagen/materiales.png';

const Servicios = () => {

    useEffect(() => {
        AOS.init();
    })

    return (
        <div className="servicios">
            <div data-aos="fade-right" data-aos-duration="1000" >
                <img className="borde" src={Image1} />
                <br /><br />
                <div className="sal text1">* ATENCIÓN PERSONALIZADA A EMPRESAS, PROFESIONALES Y PARTICULARES *</div>
            </div>
            <div data-aos="flip-left" data-aos-duration="1500" data-aos-easing="ease-out-linear">
                <img className="borde" src={Image2} />
                <br /><br />
                <div className="sal text1">* COLOCACIÓN DE CARPINTERÍA DE ALUMINIO Y CRISTALES *</div>
            </div>
            <div data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="1000">
                <img className="borde" src={Image3} />
                <br /><br />
                <div className="sal text1">* LOS MATERIALES QUE UTILIZAMOS ESTÁN GARANTIZADOS  *</div>
            </div>

        </div>
    );
};

export default Servicios;
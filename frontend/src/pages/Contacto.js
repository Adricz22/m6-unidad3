import '../styles/components/pages/Contacto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faKeyboard, faUserAlt } from '@fortawesome/free-solid-svg-icons'

const Contacto = (props) => {
    return (
        <div className='contenedor'>

            <div className='contacto'>
                <div>
                    <h3>Contacto</h3>
                    <p>
                        Envianos tus dudas, consultas y/o sugerencias completando el siguiente formulario.
                        Nuestro equipo le responderá a la brevedad.
                    </p>
                </div>
                <form class="formulario">
                    <div class="input-contenedor">
                        <FontAwesomeIcon className='icon' icon={faUserAlt} />
                        <input type="text" placeholder="Nombre" />
                    </div>

                    <div class="input-contenedor">
                        <FontAwesomeIcon className='icon' icon={faEnvelope} />
                        <input type="text" placeholder="Email" />
                    </div>

                    <div class="input-contenedor">
                        <FontAwesomeIcon className='icon' icon={faPhoneAlt} />
                        <input type="text" placeholder="Telefono" />
                    </div>

                    <div class="input-contenedor">
                        <textarea className="text" placeholder='Mensaje' ></textarea>
                    </div>

                    <input type="submit" value="Enviar" class="button" />
                </form>
            </div>

            <div className="">
                <h3>Otras vías de contacto</h3>
                <p>Tambien se pueden comunicar con nosotros...</p>
                <ul>
                    <li>Telefono: 4275-0523</li>
                    <li>Email:ventas@aberturasch.com.ar</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                </ul>
            </div>

        </div>

    )
}
export default Contacto;
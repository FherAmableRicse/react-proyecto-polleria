import imagen from "../assets/img/Pollo_Picom_Contactenos.png";
import '../../src/styles/css/Contactenos.css'
import Swal from "sweetalert2";
import { useState } from "react";

const Contactenos = () => {

    const contactForm = document.getElementById('formContact');

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');

    const enviar = (e) => {
        e.preventDefault();

        let message = '';
        let error = false;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!isNaN(nombre)) {
            message += `El nombre no es válido <br> `;
            error = true;
        }

        if (!isNaN(apellido)) {
            message += `El apellido no es válido <br> `;
            error = true;
        }

        if (!regexEmail.test(email)) {
            message += `El email no es válido <br> `;
            error = true;
        }

        if (isNaN(celular) || celular.toString().length < 9 || celular.toString().length > 9) {
            message += `El celular no es válido <br> `;
            error = true;
        }

        if (error) {
            if (window.screen.width > 854) {
                Swal.fire({
                    icon: 'error',
                    html: message,
                    width: '35rem',
                })
            }
            else if (window.screen.width < 854) {
                Swal.fire({
                    icon: 'error',
                    html: message,
                    width: '22rem',
                })
            }

        }
        else {
            if (window.screen.width > 854) {
                Swal.fire({
                    icon: 'success',
                    title: 'Tus datos han sido enviados',
                    showConfirmButton: false,
                    timer: 2500,
                    width: '35rem',

                })
                contactForm.reset();
            }
            else if (window.screen.width < 854) {
                Swal.fire({
                    icon: 'success',
                    title: 'Tus datos han sido enviados',
                    showConfirmButton: false,
                    timer: 2500,
                    width: '22rem'
                })
                contactForm.reset();
            }

        }
    };

    return (
        <section className="contact" id="contacto">
            <div className="contact__container">
                <h2 className="contact__title">CONTÁCTENOS</h2>
                <form action="" id="formContact" className="contact__form"
                    onSubmit={enviar}
                >
                    <div className="contact__form-inputs">
                        <input id="name" className="contact__form-item" type="text" placeholder="Nombre"
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <input id="apellido" className="contact__form-item" type="text" placeholder="Apellido"
                            onChange={(e) => setApellido(e.target.value)}
                        />
                        <input id="email" className="contact__form-item" type="email" placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input id="celular" className="contact__form-item" type="text" placeholder="Celular"
                            onChange={(e) => setCelular(e.target.value)}
                        />
                        <textarea id="area" className="contact__form-item conctact__form-item--area"
                            placeholder="Escribenos..."></textarea>
                        <div className="contact__form-button-container">
                            <button type="submit" className="contact__form-button">Enviar</button>
                        </div>
                    </div>
                    <figure className="contact__form-image-container">
                        <img className="contact__form-image" src={imagen} alt="Logo Contacto" />
                    </figure>
                </form>
            </div>
        </section>
    );
}

export default Contactenos;
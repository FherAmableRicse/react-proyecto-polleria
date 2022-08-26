import axios from 'axios';
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';

const NewPassword = () => {
    const params = useParams();
   // const { id } = params;
   const id="123"
    //console.log(params)
    //console.log(id)
    
    //const [validToken, setValidToken] = useState(false);
    const [passwordChanged, setPasswordChanged] = useState(false);
    const [passwords, setPasswords] = useState({
        password: '',
        repeatedPassword: ''
      });
    const { password, repeatedPassword } = passwords;

    const handleChange = (e) => {
        setPasswords({
          ...passwords,
          [e.target.name]: e.target.value
        });
      };
    const handleSubtmit = async (e) => {
    e.preventDefault();
    if ([password, repeatedPassword].includes('')) {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Todos los campos son obligatorios',
            showConfirmButton: false,
            timer: 1500
        })
    } else if (password !== repeatedPassword) {
        Swal.fire({
            position: 'top',
            icon: 'warning',
            title: 'Las contraseñas no coinciden',
            showConfirmButton: false,
            timer: 1500
        })
    } else if (password.length < 6) {
        Swal.fire({
            position: 'top',
            icon: 'warning',
            title: 'El password debe contener al menos 6 caracteres',
            showConfirmButton: false,
            timer: 1500
        })
    } else {
        try {
        const urlNewPassword = `http://localhost:5000/usuario/new-password/${id}`;
        await axios.post(urlNewPassword,{password:password})
        
        setPasswords({
            password: '',
            repeatedPassword: ''
        });
        //console.log(data.message)
        // setAlert({
        //     message: data.message,
        //     error: false
        // });
        setPasswordChanged(true);
        } catch (error) {
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
            setPasswords({
                password: '',
                repeatedPassword: ''
            });

        // setAlert({
        //     message: error.response.data.message,
        //     error: true
        // });
        }
    }
    };
    return(
    <>
    <div className="container-fluid">
          <div className ="row">
          <div className="col-md-6 mx-auto p-0">
              <div className="card bg-transparent">
      <div className="login-box">
          <div className="login-snip ">
          <div className="logo-container">
              <img
            src="https://i.postimg.cc/pLgmgMDd/logo.png"
            alt="Logo Pollería PICOM"
            className="logo"
          />
          </div>
              <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked/><label htmlFor="tab-1" className="tab"></label>
              <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab">Nueva Contraseña</label>
              <div className="login-space">
             
                  <div className="login">
                      <div className="group">
                          <label className="label">Contraseña</label>
                          <input 
                          type="password" 
                          className="input" 
                          data-type="password" 
                          placeholder="Nueva contraseña"
                          name="password"
                          value={password}
                          onChange={handleChange}
                          required/>
                      </div>
                      <div className="group">
                          <label className="label">Repetir contraseña</label>
                          <input 
                          type="password" 
                          className="input" 
                          data-type="password" 
                          placeholder="Repite tu contraseña" 
                          name="repeatedPassword"
                          value={repeatedPassword}
                          onChange={handleChange}
                          required/>
                      </div>
                      <div className="group">
                          <input type="submit" className="button" value="Reestablecer" 
                          onClick={handleSubtmit}
                          />
                      </div>

                      {
                        passwordChanged
                        && 
                        <Link
                        to="/login"
                        className="button"
                        >
                        Iniciar Sesión
                        </Link>
                      }
                  </div>
              </div>
          </div>
      </div>   
      </div>
      </div>
      </div>
      </div>
    </>
    );
}

export default NewPassword
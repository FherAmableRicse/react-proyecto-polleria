import axios from 'axios';
import React, { useState } from 'react'

import Swal from 'sweetalert2';

const RecoverPassword = () => {

    const urlRecoverPassword = "http://localhost:5000/usuario/recover-password";

    const [correo, setCorreo] = useState('');

    const handleSubtmit = async (e) => {
        e.preventDefault();
        if (correo.trim() === '') {
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Email Obligatorio',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
          try {
           
            await axios.post(urlRecoverPassword,{correo:correo})
            .then(response=>
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: response.data.message,
                    showConfirmButton: false,
                    timer: 1500
                })
               )
               setCorreo('');
        
            //console.log(data.message)
           
          } catch (error) {
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
           
          }
        }
      };
    return (
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
                  <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked/><label htmlFor="tab-1" className="tab">RECUPERAR CONTRASEÑA</label>
                  <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab"></label>
                  <div className="login-space">
                      <div className="login">
                          <div className="group">
                              <label className="label">Email</label>
                              <input 
                              type="email" 
                              className="input"  
                              placeholder="Email"
                              value={correo}
                              onChange={e => setCorreo(e.target.value)}
                              required/>
                          </div>
                          <div className="group">
                              <input 
                              type="submit" 
                              className="button" 
                              value="Recuperar" 
                              onClick={handleSubtmit}
                              />
                          </div>
                          <div className="hr"></div>
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

export default RecoverPassword
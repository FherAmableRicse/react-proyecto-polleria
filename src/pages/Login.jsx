import "../styles/css/Login.css";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const urlUsuario = "http://localhost:5000/usuario";
const urlAuth = "http://localhost:5000/auth";
const urlPedidos = "http://localhost:5000/pedidos";

const Login = () => {
    const navigate = useNavigate();
    const [formLogIn, setFormLogIn] = useState({
        usuario: "",
        password: ""
    });
    const [formRegister, setFormRegister] = useState({
        nuevoUsuario: "",
        nuevoPassword: "",
        confirmPassword:"",
        correo: ""
    });

    const { usuario,password } = formLogIn;
    const { nuevoUsuario,nuevoPassword,confirmPassword,correo } = formRegister;

    const handleChangeLogIn = async (e) => {
       await setFormLogIn({
          ...formLogIn,
          [e.target.name]: e.target.value
        })
    };

    const handleChangeRegister = async (e) => {
        await setFormRegister({
            ...formRegister,
            [e.target.name]: e.target.value
        });
    };

    const ingresar = async (e) => {
        e.preventDefault();
        try {
            if(usuario.trim() === '' && password.trim()===''){
                Swal.fire({
                    position: 'top',
                    icon: 'warning',
                    title: 'Ingrese usuario y contraseña',
                    showConfirmButton: false,
                    timer: 1500
                })
                return;
            }
            if(usuario.trim() === ''){
                Swal.fire({
                    position: 'top',
                    icon: 'warning',
                    title: 'Ingrese usuario',
                    showConfirmButton: false,
                    timer: 1500
                })
                return;
            }
            if(password.trim() === ''){
                Swal.fire({
                    position: 'top',
                    icon: 'warning',
                    title: 'Ingrese contraseña',
                    showConfirmButton: false,
                    timer: 1500
                })
                return;
            }
            await axios.post(urlAuth,{usuario: usuario,password:password})
                .then(response=>{
                    console.log(response.data);
                    //localStorage.setItem('token',);
                    navigate('/pedidos');
                })
        }catch(error){
            console.log(error);
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Usuario o contraseña invalidos',
                showConfirmButton: false,
                timer: 1500
            })
        } 
    }

    const registrar = async (e) => {
        e.preventDefault();
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        try {
            if(nuevoUsuario.trim() === '' || nuevoPassword.trim()===''  || confirmPassword.trim()==='' || correo.trim()===''){
                Swal.fire({
                    position: 'top',
                    icon: 'warning',
                    title: 'Llenar todos los campos',
                    showConfirmButton: false,
                    timer: 1500
                })
                return;
            }
            if(nuevoPassword !== confirmPassword){
                Swal.fire({
                    position: 'top',
                    icon: 'warning',
                    title: 'Las contraseñas no coinciden',
                    showConfirmButton: false,
                    timer: 1500
                })
                return;
            }
            if(!reg.test(correo)){
                Swal.fire({
                    position: 'top',
                    icon: 'warning',
                    title: 'Correo no valido',
                    showConfirmButton: false,
                    timer: 1500
                })
                return;
            }

            await axios.post(urlUsuario,{usuario: nuevoUsuario,password:nuevoPassword,correo:correo})
                .then(response=>{
                    console.log(response.data)
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: 'Se creo el usuario',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setFormRegister({
                        nuevoUsuario: "",
                        nuevoPassword: "",
                        confirmPassword: "",
                        correo: ""
                    });
                })
        } catch (error) {
            console.log(error);
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'El usuario ya existe',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

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
                <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked/><label htmlFor="tab-1" className="tab">Inicia Sesión</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab">Registrate</label>
                <div className="login-space">
                    <div className="login">
                        <div className="group">
                            <label className="label">Usuario</label>
                            <input 
                            type="text" 
                            className="input"  
                            placeholder="Ingresa tu usuario"
                            name="usuario"
                            value={usuario}
                            onChange={handleChangeLogIn}
                            required/>
                        </div>
                        <div className="group">
                            <label className="label">Contraseña</label>
                            <input 
                            type="password" 
                            className="input" 
                            data-type="password" 
                            placeholder="Ingresa tu contraseña"
                            name="password"
                            value={password}
                            onChange={handleChangeLogIn}
                            required/>
                        </div>
                        <div className="group">
                            <input type="submit" className="button" value="Ingresar" onClick={ingresar}/>
                        </div>
                        <div className="hr"></div>
                        <div className="foot">
                            <a className="lostPassword" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">¿Olvidaste tu contraseña?</a>
    
                        </div>
                    </div>
                    <div className="sign-up-form">
                        <div className="group">
                            <label className="label">Usuario</label>
                            <input 
                            type="text" 
                            className="input" 
                            placeholder="Crea tu usuario"
                            name="nuevoUsuario"
                            value={nuevoUsuario}
                            onChange={handleChangeRegister}
                            required/>
                        </div>
                        <div className="group">
                            <label className="label">Contraseña</label>
                            <input 
                            type="password" 
                            className="input" 
                            data-type="password" 
                            placeholder="Crea tu contraseña"
                            name="nuevoPassword"
                            value={nuevoPassword}
                            onChange={handleChangeRegister}
                            required/>
                        </div>
                        <div className="group">
                            <label className="label">Repetir contraseña</label>
                            <input 
                            type="password" 
                            className="input" 
                            data-type="password" 
                            placeholder="Repite tu contraseña" 
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleChangeRegister}
                            required/>
                        </div>
                        <div className="group">
                            <label className="label">Correo</label>
                            <input 
                            type="text" 
                            className="input" 
                            placeholder="Ingresa tu correo"
                            name="correo"
                            value={correo}
                            onChange={handleChangeRegister}
                            required/>
                        </div>
                        <div className="group">
                            <input type="submit" className="button" value="REGISTRAR" onClick={registrar}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
        </div>
        </div>
        </div>
        </div>
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header bg-danger">
                    <h5 className="modal-title" id="exampleModalLabel">¿Olvido su contraseña? No se preocupe</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                    <div className="mb-3">
                        <label className="col-form-label text-dark">Ingrese la dirección de correo electrónico asociada con su cuenta. Le enviaremos un correo electrónico para restablecer su contraseña.</label>
                        <input type="text" className="form-control" placeholder="Ingrese su correo aquí"/>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Enviar Mensaje</button>
                </div>
                </div>
            </div>
        </div>
      </>
    );
  };
  
  export default Login;
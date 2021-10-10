import React from "react";
import {Switch} from "react-router-dom";
import './Login.css';
const logo = require("../Assets/lock.svg");

function Login(props){
    return (
    <Switch>
        <div className="mainContainerLogin">
        
            <div className="container" id="container">
                <div className="form-container sign-in-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <img alt={"idIcon"} src={require("../Assets/escudo_UP.svg").default} />
                            <h1>Bienvenido</h1>
                            <p>Ingresa tu nombre de usuario y contraseña</p>
                        </div>
                    </div>
                </div>

                <div className="overlay-container">
                    <form action="#">
                        <h2>Inicia Sesión</h2>
                        <div className="idIcon">
                            <input type="email" placeholder="Usuario"/>
                            <img alt={"idIcon"} src={require("../Assets/usuario-de-perfil.svg").default} />
                        </div>
                        <div className="idIcon">
                            <input type="password" placeholder="Contraseña" />
                            <img alt={"lockIcon"} src={require("../Assets/lock.svg").default} />
                        </div>
                        <button onClick={props.changeLog}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    </Switch>
    );
  }

  export default Login;
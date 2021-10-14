import React from "react";
import './Login.css';

function Login(props){
    return (
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
                        <div className="hidden">
                            <img alt={"idIcon"} src={require("../Assets/escudo_UP2.svg").default} />
                            <h2>Bienvenido</h2>
                            <p>Ingresa tu nombre de usuario y contraseña</p>
                        </div>
                        <h1>Inicia Sesión</h1>
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
    );
  }

  export default Login;
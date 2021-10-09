import React from "react";
import {Switch} from "react-router-dom";
import './Login.css';
function Login(props){
    return (
    <Switch>
        <div className="mainContainerLogin">
        
            <div className="container" id="container">
                <div className="form-container sign-in-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1>Bienvenido<sup>[ING]</sup></h1>
                            <p>Ingresa tu nombre de usuario y contraseña</p>
                            <img alt={"Logo Panteras"} src={"src/Components/Assets/logoup.gif"}/>
                        </div>
                    </div>
                </div>

                <div className="overlay-container">
                    <form action="#">
                        <img src={("../Assets/businessman.svg")}/>
                        <div className="idIcon">
                            <input type="email" placeholder="Usuario"/>
                            <img alt={"idIcon"} />
                        </div>
                        <div className="idIcon">
                            <input type="password" placeholder="Contraseña" />
                            <img alt={"lockIcon"} src={("../Assets/lock.svg")} />
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
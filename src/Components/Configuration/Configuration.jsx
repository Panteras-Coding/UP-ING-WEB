import React from "react";
import "./Configuration.css"

export default function Configuration() {
    return(
        <div className="main">
            <div className="ajustes-box">
                <div className="container-config">
                <h1>Ajustes</h1>
                    <div className="btn">                
                        <p>&ensp;<i className="fas fa-key"></i>&emsp;Cambio de contraseña</p>
                    </div>
                    <div className="btn"><p>&ensp;<i className="far fa-question-circle"></i>&emsp;Ayuda</p></div>
                    <div className="btn"><p>&ensp;<i className="fas fa-sign-out-alt"></i>&emsp;Cerrar sesión</p></div>
                    <div className="btn"><p>&ensp;<i className="fas fa-wrench"></i>&emsp;Creditos y desarrolladores</p></div>
                    <div className="btn"><p>&ensp;<i className="fas fa-exclamation-circle"></i>&emsp;Aviso de privacidad y contacto</p></div>
                </div>
            </div>
        </div>
    );
}
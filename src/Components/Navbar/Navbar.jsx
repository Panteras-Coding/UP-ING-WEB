import React from "react";
import "./Navbar.css"
import {Link} from "react-router-dom";

export default function Navbar() {
    return(
        <div className="navContent">
            <Link to="/">
                <img alt={"inicioIcon"} src={require("../Assets/Inicio.svg").default} />
            </Link>
            <Link to="/messages">
                <img alt={"chatIcon"} src={require("../Assets/Chat.svg").default} />
            </Link>
            <Link to="/notifications">
                <img alt={"notificacionesIcon"} src={require("../Assets/Notificaciones.svg").default} />
            </Link>
            <Link to="/upload">
                <img alt={"compartirIcon"} src={require("../Assets/Compartir.svg").default} />
            </Link>
            <Link to="/calendar">
                <img alt={"calendarioIcon"} src={require("../Assets/Calendario_blanco.svg").default} />
            </Link>
            <Link to="/configuration">
                <img alt={"engraneIcon"} src={require("../Assets/Engrane.svg").default} />
            </Link>
        </div>
    );
}
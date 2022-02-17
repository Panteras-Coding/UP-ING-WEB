import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <>
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
            <nav className="navBarResponsive">
                <button onClick={handleToggle}>{navbarOpen ? <img src={require("../Assets/close.svg").default} /> : <img src={require("../Assets/menu.svg").default} />}</button>

                <div className={navbarOpen ? "open" : "close"}>
                    <Link to="/">
                        <img alt={"inicioIcon"} src={require("../Assets/Inicio.svg").default} />
                        Home
                    </Link>
                    <Link to="/messages">
                        <img alt={"chatIcon"} src={require("../Assets/Chat.svg").default} />
                        Mensajes
                    </Link>
                    <Link to="/notifications">
                        <img alt={"notificacionesIcon"} src={require("../Assets/Notificaciones.svg").default} />
                        Notificationes
                    </Link>
                    <Link to="/upload">
                        <img alt={"compartirIcon"} src={require("../Assets/Compartir.svg").default} />
                        Upload
                    </Link>
                    <Link to="/calendar">
                        <img alt={"calendarioIcon"} src={require("../Assets/Calendario_blanco.svg").default} />
                        Calendario
                    </Link>
                    <Link to="/configuration">
                        <img alt={"engraneIcon"} src={require("../Assets/Engrane.svg").default} />
                        Ajustes
                    </Link>
                </div>
            </nav>
        </>
    );
}
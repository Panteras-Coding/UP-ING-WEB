import React from "react";
import "./Calendar.css"

export default function Calendar() {
    return (
        <div className="main-calendar">
            <div className="calendar-box">
                <div className="container-calendar">
                    <h1>Calendario</h1>
                    <form>
                        <div className="calendar">
                            <section className="calendar-section">
                                <div className="subsection">
                                    <h4>Semestre</h4> <select className="styled-select"><option>Primavera - 1</option></select>
                                </div>
                            </section>
                            <section className="calendar-section">
                                <div className="subsection">
                                    <p>Inicio</p>
                                    <select className="styled-select"><option>01</option></select>
                                    <select className="styled-select"><option>01 </option></select>
                                    <select className="styled-select"><option>2020</option></select>
                                </div>
                                <div className="subsection">
                                    <p>Fin</p>
                                    <select className="styled-select"><option>01</option></select>
                                    <select className="styled-select"><option>01 </option></select>
                                    <select className="styled-select"><option>2020</option></select>
                                </div>
                            </section>
                            <section className="calendar-section">
                                <div className="subsection">
                                    <h4>Período de exámenes ordinarios</h4>
                                </div>
                            </section>
                            <section className="calendar-section">
                                <div className="subsection">
                                    <p>De</p>
                                    <select className="styled-select"><option>01</option></select>
                                    <select className="styled-select"><option>01 </option></select>
                                    <select className="styled-select"><option>2020</option></select>
                                </div>
                                <div className="subsection">
                                    <p>A</p>
                                    <select className="styled-select"><option>01</option></select>
                                    <select className="styled-select"><option>01 </option></select>
                                    <select className="styled-select"><option>2020</option></select>
                                </div>
                            </section>
                            <section className="calendar-section">
                                <div className="subsection">
                                    <h4>Período de Exámenes Parcial 1</h4>
                                </div>
                            </section>
                            <section className="calendar-section">
                                <div className="subsection">
                                    <p>De</p>
                                    <select className="styled-select"><option>01</option></select>
                                    <select className="styled-select"><option>01 </option></select>
                                    <select className="styled-select"><option>2020</option></select>
                                </div>
                                <div className="subsection">
                                    <p>A</p>
                                    <select className="styled-select"><option>01</option></select>
                                    <select className="styled-select"><option>01 </option></select>
                                    <select className="styled-select"><option>2020</option></select>
                                </div>
                            </section>
                            <section className="calendar-section">
                                <div className="subsection">
                                    <h4>Período de Exámenes Parcial 2</h4>
                                </div>
                            </section>
                            <section className="calendar-section">
                                <div className="subsection">
                                    <p>De</p>
                                    <select className="styled-select"><option>01</option></select>
                                    <select className="styled-select"><option>01 </option></select>
                                    <select className="styled-select"><option>2020</option></select>
                                </div>
                                <div className="subsection">
                                    <p>A</p>
                                    <select className="styled-select"><option>01</option></select>
                                    <select className="styled-select"><option>01 </option></select>
                                    <select className="styled-select"><option>2020</option></select>
                                </div>
                            </section>
                            <section className="calendar-section">
                                <div className="subsection">
                                    <h4>Período de exámenes extraordinarios</h4>
                                </div>
                            </section>
                            <section className="calendar-section">
                                <div className="subsection">
                                    <p>De</p>
                                    <select className="styled-select"><option>01</option></select>
                                    <select className="styled-select"><option>01 </option></select>
                                    <select className="styled-select"><option>2020</option></select>
                                </div>
                                <div className="subsection">
                                    <p>A</p>
                                    <select className="styled-select"><option>01</option></select>
                                    <select className="styled-select"><option>01 </option></select>
                                    <select className="styled-select"><option>2020</option></select>
                                </div>
                            </section>
                            <section className="calendar-asueto">
                                <h4>Días de asueto</h4>
                            </section>
                            <section className="calendar-section">
                                <div className="subsection">
                                    <select className="styled-select"><option>01</option></select>
                                    <select className="styled-select"><option>01 </option></select>
                                    <select className="styled-select"><option>2020</option></select>
                                </div>
                                <div className="subsection">
                                    <select className="styled-select"><option>01</option></select>
                                    <select className="styled-select"><option>01 </option></select>
                                    <select className="styled-select"><option>2020</option></select>
                                </div>
                            </section>
                            <section className="calendar-section">
                                <div className="subsection">
                                    <select className="styled-select"><option>01</option></select>
                                    <select className="styled-select"><option>01 </option></select>
                                    <select className="styled-select"><option>2020</option></select>
                                </div>
                                <div className="subsection">
                                    <select className="styled-select"><option>01</option></select>
                                    <select className="styled-select"><option>01 </option></select>
                                    <select className="styled-select"><option>2020</option></select>
                                </div>
                            </section>
                            <section className="calendar-section">
                                <div className="subsection">
                                    <select className="styled-select"><option>01</option></select>
                                    <select className="styled-select"><option>01 </option></select>
                                    <select className="styled-select"><option>2020</option></select>
                                </div>
                                <div className="subsection">
                                    <select className="styled-select"><option>01</option></select>
                                    <select className="styled-select"><option>01 </option></select>
                                    <select className="styled-select"><option>2020</option></select>
                                </div>
                            </section>
                        </div>
                    </form>
                </div>
            </div>

            <div className="calendar-left">
                <div className="referencias">
                    <ul>
                        <li>
                            <img alt={"poligono"} src={require("../Assets/li1.svg").default} />
                            Inicio de Clases</li>
                        <li>                             
                            <img alt={"poligono"} src={require("../Assets/li2.svg").default} />
                            Exámenes Parciales</li>
                        <li>                             
                            <img alt={"poligono"} src={require("../Assets/li3.svg").default} />
                            Exámenes Ordinarios</li>
                        <li>                            
                            <img alt={"poligono"} src={require("../Assets/li4.svg").default} />
                            Exámenes Extraordinarios</li>
                        <li>                            
                            <img alt={"poligono"} src={require("../Assets/li5.svg").default} />
                            Asueto</li>
                        <li>                            
                            <img alt={"poligono"} src={require("../Assets/li6.svg").default} />
                            Vacaciones</li>
                        <li>                            
                            <img alt={"poligono"} src={require("../Assets/li7.svg").default} />
                            Último día de clases</li>
                        <li>                            
                            <img alt={"poligono"} src={require("../Assets/li8.svg").default} />
                            Curso de Verano</li>
                    </ul>
                </div>
                <button>Vista Previa</button>
            </div>
        </div>
    );
}


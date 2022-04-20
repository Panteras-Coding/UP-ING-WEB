import React, { useState } from "react";
import "./Calendar.css"

export default function Calendar() {
    const [diasAsueto, setDiasAsueto] = useState([{
        "day": "01",
        "month": "Enero",
        "year": "2020"
    }]);

    const [monthOptions, setMonthOptions] = useState(['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']);
    const [yearOptions, setYearOptions] = useState([2022, 2023, 2024, 2025]);

    const [month, setMonth] = useState("1");
    const [year, setYear] = useState(yearOptions[0]);


    const [showForm, setShowForm] = useState(false);

    const daysInMonth = (month, year) => {
        let cantDays = new Date(year, month, 0).getDate();
        return Array.from(Array(cantDays).keys())
    }

    const [dayOptions, setDayOptions] = useState(daysInMonth(month, year));
    const [day, setDay] = useState(dayOptions[0]+1);

    const agregarDiaAsueto = (day, month, year) => {
        setDiasAsueto([...diasAsueto, { "day": day, "month": monthOptions[month], "year": year }])
        setDay(dayOptions[0]+1)
        setShowForm(false);
    }

    return (
        <div className="main-calendar">
            <div className="calendar-box">
                <div className="container-calendar">
                    <h1>Calendario</h1>
                    <form>
                        <div className="calendar">
                            <section className="calendar-section">
                                <div className="subsection">
                                    <h4>Semestre</h4> <input type="text"/>
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
                            <section>
                                {diasAsueto.map(fecha => {
                                    return (
                                        <div>
                                            <select className="styled-select"><option value={fecha.day}>{fecha.day}</option></select>
                                            <select className="styled-select"><option value={fecha.month}>{fecha.month} </option></select>
                                            <select className="styled-select"><option value={fecha.year}>{fecha.year}</option></select>
                                        </div>
    
                                    )
                                }
                                )}
                                {showForm &&
                                    <div>
                                        <select className="styled-select" onChange={e => setDay(e.target.value)}>{dayOptions.map(day => <option value={day + 1}>{day + 1}</option>)}</select>
                                        <select className="styled-select" onChange={e => { if (year) { setMonth(e.target.value); setDayOptions(daysInMonth(month, year)); setDay(dayOptions[0]+1) } }}>{monthOptions.map((month, index) => <option value={index + 1}>{month} </option>)}</select>
                                        <select className="styled-select" onChange={e => setYear(e.target.value)}>{yearOptions.map(year => <option value={year}>{year} </option>)}</select>
                                    </div>
                                }<br></br>
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{showForm && <button className="form-asueto" onClick={() => {setShowForm(false)}}>Cancelar</button>
                                }
                               &nbsp;&nbsp;<button className="form-asueto" onClick={() => { !showForm ? setShowForm(true) : agregarDiaAsueto(day, month, year) }}>{showForm ? "Agregar" : "+"}</button>
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


import React, { useState } from "react";
import "./Calendar.css"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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

    const agregarDiaAsueto = () => {
        setDiasAsueto([...diasAsueto, { "day": day, "month": monthOptions[month], "year": year }])
        setDay(dayOptions[0]+1)
        setShowForm(false);
    }
    const quitarDiaAsueto = () => {
        setShowForm(false);
    }
  const [selectedDate, setSelectedDate]=useState(new Date());
  
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
                                    <div className="picker">
                                    <DatePicker id="d"  selected={selectedDate} onChange={date=>setSelectedDate(date)}/>
                                    </div>
                                </div>
                                <div className="subsection">
                                    <p>Fin</p>
                                    <DatePicker id="d"  selected={selectedDate} onChange={date=>setSelectedDate(date)}/>
                                </div>
                            </section>
                            <section className="calendar-section">
                                <div className="subsection">
                                    <h4>Per??odo de ex??menes ordinarios</h4>
                                </div>
                            </section>
                            <section className="calendar-section">
                                <div className="subsection">
                                    <p>De</p>
                                    <DatePicker id="d"  selected={selectedDate} onChange={date=>setSelectedDate(date)}/>
                                </div>
                                <div className="subsection">
                                    <p>A</p>
                                    <DatePicker id="d"  selected={selectedDate} onChange={date=>setSelectedDate(date)}/>
                                </div>
                            </section>
                            <section className="calendar-section">
                                <div className="subsection">
                                    <h4>Per??odo de Ex??menes Parcial 1</h4>
                                </div>
                            </section>
                            <section className="calendar-section">
                                <div className="subsection">
                                    <p>De</p>
                                    <DatePicker id="d"  selected={selectedDate} onChange={date=>setSelectedDate(date)}/>
                                </div>
                                <div className="subsection">
                                    <p>A</p>
                                    <DatePicker id="d"  selected={selectedDate} onChange={date=>setSelectedDate(date)}/>
                                </div>
                            </section>
                            <section className="calendar-section">
                                <div className="subsection">
                                    <h4>Per??odo de Ex??menes Parcial 2</h4>
                                </div>
                            </section>
                            <section className="calendar-section">
                                <div className="subsection">
                                    <p>De</p>
                                    <DatePicker id="d"  selected={selectedDate} onChange={date=>setSelectedDate(date)}/>
                                </div>
                                <div className="subsection">
                                    <p>A</p>
                                    <DatePicker id="d"  selected={selectedDate} onChange={date=>setSelectedDate(date)}/>
                                </div>
                            </section>
                            <section className="calendar-section">
                                <div className="subsection">
                                    <h4>Per??odo de ex??menes extraordinarios</h4>
                                </div>
                            </section>
                            <section className="calendar-section">
                                <div className="subsection">
                                    <p>De</p>
                                    <DatePicker id="d"  selected={selectedDate} onChange={date=>setSelectedDate(date)}/>
                                </div>
                                <div className="subsection">
                                    <p>A</p>
                                    <DatePicker id="d"  selected={selectedDate} onChange={date=>setSelectedDate(date)}/>
                                </div>
                            </section>
                            <section className="calendar-asueto">
                                <h4>D??as de asueto</h4>
                            </section>
                            <section>
                                {diasAsueto.map(fecha => {
                                    return (
                                        <div>
                                             <DatePicker id="d"  selected={selectedDate} onChange={date=>setSelectedDate(date)}/>
                                        </div>
    
                                    )
                                }
                                )}
                                {showForm &&
                                    <div>
                                         <DatePicker id="d"  selected={selectedDate} onChange={date=>setSelectedDate(date)}/>
                                    </div>
                                }<br></br>
                               <button id="containerbutton"className="form-asueto" onClick={() => { agregarDiaAsueto() }}>{ " - " }</button>
                               <button id="containerbutton"className="form-asueto" onClick={() => { agregarDiaAsueto() }}>{ "+" }</button>
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
                            Ex??menes Parciales</li>
                        <li>
                            <img alt={"poligono"} src={require("../Assets/li3.svg").default} />
                            Ex??menes Ordinarios</li>
                        <li>
                            <img alt={"poligono"} src={require("../Assets/li4.svg").default} />
                            Ex??menes Extraordinarios</li>
                        <li>
                            <img alt={"poligono"} src={require("../Assets/li5.svg").default} />
                            Asueto</li>
                        <li>
                            <img alt={"poligono"} src={require("../Assets/li6.svg").default} />
                            Vacaciones</li>
                        <li>
                            <img alt={"poligono"} src={require("../Assets/li7.svg").default} />
                            ??ltimo d??a de clases</li>
                        <li>
                            <img alt={"poligono"} src={require("../Assets/li8.svg").default} />
                            Curso de Verano</li>
                    </ul>
                </div>
                <button>Subir Calendario</button>
            </div>
        </div>
    );
}


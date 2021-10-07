import React from "react";
import "./Navbar.css"
import {Link} from "react-router-dom";

export default function Navbar() {
    return(
        <div className="navContent">
            <Link to="/"><span><i className="fas fa-home"></i></span></Link>
            <Link to="/messages"><span><i className="far fa-comment"></i></span></Link>
            <Link to="/notifications"><span><i className="far fa-bell"></i></span></Link>
            <Link to="/upload"><span><i className="fas fa-upload"></i></span></Link>
            <Link to="/calendar"><span><i className="far fa-calendar-alt"></i></span></Link>
            <Link to="/configuration"><span><i className="fas fa-cog"></i></span></Link>
        </div>
    );
}
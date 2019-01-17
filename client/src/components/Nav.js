import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
    return(
        <div className="header sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark pl-0 mb-1">
                <a className="navbar-brand" href="/">Books</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Search</Link>
                    <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>Saved</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
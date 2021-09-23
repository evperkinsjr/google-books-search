import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Google Books</a>
            <div className="navbar-nav">
                <a classname="nav-item nav-link" href="/">Search</a>
                <a classname="nav-item nav-link" href="/saved">Saved</a>
            </div>
        </nav>
    );
}

export default Nav;
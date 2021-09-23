import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Google Books</a>
            <div className="navbar-right">
                <a className="navbar-brand" href="/">Search</a>
                <a className="navbar-brand" href="/saved">Saved</a>
            </div>
        </nav>
    );
}

export default Nav;
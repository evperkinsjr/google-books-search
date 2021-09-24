import React from "react";

function Button({ id, type, className, children, onClick}) {
    return (
        <button id={id} onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
            {children}
        </button>
    );
}

export default Button;
import React from "react";

function Button({ id, type, size, className, children, onClick}) {
    return (
        <button id={id} onClick={onClick} className={["btn", `btn-${size}`, `btn-${type}`, className].join(" ")}>
            {children}
        </button>
    );
}

export default Button;
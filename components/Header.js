import React from "react";

export default function({handleToggleDarkMode}){
    return (
        <div className="header">
            <h1>Notes-App</h1>
            <button onClick={handleToggleDarkMode} className="toggle">
                Dark Mode</button>
        </div>
    );
}
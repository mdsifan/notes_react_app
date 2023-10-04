import React from "react";
import {MdDeleteForever} from "react-icons/md";
export default function({id,text,date,handleDeleteNote}){
    return (
        <div className = "notes">
            <span>{text}</span>
            <div className = "notes-footer">
                <small>{date}</small>
                <MdDeleteForever onClick={()=>handleDeleteNote(id)} className ="delete-icon" size="1.3em"/>
            </div>
        </div>
    );
}
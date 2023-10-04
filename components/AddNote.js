import React from "react";

export default function({handleAddNote}){
    const [noteText,setNoteText] = React.useState('');
    const characterLimit = 200;
    function handleChange(event){
        if(characterLimit-event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
    }

    function handleSaveClick(){
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText('');
        }
        else{
            alert('Please type and then try to save');
        }
    }
    
    return (
        <div className="notes add-note">
            <textarea onChange={handleChange} rows="8" cols="10" placeholder="Type here!" value={noteText}></textarea>
            <div className="notes-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );

}
import React from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import { nanoid } from "nanoid";

function App() {

  const [notes,setNotes]=React.useState(JSON.parse(localStorage.getItem('react-notes-app-data'))||[]);

// {
//       id:nanoid(),
//       text:"First Note !",
//       date:"09/07/2023"
//     },
//     {
//       id:nanoid(),
//       text:"Second Note !",
//       date:"10/07/2023"
//     },
//     {
//       id:nanoid(),
//       text:"Third Note !",
//       date:"11/07/2023"
//     },
//     {
//       id:nanoid(),
//       text:"Fourth Note !",
//       date:"12/07/2023"
//     },


const [searchText,setSearchText]=React.useState('');

const [darkMode,setDarkMode]=React.useState(false);


// React.useEffect(()=>{
//   const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
//   if(savedNotes){
//     setNotes(savedNotes);
//   }
// },[])

React.useEffect(()=>{
  localStorage.setItem(
            'react-notes-app-data',
            JSON.stringify(notes)
            );
},[notes]);

function addNote(text){
  const date = new Date();
  const newNote={
    id:nanoid(),
    text:text,
    date:date.toLocaleDateString()
  }
  const newNotes=[...notes,newNote];
  setNotes(newNotes);
}

function deleteNote(id){
const newNotes =  notes.filter((note)=>note.id !== id);
setNotes(newNotes);
}



function handleSearchChange(event){
  setSearchText(event.target.value);
}


function handleToggleDarkMode(){
  setDarkMode((prevMode)=>!prevMode);
}
  return (
    <div className={`${darkMode && "darkmode"}`}>
      <div className="container">
      <Header handleToggleDarkMode={handleToggleDarkMode}/>
      <Search handleSearchChange={handleSearchChange}/>
      <NotesList 
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText.toLowerCase())
            )} 
            handleAddNote={addNote}
            handleDeleteNote = {deleteNote}
      />
      </div>
    </div>
  );
}

export default App;

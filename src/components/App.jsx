import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

// import notes from "../notes";

function App(){
  const defaultNote = {
    title: "Delegation",
    content:
      "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
  };
  const [notes, setNotes] = useState([defaultNote]);

  function addNote(newNote){
    setNotes(prev => [...prev, newNote]);
  }

  function deleteNote(id){
    setNotes(prev => prev.filter((note, index) => index !== id));
  }

  return (
      <div>
          <Header />
          <CreateArea addNote={addNote} />
          {notes.map((note, index) => <Note key={index} id={index} title={note.title} content= {note.content} deleteNote={deleteNote} />)}
          <Footer />
      </div>
  );
}

export default App;

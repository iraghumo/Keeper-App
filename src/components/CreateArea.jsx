import React, {useState} from 'react';

function CreateArea(props){
  const emptyNote = {
    title: "",
    content: ""
  };
  const [note, setNote] = useState(emptyNote);

  function handleChange(event){
    const {name, value} = event.target;
    setNote(prev => {
      return{
        ...prev,
        [name] : value
      }
    });
  }

  function submitNote(event){
    props.addNote(note);
    setNote(emptyNote);
    event.preventDefault();
  }

  return(
    <div>
      <form onSubmit={submitNote}>
        <input type="text" name="title" placeholder="Title" value={note.title} onChange={handleChange} />
        <textarea name="content" placeholder="Take a note .." rows="3" value={note.content} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

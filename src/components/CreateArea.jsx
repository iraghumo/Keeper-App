import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props){
  const emptyNote = {
    title: "",
    content: ""
  };
  const [note, setNote] = useState(emptyNote);
  const [isExpanded, setExpanded] = useState(false);

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

  function handleFocus(){
    setExpanded(true);
  }

  return(
    <div>
      <form onSubmit={submitNote} className="create-note">
        {isExpanded ? <input type="text" name="title" placeholder="Title" value={note.title} onChange={handleChange} autoComplete="off" /> : null}
        <textarea name="content" placeholder="Take a note .." rows={isExpanded ? 3 : 1} value={note.content} onChange={handleChange} onFocus={handleFocus} />
        <Zoom in={isExpanded}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

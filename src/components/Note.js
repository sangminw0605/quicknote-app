import { ListItem, ListItemText } from "@material-ui/core";

function Note(props) {
  const { note } = props;

  return (
    <ListItem>
      <ListItemText primary={note.title} secondary={note.text} />
    </ListItem>
  );
}

export default Note;

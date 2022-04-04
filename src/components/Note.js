import React, { Component } from "react";
import { Collapse, List, ListItem, ListItemText, ListItemIcon, Button } from "@material-ui/core";
import { ExpandLess, ExpandMore, Delete } from "@material-ui/icons";

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleClick = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        const { note } = this.props;
        const { note, deleteNote } = this.props;
        const { open } = this.state;

        return (
            <>
                <ListItem>
                    <ListItemIcon onClick={this.handleClick}>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                    <ListItemText primary={note.title} />
                    <ListItemIcon>
                        <Button onClick={() => deleteNote(note)}>
                            <Delete />
                        </Button>
                    </ListItemIcon>
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemText secondary={note.text} />
                    </List>
                </Collapse>
            </>
        );
    }


    deleteNote = (note) => {
        this.setState((state) => {
            return {
                notes: state.notes.filter((n) => n.id !== note.id),
            };
        });
    };

}

export default Note;

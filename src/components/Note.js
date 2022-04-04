import React, { Component } from "react";
import { Link } from "react-router-dom";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { Collapse, List, ListItem, ListItemText, ListItemIcon, Button } from "@material-ui/core";
import { ExpandLess, ExpandMore, Delete } from "@material-ui/icons";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";



class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
        };
    }



    deleteNote = (note) => {
        this.setState((state) => {
            return {
                notes: state.notes.filter((n) => n.id !== note.id),
            };
        });
    };

    handleClick = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
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
                        <ListItemIcon>
                            <Link
                                to={{
                                    pathname: "/edit",
                                    search: `?id=${note.id}`,
                                    state: { title: note.title, text: note.text, id: note.id },
                                }}
                            >
                                <Button>
                                    Edit
                                </Button>
                            </Link>
                        </ListItemIcon>

                        <Button onClick={() => deleteNote(note)}>
                            <Delete />
                        </Button>
                    </ListItemIcon>
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemText
                            disableTypography
                            primary={
                                <Box mx={4}>
                                    <Paper elevation={4}>
                                        <Box p={4}>
                                            <ReactMarkdown
                                                children={note.text}
                                                remarkPlugins={[remarkGfm]}
                                            />
                                        </Box>
                                    </Paper>
                                </Box>
                            }
                        />
                    </List>

                </Collapse>
            </>
        );
    }
}

export default Note;

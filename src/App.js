import React, { Component } from "react";
import { Container } from "@material-ui/core";
import DisplayNotes from "./pages/DisplayNotes";
import AddNote from "./pages/AddNote";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [ /* Data not shown to save space */ ],
    };
  }

  deleteNote = (note) => {
    this.setState((state) => {
      return {
        notes: state.notes.filter((n) => n.id !== note.id),
      };
    });
  };

  render() {
    const { notes } = this.state;
    return (
      <Container>
        <DisplayNotes notes={notes} deleteNote={this.deleteNote} />
        <AddNote />
      </Container>
    );
  }
}

export default App;

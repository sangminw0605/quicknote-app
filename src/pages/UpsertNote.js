import React, { Component } from "react";
import { FormControl, TextField, Button } from "@material-ui/core";
import { withRouter } from "react-router";

class UpsertNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
    };
  }

  updateTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  updateText = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    this.props.upsertNote(this.state);
    this.props.history.push("/");
  };

  handleCancel = (event) => {
    event.preventDefault();
    this.props.history.push("/");
  };

  render() {
    console.log(this.props);
    return (
      <form>
        <FormControl fullWidth>
          <TextField
            label="Title"
            variant="outlined"
            value={this.state.title}
            onChange={this.updateTitle}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Text"
            multiline
            rows={4}
            variant="outlined"
            value={this.state.text}
            onChange={this.updateText}
          />
        </FormControl>
        <div>
          <Button type="button" color="secondary" onClick={this.handleCancel}>
            Cancel
          </Button>
          <Button type="submit" color="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

export default withRouter(UpsertNote);

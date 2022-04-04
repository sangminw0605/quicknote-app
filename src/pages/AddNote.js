import { FormControl, TextField, Button } from "@material-ui/core";
import { withRouter } from "react-router";


function AddNote(props) {
    const { history } = props;


    const handleCancel = (event) => {
        event.preventDefault();
        history.push("/");

    }

    return (
        <form>
            <FormControl fullWidth>
                <TextField label="Title" variant="outlined" />
            </FormControl>
            <FormControl fullWidth>
                <TextField label="Text" multiline rows={4} variant="outlined" />
            </FormControl>
            <div>
                <Button type="button" color="secondary" onClick={handleCancel}>
                    Cancel
                </Button>
                <Button type="submit" color="primary">
                    Submit
                </Button>
            </div>
        </form>
    );
}

export default withRouter(AddNote);

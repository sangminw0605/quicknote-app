import { FormControl, TextField, Button } from "@material-ui/core";

function AddNote(props) {
    const { changePage } = props;

    const handleCancel = (event) => {
        event.preventDefault();
        changePage();
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
                <Button type="button" color="secondary">
                    Cancel
                </Button>
                <Button type="submit" color="primary">
                    Submit
                </Button>
            </div>
        </form>
    );
}

export default AddNote;

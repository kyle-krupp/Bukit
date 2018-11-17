import React from "react";
import "./NewNote.css";
import { Button, Icon } from "react-materialize";

class NewNote extends React.Component {
    state = {
        note: ""
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <textarea
                    name="note"
                    value={this.state.note}
                    onChange={this.handleInputChange}
                    rows="10"
                    col="5"
                    placeholder="Write a new note..."
                >
                </textarea>
                <Button waves='light' onClick={() => console.log(`Note: ${this.state.note}`)}>Add New Note<Icon right>send</Icon></Button>
            </div>
        );
    }

}

export default NewNote;
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Modal, Button, Input, Row, Icon } from "react-materialize";

class NewCity extends React.Component {
    state = {
        city: "",
        visited: false
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
            <Modal
                header='Add a New City to Your List'
                trigger={<Button floating large className='blue' waves='light' icon='add' />}>
                <Row>
                    <Input
                        name="city"
                        value={this.state.city}
                        onChange={this.handleInputChange}
                        s={6}
                        label="City Name"
                    />
                    {/* <Input
                        name="stateName"
                        value={this.state.stateName}
                        onChange={this.handleInputChange}
                        s={6}
                        label="State Name"
                    /> */}
                </Row>
                Have you visited this city before?
                <Row>
                    <Input
                        name='visited'
                        type='checkbox'
                        value={this.state.visited}
                        onChange={this.handleInputChange}
                        label='Already Visited' />
                </Row>
                <Button waves='light' onClick={() => console.log(`${this.state.cityN}, Visited: ${this.state.visited}`)}>Add City to List<Icon right>send</Icon></Button>
            </Modal>
        );
    }
}

export default NewCity;
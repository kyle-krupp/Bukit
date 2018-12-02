import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import "./List.css";
import { Button, Collapsible, CollapsibleItem, Icon, Modal, Row, Input } from "react-materialize";
import NewNote from "../NewNote";
import News from "./News";
import Weather from "./Weather";



const List = props => {

        return (
            <div>
                {props.user.locations.length === 0 ? `You do not currently have any cities on your list.` :
                    <Collapsible popout>
                        {props.user.locations.map(item => {
                            return (
                                <CollapsibleItem key={item.city} header={item.city} icon={item.visited ? 'check_box' : 'check_box_outline_blank'}>
                                    <h4>Here's some info on <b>New York City!</b></h4>
                                    {item.visited ? `You have visited ${item.city}!` : `You have not visited New York City yet!`}
                                    <ul>
                                        <li><h5>Weather <Icon small>wb_sunny</Icon></h5></li>
                                        <div><Weather city={item.city} /></div>
                                        <li><h5>Local News <Icon small>web</Icon></h5></li>
                                        <div><News city={item.city} /></div>
                                    </ul>
                                    {/* {item.notes.length === 0 ? `You do not currently have any notes.` : item.notes.map(note => {
                                        return (<p key={note}>{note}</p>)
                                    })} */}
                                    <NewNote />
                                    <hr></hr>
                                    <Button waves='light' onClick={() => console.log('remove city')}>Remove City<Icon right>delete</Icon></Button>
                                </CollapsibleItem>
                            );
                        })}
                    </Collapsible>
                }
                <Button floating large className='blue' waves='light' icon='add' />
                {/* <Modal
                header='Add a New City to Your List'
                trigger={<Button floating large className='red' waves='light' icon='add' />}>
                <Row>
                    <Input
                        name="city"
                        value="A new city"
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
                {/* </Row>
                Have you visited this city before?
                <Row>
                    <Input
                        name='visited'
                        type='checkbox'
                        value= {false}
                        onChange={this.handleInputChange}
                        label='Already Visited' />
                </Row>
                <Button waves='light' onClick={() => console.log(`${this.state.cityN}, Visited: ${this.state.visited}`)}>Add City to List<Icon right>send</Icon></Button>
            </Modal> */}
            </div>
        )
};


export default List;

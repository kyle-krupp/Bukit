import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import "./List.css";
import { Button, Collapsible, CollapsibleItem, Icon } from "react-materialize";
import NewNote from "../NewNote";
import News from "./News"



const List = props => {

        return (
            <div>
                <p>Hi!</p>
                
                {props.user.locations.length === 0 ? `You do not currently have any cities on your list.` :
                    <Collapsible popout>
                        {props.user.locations.map(item => {
                            return (
                                <CollapsibleItem key={item.city} header={item.city} icon={item.visited ? 'check_box' : 'check_box_outline_blank'}>
                                    <h5>Here's some info on {item.city}!</h5>
                                    {item.visited ? `You have visited ${item.city}!` : `You have not visited ${item.city} yet!`}
                                    <ul>
                                        <li>Weather:</li>
                                        <li><h4>Local News:</h4></li>
                                        <div><News city={item.city} /></div>
                                    </ul>
                                    {/* {item.notes.length === 0 ? `You do not currently have any notes.` : item.notes.map(note => {
                                        return (<p key={note}>{note}</p>)
                                    })} */}
                                    <NewNote />
                                    <Button waves='light' onClick={() => console.log('remove city')}>Remove City<Icon right>delete</Icon></Button>
                                </CollapsibleItem>
                            );
                        })}
                    </Collapsible>
                }
            </div>
        )
};


export default List;

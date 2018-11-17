import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import "./List.css";
import { Collapsible, CollapsibleItem } from "react-materialize";


const List = props => {
    return (
        <div>
            <Collapsible popout>
                {props.user.list.map(item => {
                    return (
                        <CollapsibleItem header={item.city} icon="filter_drama">
                            Here's some info on {item.city}!
                    </CollapsibleItem>
                    );
                })}
            </Collapsible>
        </div>
    );
};

export default List;
import React from "react";
import Nav from "./Nav";
import List from "./List";

const ListPage = props => (
    <div>
        <Nav user={props.user} />
        <div className="container">
            <List user={props.user}/>
        </div>
    </div>
);

export default ListPage;
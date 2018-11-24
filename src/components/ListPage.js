import React from "react";
import List from "./List";
import NewCity from "./NewCity";

const ListPage = props => (
        <div className="container">
            <List user={props.user}/>
        </div>
);

export default ListPage;
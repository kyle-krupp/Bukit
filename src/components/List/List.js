import React from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";

const List = props => (
    <Collapsible popout>
        <CollapsibleItem header='First' icon='filter_drama'>
            Lorem ipsum dolor sit amet.
        </CollapsibleItem>
    </Collapsible>
);

export default List;
import React , { Fragment } from "react"

const Greeting = (props) => {
    return(
        <Fragment>
            <p>Howdy {props.name}</p>
            <p>{props.children}</p>
        </Fragment>
    );
}

export default Greeting
import React , { Fragment } from "react";

const Greeting = (props) => {
    return(
        <Fragment>
            <div className="Greeting">
                <p onClick={props.click}>Howdy {props.name}</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name}/>
            </div>
        </Fragment>
    );
}

export default Greeting
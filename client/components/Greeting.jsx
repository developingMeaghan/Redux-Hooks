import React , { Fragment } from "react"

const Greeting = (props) => {
    return(
        <Fragment>
            <div className="Greeting">
                <p>Howdy {props.name}</p>
                <p onClick={props.click}>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name}/>
            </div>
        </Fragment>
    );
}

export default Greeting
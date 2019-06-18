import React , { Fragment } from "react";
import Greeting from "./Greeting"


class App extends React.Component {
    state = {
            people: [ 
            {name: "Bob"},
            {name: "Jim"},
            {name: "Jim-bob"} 
        ]
    }

    changeNameHandler = () => {
        console.log("Clicked")
    }
    render(){
        return(
             <Fragment>

           <h1>We working!</h1>
           <button onClick={this.changeNameHandler} >Change Name</button>
           <Greeting name={this.state.people[0].name} />
           <Greeting name={this.state.people[1].name}>G'day</Greeting>
           <Greeting name={this.state.people[2].name} />


        </Fragment>
        );
    }
}

export default App;
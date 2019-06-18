import React , { Fragment } from "react";
import Greeting from "./Greeting"


class App extends React.Component {
    state = {
            people: [ 
            {name: "Bob"},
            {name: "Jim"},
            {name: "Jim-bob"} 
        ]
    };

    changeNameHandler = (newName) => {
        this.setState({
            people: [ 
                {name: newName},
                {name: "Johnny"},
                {name: "Johnny Boy"} 
            ]
        })
    };

    changedNameHandler = (e) => {
        this.setState({
            people: [ 
                {name: "Bob"},
                {name: e.target.value},
                {name: "Jim-bob"} 
            ]
        })
    };

    render(){
        return(
             <Fragment>

           <h1>We working!</h1>
           <button className="button" onClick={() => this.changeNameHandler("Jonathan")} >Change Name</button>
           <Greeting name={this.state.people[0].name} />
           <Greeting changed={this.changedNameHandler} click={this.changeNameHandler.bind(this , "Jono")} name={this.state.people[1].name}>G'day</Greeting>
           <Greeting name={this.state.people[2].name} />


        </Fragment>
        );
    }
}

export default App;

    //the way to set up to use hooks replace class app extends...

// const App = props => {
//    const [ peopleState, setPeople ] = useState({
//         people: [ 
//                     {name: "Bob"},
//                     {name: "Jim"},
//                     {name: "Jim-bob"} 
//                 ],
//                 other: "some stuff",
//             });

//     const [other, setOther] = useState("some stuff");

//     const changeNameHandler = () => {
//                 setPeople({
//                     people: [ 
//                         {name: "John"},
//                         {name: "Johnny"},
//                         {name: "Johnny Boy"} 
//                     ]
//                 })
//             }
// instead of calling this.state when using hooks use the 2 args const take eg peopleState and setPeople depending on what you do
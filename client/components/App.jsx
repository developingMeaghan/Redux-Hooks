import React , { Fragment, useState } from "react";
import Greeting from "./Greeting"


// class App extends React.Component {
//     state = {
//             people: [ 
//             {name: "Bob"},
//             {name: "Jim"},
//             {name: "Jim-bob"} 
//         ]
//     }

//     changeNameHandler = () => {
//         this.setState({
//             people: [ 
//                 {name: "John"},
//                 {name: "Johnny"},
//                 {name: "Johnny Boy"} 
//             ]
//         })
//     }

const App = props => {
   const [ peopleState, setPeople ] = useState({
        people: [ 
                    {name: "Bob"},
                    {name: "Jim"},
                    {name: "Jim-bob"} 
                ],
                other: "some stuff",
            });

    const [other, setOther] = useState("some stuff");
    
    const changeNameHandler = () => {
                setPeople({
                    people: [ 
                        {name: "John"},
                        {name: "Johnny"},
                        {name: "Johnny Boy"} 
                    ]
                })
            }
        return(
             <Fragment>

           <h1>We working!</h1>
           <button onClick={changeNameHandler} >Change Name</button>
           <Greeting name={peopleState.people[0].name} />
           <Greeting name={peopleState.people[1].name}>G'day</Greeting>
           <Greeting name={peopleState.people[2].name} />


        </Fragment>
        );
    }

export default App;
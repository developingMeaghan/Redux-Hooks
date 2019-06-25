import React , { Fragment } from "react";
import Greeting from "./Greeting"


class App extends React.Component {
    state = {
            people: [ 
            {name: "Bob"},
            {name: "Jim"},
            {name: "Jim-bob"} 
        ],
        greet: false,
        clicked: false,
    };


    // changedNameHandler = (e) => {
    //     this.setState({
    //         people: [ 
    //             {name: "Bob"},
    //             {name: e.target.value},
    //             {name: "Jim-bob"} 
    //         ]
    //     })
    // };

    handleGreeting = () => {
        const showsUp = this.state.greet;
        this.setState({greet: !showsUp});
    }

    deleteGreeting = (personIndex) => {
        const people = this.state.people;

        people.splice(personIndex,1);
        this.setState({people: people})
    }

    handleCicked = () => {
        const appears = this.state.clicked;
        this.setState({clicked: !appears});
      }
    
    handleUnClicked = () => {
        const poof = this.state.clicked;
        this.setState({clicked: !poof});
      }
     
    render(){
    
        let people = null;
        
        if (this.state.greet) {
            people = (
            <div>
                {this.state.people.map((person,index) => {
                    return <Greeting 
                    click= {() => this.deleteGreeting(index)}
                    name={person.name} />
                })}
            </div> );
        };
        
        const clicked = this.state.clicked;
        let button;

        if (clicked) {
            button = <button className="button" onClick={()=>{ this.handleGreeting(); this.handleUnClicked() }} >Goodbye</button>;
          } else {
            button = <button className="button" onClick={()=>{ this.handleGreeting(); this.handleCicked() }} >Show Greeting</button>;
          }

        return(
            <Fragment>

                <h1>It works!</h1>
                {button}
                {people}
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
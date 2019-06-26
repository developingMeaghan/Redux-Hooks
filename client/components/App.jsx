import React , { Fragment } from "react";
import Greeting from "./Greeting";
import Radium from "radium";


class App extends React.Component {
    state = {
            people: [ 
            {id: "12",name: "Bob"},
            {id: "13",name: "Jim"},
            {id: "14",name: "Jim-bob"} 
        ],
        greet: false,
        clicked: false,
    };


    changedNameHandler = (e, id) => {
        const peopleI = this.state.people.findIndex(p =>{
            return p.id === id;
        });

        const person = {
            ...this.state.people[peopleI]
        };

        person.name = e.target.value;
        const people = [...this.state.people];
        people[peopleI] = person;

        this.setState({people: people})
    };

    handleGreeting = () => {
        const showsUp = this.state.greet;
        this.setState({greet: !showsUp});
    };

    deleteGreeting = (personIndex) => {
        const people = [...this.state.people]

        people.splice(personIndex,1);
        this.setState({people: people});
    };

    handleClicked = () => {
        const visibility = this.state.clicked;
        this.setState({clicked: !visibility});
      };
    
    render(){
        
        let people = null;
        
        if (this.state.greet) {
            people = (
            <div>
                {this.state.people.map((person,index) => {
                    return <Greeting 
                    click= {() => this.deleteGreeting(index)}
                    name={person.name} 
                    key={person.id}
                    changed={(e) => this.changedNameHandler(e, person.id)} />
                })}
            </div> );
        };
        
        const clicked = this.state.clicked;
        let button;

        if (clicked) {
            button = <button className="buttonOff" onClick={()=>{ this.handleGreeting(); this.handleClicked() }} >Goodbye</button>;
          } else {
            button = <button className="buttonOn" onClick={()=>{ this.handleGreeting(); this.handleClicked() }} >Show Greeting</button>;
          };

          const classes = [];

          if(this.state.people.length <= 2){
              classes.push("purple")
          } if(this.state.people.length <= 1){
              classes.push("attn")
          }
                  

        return(
            <Fragment>

                <h1>Let's say hello</h1>
                <p className={classes.join(" ")}>Don't leave them hanging!</p>
                {button}
                {people}
            </Fragment>
        );
    }
}

export default Radium(App);

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
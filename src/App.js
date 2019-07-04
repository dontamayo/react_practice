import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './Userinput/Userinput'
import UserOutput from './Useroutput/Useroutput';



class App extends Component {
  state = {
   username: "Super state Don"
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })

  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'torpe', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 100 }
      ]

    })
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'crosshair'
    }

    return (
      <div className="App">
        {/* <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
         onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} /> */}
          <div>
          <UserInput changed={this.usernameChangeHandler} currentName={this.state.username}/>
          <UserOutput userName={this.state.username} occupation=" Software Engineer"/>
          <UserOutput userName={this.state.username}/>
          <UserOutput userName="clayde"/>

          </div>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

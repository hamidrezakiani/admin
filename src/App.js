import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons : [
      {name:"ali",age:"19"},
      {name:"reza",age:"24"},
      {name:"hamidreza",age:"26"}
      ]
  }
  render(){
  return (
    <div className="App">
      <h1>i am hamidreza</h1>
      <button>switch name </button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
    </div>
  );
  }
}

export default App;

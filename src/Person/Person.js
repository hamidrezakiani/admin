import React from 'react';
import '../../src/App.css';
const person = (props) => {
  return <p>{props.name} is {props.age} years old</p>
}
export default person;
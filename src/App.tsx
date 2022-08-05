import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Users from './Components/Users';



let student: string = 'jeff'
let age: number = 23;
let isSmart: boolean = true;

let students: string[] = ['amir', 'Niaz']
let fees: number[] = [12, 234, 45576, 57]


interface Person {
  name: string,
  job?: string, //for optional property
  age: number,
  employed: string | boolean,
  location?: any,
  salary?: string | number
}
const person: Person = {
  name: 'Clinton',
  job: 'job',
  age: 45,
  employed: true,
  location: { lat: 22, long: 56 },
  salary: 34000
}

const handleAddUser = (firstName: string, age: number, address: string): number => {

  const total: number = 50;
  return total; //returning number
}


function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;

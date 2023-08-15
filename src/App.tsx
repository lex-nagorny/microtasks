import React from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";
import {TopCars} from "./TopCars";
import {TopComputers} from "./topComputers";

function App() {

    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100}
    ]

    const topCars = [
        {manufacturer: 'bmw', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const topComputers = [
        {id:1,name:'MyFirstComputer',place:'home'},
        {id:2,name:'MySecondComputer',place:'work'},
        {id:3,name:'MyThirdComputer',place:'home'}
    ]

  return (
    <div className="App">
      <NewComponent students={students}/>
        <TopCars cars={topCars}/>
        <TopComputers comps={topComputers}/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import {Input} from "./input/input";

export class App extends React.Component {
    dataLoaded = (t)=> {
        console.log(t);
    }

    render() {
        return (
            <div className="App">
                <Input onDataLoaded={this.dataLoaded}/>
            </div>
        )
    }
}

export default App;

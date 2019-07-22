import React from 'react';
import './App.css';
import {Input} from "./input/input";
import {Json} from "./tree/tree";

export class App extends React.Component {
    constructor(){
        super();
        this.state = {json: {}}
    }

    dataLoaded = (t)=> {
        //console.log(t);
        this.setState(()=>({json: t}));
    }

    render() {
        return (
            <div className="App">
                <Input onDataLoaded={this.dataLoaded}/>
                <Json className="json-container" json={this.state.json}/>
            </div>
        )
    }
}

export default App;

import React from 'react';
import './App.css';
import {JsonViewer} from "./JsonViewer";


export class App extends React.Component {

    render() {
        const url = 'https://api.github.com/users/cakeinpanic/repos';
        return (
            <div>
                <h1 className="header">This is the demo for simple json viewer</h1>
                <div className="sample">For example you can insert url: <a href={url}>{url}</a></div>
                <JsonViewer/>
            </div>
        );
    }

}

export default App;

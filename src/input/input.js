import React from 'react';
import {request} from "./api";
import './input.css'
export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'https://api.github.com/users/cakeinpanic/repos'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDataLoaded = this.props.onDataLoaded;

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        request(this.state.value).then(data=>{
            this.onDataLoaded(data);
        });
    }

    render() {
        return (
            <form  onSubmit={this.handleSubmit}>
            <input className="input" type="text" value={this.state.value} onChange={this.handleChange}/>
            </form>
        )
    }
}
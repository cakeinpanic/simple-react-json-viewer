import React from 'react';
import {JSON, request} from "./api";
import './Input.css'

export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'https://api.github.com/users/cakeinpanic/repos'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onDataLoaded = this.props.onDataLoaded;
        this.onError = this.props.onError;
        this.onLoading = this.props.onLoading;

    }

    componentDidMount() {
        this.onDataLoaded(JSON);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.onLoading();
        request(this.state.value)
            .then(data => {
                this.onDataLoaded(data);
            })
            .catch(() => this.onError());
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className="input" type="text" value={this.state.value} onChange={this.handleChange}/>
                <button className="btn" onClick={this.handleSubmit}>Go!</button>
            </form>
        )
    }
}
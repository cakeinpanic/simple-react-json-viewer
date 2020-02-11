import React from 'react';
import './index.css';

export class UrlInputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFormSubmitted = this.props.onFormSubmitted;
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("State Value:",this.state.value)
        this.onFormSubmitted(this.state.value);
    }

    render() {
        const placeholder = 'http://url.to.get/json';
        const helperLink  = 'http://dummy.restapiexample.com/api/v1/employees';

        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <input className="input"  placeholder={placeholder} type="text" value={this.state.value} onChange={this.handleChange}/>
                <button className="btn" onClick={this.handleSubmit}>
                Get JSON
                </button>
                <p>For example you can insert url <a href={helperLink}>{helperLink}</a></p>
            </form>
        );
    }
}

import React from 'react';
import './index.css';

export class UrlInputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {get_value: '',set_value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFormSubmitted = this.props.onFormSubmitted;
    }


    handleChange(event) {
            this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(type,event) {
        event.preventDefault();
        console.log(this.state.set_value,this.state.get_value,JSON.parse(this.state.set_value))
        type==='get'?this.onFormSubmitted(this.state.get_value,'get'):this.onFormSubmitted(this.state.set_value,'set');
    }
    

    render() {
        const placeholder_input = 'http://url.to.get/json';
        const helperlink  = 'http://dummy.restapiexample.com/api/v1/employees';
        const placeholder_textarea = {
            ipsum: "lorem",
            lorem: [
                {
                    lorem: "ipsum",
                    ipsum: {
                        lorem: "ipsum"
                    }
                }
            ]
        };

        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <input className="input" name="get_value"  placeholder={placeholder_input} type="text" value={this.state.get_value} onChange={this.handleChange}/>
                <p style={{
                    paddingLeft: '10px'
                }}>For example you can insert url <a href={helperlink}>{helperlink}</a></p>
                <button className="btn" onClick={(event) => this.handleSubmit('get', event)}>
                Get JSON
                </button>
                <h1 style={{
                    color: "lightsalmon"
                }}>
                    OR
                </h1>
                <textarea className="input-textarea" name="set_value" cols="60" rows="20" placeholder={JSON.stringify(placeholder_textarea, null, 4)} value={this.state.set_value} onChange={this.handleChange}></textarea>
                <br/>
                <button className="btn" onClick={(event) => this.handleSubmit('set', event)}>
                Set JSON
                </button>
            </form>
        );
    }
}

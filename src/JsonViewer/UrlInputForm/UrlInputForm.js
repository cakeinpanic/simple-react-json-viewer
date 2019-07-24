import React from 'react';
import styles from './UrlInputForm.module.css';

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
        this.onFormSubmitted(this.state.value);
    }

    render() {
        const placeholder = 'http://url.to.get/json';

        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <input className={styles.input}  placeholder={placeholder} type="text" value={this.state.value} onChange={this.handleChange}/>
                <button className={styles.btn} onClick={this.handleSubmit}>
                    Go!
                </button>
            </form>
        );
    }
}

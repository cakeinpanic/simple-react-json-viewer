import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {MOCK_JSON, request, parseJSON} from "./api/api";
import {UrlInputForm} from "./UrlInputForm/UrlInputForm";
import JsonViewer from "./JsonViewer";

export class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            json: MOCK_JSON,
            error: false,
            loading: false 
        }
    }

    onDataLoaded = data => {
        this.setState(() => ({ json: data, error: false, loading: false }));
        console.log("State Value:",this.state.json)
    };

    onError = () => {
        this.setState(() => ({json: null, error: true, loading: false}));
    };

    renderLoader() {
        if (!this.state.loading) {
            return null;
        }
        return <span>Loading....</span>;
    }

    renderData() {
        if (this.state.loading) {
            return null;
        }

        return this.state.error
            ? <div>Error loading</div>
            : <JsonViewer json={this.state.json}/>;
    }

    handleFormSubmitted = (src,type) => {
        this.setState(() => ({
            loading: true
        }));
        console.log(type,src,"testing in hndlle")
        type === 'get'
            ?
            request(src)
                .then((data) => { this.onDataLoaded(data);console.log(data) })
                .catch(() => this.onError())
            :
            parseJSON(src)
                .then((data) => { this.onDataLoaded(data);console.log(data) })
                .catch(() => this.onError());
    };

    render() {
        return (
            <div className="container">
                <h1 className="header">Simple JSON Viewer</h1>
                <UrlInputForm onFormSubmitted={this.handleFormSubmitted} />
                {this.renderLoader()}
                {this.renderData()}
            </div>
        );
    }

}

ReactDOM.render(<Main />, document.getElementById('root'));

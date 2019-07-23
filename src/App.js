import React from 'react';
import './App.css';
import {Input} from './input/Input';
import {Json} from './tree/Json';

export class App extends React.Component {
    constructor() {
        super();
        this.state = {json: {}};
    }

    dataLoaded = t => {
        this.setState(() => ({json: t, error: false, loading: false}));
    };

    onError = () => {
        this.setState(() => ({json: null, error: true, loading: false}));
    };

    onLoading = () => {
        this.setState(() => ({loading: true}));
    };

    renderData() {
        if (this.state.loading) {
            return null;
        }
        return this.state.error ? (
            <div className="error">Error loading</div>
        ) : (
            <Json className="json-container" json={this.state.json} />
        );
    }

    renderLoader() {
        if (!this.state.loading) {
            return null;
        }
        return <span>Loading....</span>;
    }

    render() {
        return (
            <div className="app">
                <Input onDataLoaded={this.dataLoaded} onError={this.onError} onLoading={this.onLoading} />
                {this.renderLoader()}
                {this.renderData()}
            </div>
        );
    }
}

export default App;

import React from 'react';
import {MOCK_JSON, request} from "./api/api";
import {FoldableJson} from "./FoldableJson/FoldableJson";
import styles from './Json.module.css';
import {UrlInputForm} from "./UrlInputForm/UrlInputForm";

export class JsonViewer extends React.Component {
    constructor() {
        super();
        this.state = {json: MOCK_JSON, error: false, loading: false};
    }

    onDataLoaded = t => {
        this.setState(() => ({json: t, error: false, loading: false}));
    };

    onError = () => {
        this.setState(() => ({json: null, error: true, loading: false}));
    };

    handleFormSubmitted = (src) => {
        this.setState(() => ({loading: true}));

        request(src)
            .then(data => {
                this.onDataLoaded(data);
            })
            .catch(() => this.onError());
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
            : <FoldableJson className={styles.container} json={this.state.json}/>;
    }


    render() {
        return (
            <div className={styles.component}>
                <UrlInputForm onFormSubmitted={this.handleFormSubmitted}/>
                {this.renderLoader()}
                {this.renderData()}
            </div>
        );
    }
}

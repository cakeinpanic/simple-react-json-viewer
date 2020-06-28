import React from 'react';
import {isPrimitiveType} from "./utils";
import {JsonObject} from './JsonObject';
import './index.css'

export default class JsonViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            folded: false
        };
    }
    
    shouldComponentUpdate(newProps, newState) {
        return newState.folded !== this.state.folded
    }

    fold() {
        const foldable = !this.isPrimitive();
        if (!foldable) {
            return;
        }
        this.setState(s => ({folded: !s.folded}));
    }

    isPrimitive() {
        const {json} = this.props;
        return isPrimitiveType(json) || (Array.isArray(json) && isPrimitiveType(json[0]));
    }

    renderFoldedData() {
        const {json} = this.props;
        const {folded} = this.state;

        const dotsClass = !folded ? "folded" : ''; 

        if (!json) {
            return null;
        }
        const foldedInfo = Array.isArray(json) ? `[...] ${json.length} items` : `{...} ${Object.keys(json).length} items`;
        return <span className={dotsClass}>{foldedInfo}</span>;
    }

    renderKey() {
        const {keyName} = this.props;
        const isFoldable = !this.isPrimitive();
        const {folded} = this.state;
      
        return (
            <span className={`key ${!folded ? "keyMinus": ''} ${isFoldable ? "keyFoldable": ''} ${!keyName ? "keyEmpty": ''}`} onClick={this.fold.bind(this)}>
                {keyName ? `${keyName}:` : ''}
            </span>
        );
    }

    render() {
        const {json, showComma, className} = this.props;

        if (json === undefined) {
            return <span></span>;
        }

        const {folded} = this.state;
        const jsonClass = folded ? "folded" : '';

        return (
            <div className={`"json" ${className || ''}`}>
                {this.renderKey()}
                {this.renderFoldedData()}
                <JsonObject className={jsonClass} json={json}/>
                {showComma && !folded ? ',' : null}
            </div>
        );
    }
}

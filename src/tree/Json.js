import classnames from 'classnames';
import React from 'react';
import {JsonObject} from "./JsonObject";
import './Json.css'

export class Json extends React.Component {
    constructor(props) {
        super(props);
        this.state = {folded: false};
    }

    fold() {
        const foldable = !this.isPrimitive();
        if (!foldable) {
            return
        }
        this.setState(s => ({folded: !s.folded}))
    }

    isPrimitive() {
        const {json} = this.props;
        return typeof json !== 'object' || (Array.isArray(json) && typeof json[0] !== 'object');
    }

    renderFoldedData() {
        const {json} = this.props;
        const {folded} = this.state;

        const dotsClass = classnames({hid: !folded});
        if (!json) {
            return null;
        }
        const foldedInfo = Array.isArray(json)
            ? `Array(${json.length})`
            : `Object(${Object.keys(json).length})`;
        return (<span className={dotsClass}>{foldedInfo}</span>);
    }

    renderKey() {
        const {keyName} = this.props;
        const isFoldable = !this.isPrimitive();
        const {folded} = this.state;

        const keyClass = classnames({
            key: true,
            'key-minus': !folded,
            'key-foldable': isFoldable,
            'key-empty': !keyName
        });
        return <span className={keyClass} onClick={this.fold.bind(this)}>{keyName ? `${keyName}:` : ''}</span>
    }

    render() {
        const {json, showComma, className} = this.props;
        if (!json) {
            return <span></span>
        }
        const {folded} = this.state;
        const jsonClass = classnames({hid: folded});


        return (
            <div className={`json ${className || ''}`}>
                {this.renderKey()}
                {this.renderFoldedData()}
                <JsonObject className={jsonClass} json={json}/>
                {showComma && !folded ? ',' : null}
            </div>
        )

    }
}
import classnames from 'classnames';
import React from 'react';
import {isPrimitiveType} from "../utils/utils";
import styles from './FoldableJson.module.css';
import {JsonObject} from './JsonObject';

export class FoldableJson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {folded: false};
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

        const dotsClass = classnames({[styles.folded]: !folded});

        if (!json) {
            return null;
        }
        const foldedInfo = Array.isArray(json) ? `Array(${json.length})` : `Object(${Object.keys(json).length})`;
        return <span className={dotsClass}>{foldedInfo}</span>;
    }

    renderKey() {
        const {keyName} = this.props;
        const isFoldable = !this.isPrimitive();
        const {folded} = this.state;

        const keyClass = classnames({
            [styles.key]: true,
            [styles.keyMinus]: !folded,
            [styles.keyFoldable]: isFoldable,
            [styles.keyEmpty]: !keyName
        });

        return (
            <span className={keyClass} onClick={this.fold.bind(this)}>
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
        const jsonClass = classnames({[styles.folded]: folded});

        return (
            <div className={`${styles.json} ${className || ''}`}>
                {this.renderKey()}
                {this.renderFoldedData()}
                <JsonObject className={jsonClass} json={json}/>
                {showComma && !folded ? ',' : null}
            </div>
        );
    }
}

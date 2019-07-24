import React from 'react';
import {Json} from "./Json";
import './Json.css'

export class JsonObject extends React.Component {
    renderArray(json) {
        const isPrimitiveArray = typeof json[0] !== 'object';
        const {className} = this.props;

        if (isPrimitiveArray) {
            return <span className={className}>[{json.join(',')}]</span>
        }
        return (
            <span className={className}>
                [
                    <div className="json">
                    {
                        json.map((el, i) => {
                            const lastElement = i === json.length - 1;
                            return (<span className="json" key={i}>
                                <Json json={el} showComma={!lastElement}/>
                            </span>)
                        })
                    }
                </div>
                ]
            </span>
        );
    }

    renderObject(json) {
        const keysArr = Object.keys(json);
        const {className} = this.props;

        return (
            <span className={className}>
                &#123;
                <div className="json">
                    {Object.keys(json).map((keyName, i) => {
                        const lastElement = i !== keysArr.length - 1;
                        const el = json[keyName];

                        return (
                            <Json json={el} keyName={keyName} key={i} showComma={!lastElement}/>
                        )
                    })}
                </div>
                &#125;
            </span>
        )
    }

    renderPrimitive(json) {
        const {className} = this.props;
        return <span className={className}>{json}</span>
    }

    render() {
        const {json} = this.props;

        if (!json) {
            return <span></span>
        }

        if (Array.isArray(json)) {
            return this.renderArray(json)
        }

        if (typeof json === 'object') {
            return this.renderObject(json)
        }

        return this.renderPrimitive(json);

    }
}